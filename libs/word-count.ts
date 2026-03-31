function stripMarkdown(markdown: string) {
  return markdown
    .replace(/!\[.*?\]\(.*?\)/g, '') // imagens
    .replace(/\[.*?\]\(.*?\)/g, '')  // links
    .replace(/`{1,3}[\s\S]*?`{1,3}/g, '') // code
    .replace(/[#>*_\-]/g, ''); // símbolos markdown
}

export function countWords(markdown: string) {
  const clean = stripMarkdown(markdown);

  return clean
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
    .toString();
}
