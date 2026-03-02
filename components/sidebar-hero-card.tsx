import type { ComponentProps } from 'react';

import styles from '@/styles/ListPostsSidebar.module.scss';

export interface SidebarHeroCardProps
	extends Omit<ComponentProps<'article'>, 'children'> {
	imageSrc: string
	imageAlt?: string
	title: string
	category?: string
	href: string
}

export function SidebarHeroCard({
	className,
	imageSrc,
	imageAlt = '',
	title,
	category,
	href,
	...props
}: SidebarHeroCardProps) {
  return (
    <article
      data-slot="sidebar-hero-card"
      className={styles["list-posts-sidebar"]}
      {...props}
    >
      <a href={href} className={styles.post} tabIndex={0}>
        <img
          data-slot="sidebar-hero-card-image"
          src={imageSrc}
          alt={imageAlt}
          className={styles.thumb}
        />

        {category && (
          <p
            data-slot="sidebar-hero-card-badge"
            className={styles.categories}
          >
            <span className={styles.category}>
              {category}
            </span>
          </p>
        )}

        <h3 data-slot="sidebar-hero-card-title" className={styles.title}>
          {title}
        </h3>
      </a>
    </article>
  )
}
