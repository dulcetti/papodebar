import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/libs/posts";
import { getAllPages, getPageBySlug } from "@/libs/pages";
import PostTemplate from "@/templates/post";
import PageTemplate from "@/templates/page";
import { markdownToHtml } from '@/libs/markdowns';

interface MetadataProps {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams(): { slug: string }[] {
  const posts = getAllPosts()
  const pages = getAllPages()

  const all = [...posts, ...pages]

  const slugMap = new Map<string, boolean>()

  all.forEach((item) => {
    if (slugMap.has(item.slug)) {
      throw new Error(`Slug duplicado encontrado: ${item.slug}`)
    }
    slugMap.set(item.slug, true)
  })

  return all.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: MetadataProps) {
  const { slug } = await params

  const post = getPostBySlug(slug)
  if (post) {
    return {
      title: post.title,
      description: post.description,
    }
  }

  const page = getPageBySlug(slug)
  if (page) {
    return {
      title: page.title,
      description: page.description,
    }
  }

  return {}
}

export default async function PostPage({ params }: MetadataProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug)

  if (post) {
    const processed = await markdownToHtml(post.content)
    const contentHtml = processed.toString();
    return <PostTemplate post={post} content={contentHtml} />
  }

  const page = getPageBySlug(slug);

  if (page) {
    const processed = await markdownToHtml(page.content)
    const contentHtml = processed.toString();
    return <PageTemplate page={page} content={contentHtml} />
  }

  notFound()
}
