import { getAllPosts, getPostsByCategory } from '@/libs/posts';
import { paginate } from '@/libs/pagination';
import { Pagination } from '@/components/pagination';
import { NewsHeroCard } from '@/components/news-hero-card';
import { CATEGORIES_INFOS } from '@/libs/categories';

import stylesHome from '@/styles/Home.module.scss';
import stylesPost from '@/styles/Post.module.scss';

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
  const category = CATEGORIES_INFOS.filter((cat) => cat.slug === slug)

  return (
    <div className={stylesHome['content-home']}>
      {category && (
        <div className={stylesPost["cover-image-container"]}>
          <img src={category[0].coverImage} alt={`Capa da categoria ${category[0].name}`} className={stylesPost['cover-image']} />
        </div>
      )}

      <h1>{category[0].name}</h1>
      <p>{category[0].description}</p>

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
