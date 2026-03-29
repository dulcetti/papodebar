import RSS from 'rss';

import { getAllPosts } from '@/libs/posts';
import { metadata } from '@/app/layout';

const SITE_URL = 'https://www.papodebar.com';

export async function GET() {
  const posts = await getAllPosts();

  const feed = new RSS({
    title: metadata.title,
    description: metadata.description,
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/rss.xml`,
    language: 'pt-BR',
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.content,
      url: `${SITE_URL}/posts/${post.slug}`,
      date: new Date(post.date),
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}
