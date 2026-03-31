import type { ComponentProps } from 'react'

import { Post, getRecentPosts } from "@/libs/posts";
import { Page as PageType } from "@/libs/pages";
import { PostDate } from "@/components/post-date";
import { SidebarHeroCard } from '@/components/sidebar-hero-card';

import styles from '@/styles/Post.module.scss';

interface PageProps extends Omit<ComponentProps<'article'>, 'children'> {
  content: string;
  page: Post | PageType;
};

export default function PageTemplate({
  content,
  page,
  className,
  ...props
}: PageProps) {
  const recentPosts = getRecentPosts();

  return (
    <article className={`${className} ${styles["container-post"]}`} {...props}>
      <section className={styles["single-post"]}>
        <header className={styles["header-post"]}>
          <PostDate
            className={styles["post-date"]}
            date={page.date}
          />
          <h1 className={styles.heading}>{page.title}</h1>
        </header>

        {page.coverImage && (
          <div className={styles["cover-image-container"]}>
            <img src={`/images/${page.coverImage}`} alt={`Capa da página sobre ${page.title}`} className={styles['cover-image']} />
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
