import { getAllPosts, getPostsByCategory } from '@/libs/posts';
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
    title: `Categoria: ${slug}`,
    description: `Posts da categoria ${slug}`,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  const categories = new Set(
    posts.flatMap((post) => post.categories)
  );

  return Array.from(categories).map((slug) => ({
    slug
  }));
}

export default async function CategoriesPage({ params }: Props) {
  const { slug } = await params;
  const posts = await getPostsByCategory(slug);
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

      <Pagination basePath={`/category/${slug}`} current={1} totalPages={totalPages} />
    </div>
  );
}
