import { tv, type VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'

export const newsHeroCardVariants = tv({
	slots: {
		root: [
			'group relative overflow-hidden rounded-xl border border-border bg-surface',
			'shadow-sm transition-shadow duration-300 hover:shadow-md',
			'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
		],
		image: 'w-full object-cover transition-transform duration-500 group-hover:scale-105',
		overlay: [
			'absolute inset-0 bg-gradient-to-t',
			'from-black/75 via-black/20 to-transparent',
		],
		content: 'absolute',
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
			},
			md: {
				image: 'h-52',
				title: 'text-base',
				content: 'bottom-2 left-2',
			},
			lg: {
				image: 'h-64',
				title: 'text-lg',
				content: 'bottom-4 left-4',
			},
		},
	},
	defaultVariants: { size: 'md' },
})

export interface NewsHeroCardProps extends
  Omit<ComponentProps<'article'>, 'children'>,
	VariantProps<typeof newsHeroCardVariants> {
    imageSrc: string
    imageAlt?: string
    title: string
    href?: string
    onClick?: () => void
}

export function NewsHeroCard({
	className,
	size,
	imageSrc,
	imageAlt = '',
	title,
	href,
	onClick,
	...props
}: NewsHeroCardProps) {
	const slots = newsHeroCardVariants({ size })

	const isInteractive = Boolean(href || onClick)

	const inner = (
		<>
			<img
				data-slot="news-hero-card-image"
				src={imageSrc}
				alt={imageAlt}
				className={slots.image()}
			/>

			{/* gradient overlay */}
			<div
				data-slot="news-hero-card-overlay"
				aria-hidden="true"
				className={slots.overlay()}
			/>

			{/* text content */}
			<div data-slot="news-hero-card-content" className={slots.content()}>
				<p data-slot="news-hero-card-title" className={slots.title()}>
					{title}
				</p>
			</div>
		</>
	)

	if (href) {
		return (
			<article
				data-slot="news-hero-card"
				className={twMerge(slots.root(), className)}
				{...props}
			>
				<a
					href={href}
					className="block focus-visible:outline-none"
					tabIndex={0}
				>
					{inner}
				</a>
			</article>
		)
	}

	return (
		<article
			data-slot="news-hero-card"
			role={isInteractive ? 'button' : undefined}
			tabIndex={isInteractive ? 0 : undefined}
			onClick={onClick}
			onKeyDown={
				isInteractive
					? (e) => {
							if (e.key === 'Enter' || e.key === ' ') onClick?.()
						}
					: undefined
			}
			className={twMerge(
				slots.root(),
				isInteractive && 'cursor-pointer',
				className,
			)}
			{...props}
		>
			{inner}
		</article>
	)
}
