import Link from 'next/link'
import { getAllPosts } from '@/libs/posts'
import { paginate } from '@/libs/pagination';
import { Pagination } from '@/components/Pagination';

const POSTS_PER_PAGE = 10;

export default function Home() {
  const posts = getAllPosts();
  const { data, totalPages } = paginate(posts, 1, POSTS_PER_PAGE);

  return (
    <main>
      <h1>Meu Blog</h1>
      <ul>
        {data.map((post) => (
          <li key={post.slug}>
            {post.coverImage && <p><img src={`images/${post.coverImage}`} alt="Imagem do artigo" /></p>}
            <Link href={`/${post.slug}`}>{post.title}</Link>
            <p>{post.categories[0]}</p>
          </li>
        ))}
      </ul>

      <Pagination current={1} total={posts.length} />
    </main>
  )
}