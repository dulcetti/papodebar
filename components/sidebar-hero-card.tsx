import { tv, type VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'

export const sidebarHeroCardVariants = tv({
	slots: {
		root: [
			'group relative overflow-hidden rounded-xl border border-border bg-surface',
			'shadow-sm transition-shadow duration-300 hover:shadow-md',
			'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
		],
		image: 'w-full object-cover transition-transform duration-500 group-hover:scale-105',
		overlay: 'absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent',
		// Category badge — top-right corner
		badge: [
			'absolute right-2 top-2 rounded-md px-2 py-0.5',
			'bg-primary text-primary-foreground',
			'text-xs font-semibold leading-snug tracking-wide',
			'shadow-sm',
		],
		content: 'absolute bottom-0 left-0 right-0 p-4',
		title: [
			'font-semibold leading-snug text-white',
			'[text-shadow:_0_1px_4px_rgba(0,0,0,0.4)]',
		],
	},
	variants: {
		size: {
			sm: {
				image: 'h-40',
				title: 'text-sm',
				content: 'p-3',
				badge: 'text-xs px-1.5 py-0.5',
			},
			md: {
				image: 'h-52',
				title: 'text-base',
				content: 'p-4',
				badge: 'text-xs px-2 py-0.5',
			},
			lg: {
				image: 'h-64',
				title: 'text-lg',
				content: 'p-5',
				badge: 'text-sm px-2.5 py-1',
			},
		},
	},
	defaultVariants: { size: 'md' },
})

export interface SidebarHeroCardProps
	extends Omit<ComponentProps<'article'>, 'children'>,
		VariantProps<typeof sidebarHeroCardVariants> {
	imageSrc: string
	imageAlt?: string
	title: string
	category?: string
	href: string
}

export function SidebarHeroCard({
	className,
	size,
	imageSrc,
	imageAlt = '',
	title,
	category,
	href,
	...props
}: SidebarHeroCardProps) {
	const slots = sidebarHeroCardVariants({ size });

  return (
    <article
      data-slot="sidebar-hero-card"
      className={twMerge(slots.root(), className)}
      {...props}
    >
      <a href={href} className="block focus-visible:outline-none" tabIndex={0}>
        <img
          data-slot="sidebar-hero-card-image"
          src={imageSrc}
          alt={imageAlt}
          className={slots.image()}
        />

        <div
          data-slot="sidebar-hero-card-overlay"
          aria-hidden="true"
          className={slots.overlay()}
        />

        {category && (
          <span
            data-slot="sidebar-hero-card-badge"
            className={slots.badge()}
          >
            {category}
          </span>
        )}

        <div data-slot="sidebar-hero-card-content" className={slots.content()}>
          <p data-slot="sidebar-hero-card-title" className={slots.title()}>
            {title}
          </p>
        </div>
      </a>
    </article>
  )
}
