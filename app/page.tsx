import { getAllPosts } from '@/libs/posts'
import { paginate } from '@/libs/pagination';
import { Pagination } from '@/components/pagination'
import { NewsHeroCard } from '@/components/news-hero-card';

import stylesGrid from '@/styles/Grid.module.scss';
import stylesHome from '@/styles/Home.module.scss';

const POSTS_PER_PAGE = 10;

export default function Home() {
  const posts = getAllPosts();
  const { data } = paginate(posts, 1, POSTS_PER_PAGE);

  return (
    <main className={stylesGrid['container-fluid']}>
      <div className={stylesHome['content-home']}>
        <ul className={stylesHome['list-posts']}>
          {data.map((post) => (
            <li key={post.slug} className={stylesHome['post']}>
              <NewsHeroCard
                href={`/${post.slug}`}
                imageSrc={`images/${post.coverImage}`}
                imageAlt={`Imagem do artigo ${post.title}`}
                size="md"
                title={post.title}
              />
            </li>
          ))}
        </ul>

        <Pagination current={1} total={posts.length} />
      </div>
    </main>
  )
}
