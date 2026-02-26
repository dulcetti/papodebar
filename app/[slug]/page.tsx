import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "../../libs/posts";
import { markdownToHtml } from '@/libs/markdowns'
import { PostDate } from "@/components/post-date";

import styles from '@/styles/Post.module.scss';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams(): { slug: string }[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const processed = await markdownToHtml(post.content)
  const contentHtml = processed.toString();

  return (
    <article className={styles["single-post"]}>
      <header className={styles["header-post"]}>
        <PostDate
          className={styles["post-date"]}
          date={post.date}
        />
        <h1 className={styles.heading}>{post.title}</h1>
      </header>

      <div
        className={styles["post-content"]}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
