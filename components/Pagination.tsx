import Link from 'next/link'

interface Props {
  current: number
  total: number
  basePath?: string
}

type PageItem =
  | { type: 'page'; value: number }
  | { type: 'ellipsis' }

export function Pagination({
  current,
  total,
  basePath = '',
}: Props) {
  if (total <= 1) return null

  const createPageLink = (page: number) =>
    page === 1 ? basePath : `${basePath}/page/${page}`

  const pages: PageItem[] = []

  const delta = 2
  const rangeStart = Math.max(2, current - delta)
  const rangeEnd = Math.min(total - 1, current + delta)

  // Primeira página
  pages.push({ type: 'page', value: 1 })

  // Reticências antes do range
  if (rangeStart > 2) {
    pages.push({ type: 'ellipsis' })
  }

  // Páginas ao redor da atual
  for (let i = rangeStart; i <= rangeEnd; i++) {
    pages.push({ type: 'page', value: i })
  }

  // Reticências depois do range
  if (rangeEnd < total - 1) {
    pages.push({ type: 'ellipsis' })
  }

  // Última página
  if (total > 1) {
    pages.push({ type: 'page', value: total })
  }

  return (
    <nav style={{ marginTop: 40 }}>
      {/* Botão anterior */}
      {current > 1 && (
        <Link
          href={createPageLink(current - 1)}
          style={{ marginRight: 12 }}
        >
          ←
        </Link>
      )}

      {pages.map((item, index) => {
        if (item.type === 'ellipsis') {
          return (
            <span key={`ellipsis-${index}`} style={{ margin: '0 8px' }}>
              ...
            </span>
          )
        }

        const isActive = item.value === current

        return (
          <Link
            key={item.value}
            href={createPageLink(item.value)}
            style={{
              margin: '0 6px',
              fontWeight: isActive ? 'bold' : 'normal',
              textDecoration: isActive ? 'underline' : 'none',
            }}
          >
            {item.value}
          </Link>
        )
      })}

      {/* Botão próxima */}
      {current < total && (
        <Link
          href={createPageLink(current + 1)}
          style={{ marginLeft: 12 }}
        >
          →
        </Link>
      )}
    </nav>
  )
}