import { getAllPosts, getPostsByCategory } from '@/libs/posts'
import { paginate } from '@/libs/pagination';
import { Pagination } from '@/components/pagination';
import { NewsHeroCard } from '@/components/news-hero-card';

import stylesHome from '@/styles/Home.module.scss';

type Props = {
  params: {
    page: string;
  };
};

const POSTS_PER_PAGE = 12;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const params = [];
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  for (let page = 2; page <= totalPages; page++) {
    params.push({
      page: page.toString(),
    });
  }

  return params;
}

export default async function HomePaginated({ params }: Props) {
  const { page } = await params;
  const currentPage = Number(page);
  const posts = await getAllPosts();
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

      <Pagination current={currentPage} totalPages={totalPages} />
    </div>
  );
}
