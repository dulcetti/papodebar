import type { ComponentProps } from 'react'

import { Post, getRecentPosts } from "@/libs/posts";
import { PostDate } from "@/components/post-date";
import { SidebarHeroCard } from '@/components/sidebar-hero-card';
import { ArticleSchema } from "@/components/article-schema";

import styles from '@/styles/Post.module.scss';

interface PostProps extends Omit<ComponentProps<'article'>, 'children'> {
  content: string;
  post: Post;
};

export default function PostTemplate({
  content,
  post,
  className,
  ...props
}: PostProps) {
  const recentPosts = getRecentPosts(post.slug);

  return (
    <article className={`${className} ${styles["container-post"]}`} {...props}>
      <ArticleSchema data={post} />
      <section className={styles["single-post"]}>
        <header className={styles["header-post"]}>
          <PostDate
            className={styles["post-date"]}
            date={post.date}
          />
          <h1 className={styles.heading}>{post.title}</h1>
        </header>

        {post.coverImage && (
          <div className={styles["cover-image-container"]}>
            <img src={`/images/${post.coverImage}`} alt={`Capa da página sobre ${post.title}`} className={styles['cover-image']} />
          </div>
        )}

        <div
          className={styles["post-content"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>

      <aside className={styles["sidebar-post"]}>
        {recentPosts.map((recentPost: Post) => (
          <SidebarHeroCard
            key={recentPost.slug}
            imageSrc={`/images/${recentPost.coverImage}`}
            title={recentPost.title}
            category={recentPost.categories[0]}
            href={`/${recentPost.slug}`}
          />
        ))}
      </aside>
    </article>
  );
}
