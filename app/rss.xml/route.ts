import RSS from 'rss';

import { getAllPosts } from '@/libs/posts';
import { metadata } from '@/app/layout';
import { sanitizeXml } from '@/libs/sanitize';


export async function GET() {
  const SITE_URL = 'https://www.papodebar.com';
  const posts = await getAllPosts();

  const feed = new RSS({
    title: metadata.title,
    description: metadata.description,
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/rss.xml`,
    language: 'pt-BR',
  });

  posts.forEach((post, index) => {
    try {
      if (index <= 10) {
        feed.item({
          categories: putCategories(post.categories, post.tags),
          custom_elements: [
            {
              "content:encoded": sanitizeXml(post.content),
            },
          ],
          date: new Date(post.date),
          description: sanitizeXml(post.content).slice(0, 200) + '...',
          title: post.title,
          url: `${SITE_URL}/posts/${post.slug}`,
        });
      }
    } catch (error) {
      console.error(`Erro ao adicionar post "${post.title}" ao feed RSS:`, error);
    }
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}

function putCategories(categories: string[] | undefined, tags: string[] | undefined): string[] {
  const finalCategories: string[] = [];

  if (categories) {
    categories.forEach((category) => {
      if (category) {
        finalCategories.push(category);
      }
    });
  }

  if (tags) {
    tags.forEach((tag) => {
      if (tag) {
        finalCategories.push(tag);
      }
    });
  }

  return finalCategories;
}
