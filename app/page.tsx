import Link from 'next/link'
import { getAllPosts } from '@/libs/posts'
import { paginate } from '@/libs/pagination';
import { Pagination } from '@/components/Pagination';

import stylesGrid from '@/styles/Grid.module.scss';
import stylesHome from '@/styles/Home.module.scss';

const POSTS_PER_PAGE = 10;

export default function Home() {
  const posts = getAllPosts();
  const { data } = paginate(posts, 1, POSTS_PER_PAGE);

  return (
    <main className={stylesGrid['container-fluid']}>
      <div className={stylesHome['content-home']}>
        <h1>Papo de Bar</h1>
        <ul className={stylesHome['list-posts']}>
          {data.map((post) => (
            <li key={post.slug} className={stylesHome['post']}>
              {post.coverImage && <p><img src={`images/${post.coverImage}`} alt="Imagem do artigo" className={stylesHome['thumb']} /></p>}
              <Link href={`/${post.slug}`}>{post.title}</Link>
              <p className={stylesHome['categories']}>{post.categories[0]}</p>
            </li>
          ))}
        </ul>

        <Pagination current={1} total={posts.length} />
      </div>
    </main>
  )
}
