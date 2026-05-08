// app/search-index.json/route.ts
import { getAllPosts } from '@/libs/posts';

export const dynamic = 'force-static';

export async function GET() {
  const posts = getAllPosts().map(({
    slug,
    title,
    description,
    excerpt,
    tags,
    categories,
    coverImage
  }) => ({
    slug,
    title,
    description,
    excerpt,
    tags,
    categories,
    coverImage,
  }));

  return Response.json(posts);
}
