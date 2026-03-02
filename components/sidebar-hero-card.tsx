import type { ComponentProps } from 'react';

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
      className={}
      {...props}
    >
      <a href={href} className="block focus-visible:outline-none" tabIndex={0}>
        <img
          data-slot="sidebar-hero-card-image"
          src={imageSrc}
          alt={imageAlt}
          className={}
        />

        <div
          data-slot="sidebar-hero-card-overlay"
          aria-hidden="true"
          className={}
        />

        {category && (
          <span
            data-slot="sidebar-hero-card-badge"
            className={}
          >
            {category}
          </span>
        )}

        <div data-slot="sidebar-hero-card-content" className={}>
          <p data-slot="sidebar-hero-card-title" className={}>
            {title}
          </p>
        </div>
      </a>
    </article>
  )
}
