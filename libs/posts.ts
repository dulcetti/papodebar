import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostFrontmatter {
  title: string
  date: string
  categories: string
  coverImage: string
  description?: string
}

export interface Post extends PostFrontmatter {
  slug: string
  content: string
  categories: string
  coverImage: string
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
  })

  posts.sort((previous, next) => {
    const previousDate = new Date(previous.date).getTime()
    const nextDate = new Date(next.date).getTime()
    return nextDate - previousDate
  })

  return posts
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug)
}
