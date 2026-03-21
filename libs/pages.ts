import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PageFrontmatter {
  title: string
  date: string
  categories: string
  coverImage: string
  description?: string
}

export interface Page extends PageFrontmatter {
  slug: string
  content: string
  categories: string
  coverImage: string
}

const pageDir = path.join(process.cwd(), 'content/pages')

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

export function getAllPages(): Page[] {
  const files = getMarkdownFiles(pageDir)

  const pages = files.map((filePath) => {
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)

    // pega o nome da pasta onde está o index.md
    const slug = path.basename(path.dirname(filePath))

    return {
      slug,
      content,
      ...(data as PageFrontmatter),
    }
  });

  return formatPageDesc(pages);
}

export function getPageBySlug(slug: string): Page | undefined {
  return getAllPages().find((page) => page.slug === slug)
}

function formatPageDesc(pages: Page[]): Page[] {
  const pagesDesc = pages.sort((previous, next) => {
    const previousDate = new Date(previous.date).getTime()
    const nextDate = new Date(next.date).getTime()
    return nextDate - previousDate
  });

  return pagesDesc;
}
