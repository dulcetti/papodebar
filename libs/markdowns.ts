import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'

import { remarkVideoEmbed } from './remark-videos'

export async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkVideoEmbed)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .process(markdown)

  return result.toString()
}
