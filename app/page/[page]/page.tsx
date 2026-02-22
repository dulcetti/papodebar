import { getAllPosts } from '@/libs/posts'
import { paginate } from '@/libs/pagination'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import { Pagination } from '@/components/Pagination';

const POSTS_PER_PAGE = 10

interface Props {
  params: Promise<{ page: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 2).toString(), // começa da página 2
  }))
}

export default async function Page({ params }: Props) {
  const { page } = await params
  const currentPage = parseInt(page)

  const posts = getAllPosts()
  const { data, totalPages } = paginate(posts, currentPage, POSTS_PER_PAGE)

  if (currentPage > totalPages || currentPage < 2) {
    notFound()
  }

  return (
    <div>
      <h1>Página {currentPage}</h1>

      {data.map((post) => (
        <div key={post.slug}>
          <Link href={`/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
        </div>
      ))}

      <Pagination current={currentPage} total={totalPages} />
    </div>
  )
}