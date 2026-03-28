import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostFrontmatter {
  title: string;
  date: string;
  categories: string[];
  coverImage: string;
  description?: string;
  tags?: string[];
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}

const postsDir = path.join(process.cwd(), 'content/posts')

function getMarkdownFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      return getMarkdownFiles(fullPath)
    }

    if (entry.isFile() && entry.name === 'index.md') {
      return [fullPath]
    }

    return []
  })
}

export function getAllPosts(): Post[] {
  const files = getMarkdownFiles(postsDir)

  const posts = files.map((filePath) => {
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)

    // pega o nome da pasta onde está o index.md
    const slug = path.basename(path.dirname(filePath))

    return {
      slug,
      content,
      ...(data as PostFrontmatter),
    }
  });

  return formatPostsDesc(posts);
}

export function getRecentPosts(actualPostSlug?: string): Post[] {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.slug !== actualPostSlug).slice(0, 10);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((post) => post.categories.includes(category));

}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post) => post.tags?.includes(tag));
}

function formatPostsDesc(posts: Post[]): Post[] {
  const postsDesc = posts.sort((previous, next) => {
    const previousDate = new Date(previous.date).getTime()
    const nextDate = new Date(next.date).getTime()
    return nextDate - previousDate
  });

  return postsDesc;
}
