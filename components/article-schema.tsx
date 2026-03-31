import { Post } from "@/libs/posts";
import { sanitizeXml } from "@/libs/sanitize";
import { countWords } from "@/libs/word-count";

type Props = {
  data: Post;
}

export function ArticleSchema({ data }: Props) {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": sanitizeXml(data.content).slice(0, 200) + '...',
    "image": [
      data.coverImage
    ],
    "author": {
      "@type": "Person",
      "name": "Seu Nome"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Papo de Bar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.papodebar.com/images/marca-pdb@1x.png"
      }
    },
    "datePublished": data.date,
    "dateModified": data.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.papodebar.com/${data.slug}`
    },
    "keywords": data.tags?.join(", ") || "",
    "articleSection": data.categories.join(", "),
    "wordCount": countWords(data.content)
  }
  console.info(data);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(ldJson).replace(/</g, '\\u003c')
      }}
    />
  )
}
