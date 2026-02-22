export interface PaginationResult<T> {
  data: T[]
  currentPage: number
  totalPages: number
}

export function paginate<T>(
  items: T[],
  currentPage: number,
  perPage: number
): PaginationResult<T> {
  const totalPages = Math.ceil(items.length / perPage)

  const start = (currentPage - 1) * perPage
  const end = start + perPage

  return {
    data: items.slice(start, end),
    currentPage,
    totalPages,
  }
}