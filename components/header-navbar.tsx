'use client'

import { tv, type VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'
import {
	House,
	Wine,
	Megaphone,
	SquaresFour,
	Envelope,
	MagnifyingGlass,
} from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'

export const navbarVariants = tv({
	slots: {
		root: [
			'relative flex h-14 w-full items-center shadow-lg',
			'[background-image:url("/theme/bg-azulejo.png")]',
			'[background-repeat:repeat]',
		],
		inner: 'mx-auto flex w-full max-w-screen-xl items-center px-4',
		logo: [
			'shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
			'rounded-sm',
		],
		logoImg: 'h-9 w-auto object-contain',
		nav: 'ml-6 flex flex-1 items-center justify-center gap-1',
		navItem: [
			'flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1.5',
			'text-sm font-medium text-foreground-subtle transition-colors',
			'hover:bg-black/5 hover:text-foreground',
			'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
			'data-[active]:text-foreground data-[active]:bg-black/10',
			'[&_svg]:size-4 [&_svg]:shrink-0',
		],
	},
})

export interface NavItem {
	id: string
	label: string
	href: string
	icon: Icon
}

export interface SiteNavbarProps extends ComponentProps<'header'> {
	items?: NavItem[]
	activeItemId?: string
	logoSrc?: string
	logoAlt?: string
	logoHref?: string
}

export const DEFAULT_NAV_ITEMS: NavItem[] = [
	{ id: 'inicio', label: 'início', href: '/', icon: House },
	{ id: 'bebidas', label: 'bebidas', href: '/bebidas', icon: Wine },
	{ id: 'anuncie', label: 'anuncie', href: '/anuncie', icon: Megaphone },
	{ id: 'categorias', label: 'categorias', href: '/categorias', icon: SquaresFour },
	{ id: 'contato', label: 'contato', href: '/contato', icon: Envelope },
	{ id: 'busca', label: 'busca', href: '/busca', icon: MagnifyingGlass },
]

export function SiteNavbar({
	className,
	items = DEFAULT_NAV_ITEMS,
	activeItemId,
	logoSrc,
	logoAlt = 'Logo',
	logoHref = '/',
	...props
}: SiteNavbarProps) {
	const slots = navbarVariants()

	return (
		<header
			data-slot="site-navbar"
			className={twMerge(slots.root(), className)}
			{...props}
		>
			<div data-slot="site-navbar-inner" className={slots.inner()}>
				<a
					href={logoHref}
					data-slot="site-navbar-logo"
					className={slots.logo()}
					aria-label="Ir para a página inicial"
				>
					{logoSrc ? (
						<img src={logoSrc} alt={logoAlt} className={slots.logoImg()} />
					) : (
						<span className="inline-flex h-9 items-center rounded-md bg-amber-500 px-3 text-sm font-bold text-white">
							{logoAlt}
						</span>
					)}
				</a>

				<nav
					data-slot="site-navbar-nav"
					aria-label="Navegação principal"
					className={slots.nav()}
				>
					{items.map((item) => {
						const IconComponent = item.icon
						const isActive = item.id === activeItemId

						return (
							<a
								key={item.id}
								href={item.href}
								data-slot="site-navbar-item"
								data-active={isActive ? '' : undefined}
								aria-current={isActive ? 'page' : undefined}
								className={slots.navItem()}
							>
								<IconComponent aria-hidden="true" />
								<span>{item.label}</span>
							</a>
						)
					})}
				</nav>
			</div>
		</header>
	)
}
