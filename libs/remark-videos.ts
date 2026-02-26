import { visit } from 'unist-util-visit'
import type { Root, Paragraph } from 'mdast'
import type { Parent } from 'unist'

function getYouTubeId(url: string): string | null {
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?]+)/,
    /youtube\.com\/shorts\/([^?]+)/,
    /youtube\.com\/embed\/([^?]+)/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }

  return null
}

function getVimeoId(url: string): string | null {
  const patterns = [
    /vimeo\.com\/(\d+)/,
    /player\.vimeo\.com\/video\/(\d+)/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }

  return null
}

function createIframe(src: string): string {
  const iframe = `
    <div class="video-container">
      <iframe
        src="${src}"
        frameborder="0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>`
  return iframe
}

export function remarkVideoEmbed() {
  return (tree: Root) => {
    visit(tree, 'paragraph', (node: Paragraph, index?: number, parent?: Parent) => {
      if (index === undefined || !parent) return

      if (node.children.length !== 1) return

      const child = node.children[0]

      if (child.type !== 'text') return

      const url = child.value.trim()

      if (!url.startsWith('http')) return

      const youtubeId = getYouTubeId(url)

      if (youtubeId) {
        parent.children[index] = {
          type: 'html',
          value: createIframe(
            `https://www.youtube.com/embed/${youtubeId}`,
          ),
        } as any
        return
      }

      const vimeoId = getVimeoId(url)

      if (vimeoId) {
        parent.children[index] = {
          type: 'html',
          value: createIframe(
            `https://player.vimeo.com/video/${vimeoId}`,
          ),
        } as any
      }
    })
  }
}
