import { getAllPosts, getPostsByCategory } from '@/libs/posts'
import { paginate } from '@/libs/pagination';
import { Pagination } from '@/components/pagination';
import { NewsHeroCard } from '@/components/news-hero-card';

import stylesHome from '@/styles/Home.module.scss';

type Props = {
  params: {
    page: string;
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

  const params = [];

  for (const slug of categories) {
    const filtered = posts.filter((post) =>
      post.categories.includes(slug)
    );

    const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);

    for (let page = 2; page <= totalPages; page++) {
      params.push({
        slug,
        page: page.toString(),
      });
    }
  }

  return params;
}

export default async function CategoriesPage({ params }: Props) {
  const { slug, page } = await params;
  const currentPage = Number(page);
  const posts = await getPostsByCategory(slug);
  const { data, totalPages } = paginate(posts, currentPage, POSTS_PER_PAGE);

  if (currentPage > totalPages) {
    return <p>Página não encontrada</p>;
  }

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

      <Pagination basePath={`/category/${slug}`} current={currentPage} totalPages={totalPages} />
    </div>
  );
}
