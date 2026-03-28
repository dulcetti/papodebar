import { getAllPosts, getPostsByTag } from '@/libs/posts';
import { paginate } from '@/libs/pagination';
import { Pagination } from '@/components/pagination';
import { NewsHeroCard } from '@/components/news-hero-card';

import stylesHome from '@/styles/Home.module.scss';

type Props = {
  params: {
    slug: string;
  };
};

const POSTS_PER_PAGE = 12;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  return {
    title: `Tag: ${slug}`,
    description: `Posts da tag ${slug}`,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  const tags = new Set(
    posts.flatMap((post) => post.tags ?? [])
  );

  return Array.from(tags)
    .filter((slug): slug is string => !!slug)
    .map((slug) => ({
      slug,
    }));
}

export default async function TagsPage({ params }: Props) {
  const { slug } = await params;
  const posts = await getPostsByTag(slug);
  const { data, totalPages } = paginate(posts, 1, POSTS_PER_PAGE);

  return (
    <div className={stylesHome['content-home']}>
      <ul className={stylesHome['list-posts']}>
        {data.map((post) => (
          <li key={post.slug} className={stylesHome['post']}>
            <NewsHeroCard
              href={`/${post.slug}`}
              imageSrc={`/images/${post.coverImage}`}
              imageAlt={`Imagem do artigo ${post.title}`}
              size="md"
              title={post.title}
            />
          </li>
        ))}
      </ul>

      <Pagination basePath={`/tag/${slug}`} current={1} totalPages={totalPages} />
    </div>
  );
}
