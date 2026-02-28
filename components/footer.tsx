import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

export const footerVariants = tv({
	slots: {
		root: 'w-full bg-[#5a5a5a] text-white',

		// Main content row
		body: 'mx-auto flex max-w-screen-xl items-start gap-8 px-6 py-8',

		// Left column — logo + socials
		brand: 'flex shrink-0 flex-col items-start gap-4',
		brandLogo: 'h-28 w-auto object-contain',
		brandTagline: 'text-base font-semibold text-white',
		socialGrid: 'grid grid-cols-3 gap-2',
		socialLink: [
			'flex size-10 items-center justify-center rounded-md transition-opacity',
			'hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
			'[&_svg]:size-5',
		],

		// Divider between brand and links
		divider: 'w-px self-stretch bg-white/20',

		// Links area
		linksArea: 'flex flex-1 flex-wrap gap-x-0 gap-y-6',
		linksColumn: [
			'flex min-w-[140px] flex-col gap-1.5',
			'border-l border-white/20 pl-6 first:border-l-0 first:pl-0',
		],
		link: [
			'text-sm text-white/80 transition-colors',
			'hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm',
		],

		// Bottom bar
		bottomBar: 'border-t border-white/10 px-6 py-3',
		copyright: 'text-xs text-white/60',
	},
})

// ---------------------------------------------------------------------------
// Sub-types
// ---------------------------------------------------------------------------

export interface SocialLink {
	id: string
	label: string
	href: string
	/** Background color for the social icon button */
	color: string
	/** SVG path(s) rendered inside the icon */
	iconPath: string
}

export interface FooterLinkGroup {
	id: string
	links: Array<{ label: string; href: string }>
}

// ---------------------------------------------------------------------------
// Default data (matching the design)
// ---------------------------------------------------------------------------

export const SOCIAL_LINKS: SocialLink[] = [
	{
		id: 'facebook',
		label: 'Facebook',
		href: 'https://facebook.com',
		color: '#3b5998',
		iconPath:
			'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
	},
	{
		id: 'twitter',
		label: 'Twitter / X',
		href: 'https://twitter.com',
		color: '#1da1f2',
		iconPath:
			'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
	},
	{
		id: 'youtube',
		label: 'YouTube',
		href: 'https://youtube.com',
		color: '#ff0000',
		iconPath:
			'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z',
	},
	{
		id: 'rss',
		label: 'RSS Feed',
		href: '/feed',
		color: '#f26522',
		iconPath:
			'M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16M5 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0z',
	},
	{
		id: 'pinterest',
		label: 'Pinterest',
		href: 'https://pinterest.com',
		color: '#e60023',
		iconPath:
			'M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.38 1.27-5.38s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.92 0 3.4-2.02 3.4-4.95 0-2.59-1.86-4.4-4.52-4.4-3.08 0-4.89 2.31-4.89 4.7 0 .93.36 1.93.8 2.47.09.11.1.2.07.31-.08.34-.26 1.09-.3 1.24-.05.2-.16.24-.37.14-1.39-.65-2.26-2.68-2.26-4.32 0-3.51 2.55-6.74 7.36-6.74 3.86 0 6.86 2.75 6.86 6.42 0 3.83-2.41 6.91-5.76 6.91-1.13 0-2.19-.59-2.55-1.28l-.69 2.59c-.25.97-.93 2.18-1.39 2.92C10.72 21.94 11.35 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z',
	},
	{
		id: 'instagram',
		label: 'Instagram',
		href: 'https://instagram.com',
		color: '#c13584',
		iconPath:
			'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z',
	},
]

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
	{
		id: 'col-1',
		links: [
			{ label: 'Anuncie', href: '/anuncie' },
			{ label: 'Equipe', href: '/equipe' },
			{ label: 'Contos Etílicos', href: '/contos-etilicos' },
			{ label: 'Degustações e Harmonizações', href: '/degustacoes' },
			{ label: 'Drinks', href: '/drinks' },
		],
	},
	{
		id: 'col-2',
		links: [
			{ label: 'Contato', href: '/contato' },
			{ label: '#EstiloPdB', href: '/estilo-pdb' },
			{ label: 'Curiosidades', href: '/curiosidades' },
			{ label: 'Dicas', href: '/dicas' },
			{ label: 'Entrevistas', href: '/entrevistas' },
		],
	},
	{
		id: 'col-3',
		links: [
			{ label: 'Eventos', href: '/eventos' },
			{ label: 'Gastronomia', href: '/gastronomia' },
			{ label: 'Música', href: '/musica' },
			{ label: 'Onde Beber?', href: '/onde-beber' },
			{ label: 'Promoções', href: '/promocoes' },
			{ label: 'Shots', href: '/shots' },
		],
	},
	{
		id: 'col-4',
		links: [
			{ label: 'Experiência PdB', href: '/experiencia-pdb' },
			{ label: 'Marketing', href: '/marketing' },
			{ label: 'Novidades', href: '/novidades' },
			{ label: 'Produção de Cerveja', href: '/producao-de-cerveja' },
			{ label: 'Responsabilidade', href: '/responsabilidade' },
			{ label: 'Tecnologia', href: '/tecnologia' },
		],
	},
]

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface FooterProps extends ComponentProps<'footer'> {
	logoSrc?: string
	logoAlt?: string
	tagline?: string
	socialLinks?: SocialLink[]
	linkGroups?: FooterLinkGroup[]
	copyrightText?: string
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Footer({
	className,
	logoSrc,
	logoAlt = 'PdB',
	tagline = 'sigam-me os bons',
	socialLinks = SOCIAL_LINKS,
	linkGroups = FOOTER_LINK_GROUPS,
	copyrightText = '© 2008 - 2026 Papo de Bar',
	...props
}: FooterProps) {
	const slots = footerVariants()

	return (
		<footer
			data-slot="site-footer"
			className={twMerge(slots.root(), className)}
			{...props}
		>
			{/* ── Main body ── */}
			<div data-slot="site-footer-body" className={slots.body()}>

				{/* Brand column */}
				<div data-slot="site-footer-brand" className={slots.brand()}>
					{logoSrc ? (
						<img
							src={logoSrc}
							alt={logoAlt}
							className={slots.brandLogo()}
						/>
					) : (
						/* Fallback badge matching the gold PdB shield in the design */
						<div
							aria-label={logoAlt}
							className="flex h-28 w-28 items-center justify-center rounded-lg bg-amber-500 text-3xl font-black text-white shadow-md"
						>
							PdB
						</div>
					)}

					<p data-slot="site-footer-tagline" className={slots.brandTagline()}>
						{tagline}
					</p>

					{/* Social icons grid */}
					<div data-slot="site-footer-socials" className={slots.socialGrid()}>
						{socialLinks.map((social) => (
							<a
								key={social.id}
								href={social.href}
								aria-label={social.label}
								target="_blank"
								rel="noopener noreferrer"
								data-slot="site-footer-social-link"
								className={slots.socialLink()}
								style={{ backgroundColor: social.color }}
							>
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
									className="size-5"
								>
									<path d={social.iconPath} />
								</svg>
							</a>
						))}
					</div>
				</div>

				{/* Vertical divider */}
				<div data-slot="site-footer-divider" className={slots.divider()} aria-hidden="true" />

				{/* Links columns */}
				<nav
					data-slot="site-footer-links"
					aria-label="Links do rodapé"
					className={slots.linksArea()}
				>
					{linkGroups.map((group) => (
						<ul
							key={group.id}
							data-slot="site-footer-links-column"
							className={slots.linksColumn()}
							role="list"
						>
							{group.links.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										data-slot="site-footer-link"
										className={slots.link()}
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					))}
				</nav>
			</div>

			{/* ── Bottom bar ── */}
			<div data-slot="site-footer-bottom" className={slots.bottomBar()}>
				<p className={slots.copyright()}>{copyrightText}</p>
			</div>
		</footer>
	)
}

// ---------------------------------------------------------------------------
// Usage example
// ---------------------------------------------------------------------------
//
// <SiteFooter
//   logoSrc="/images/logo-pdb.png"
//   logoAlt="Papo de Bar"
//   tagline="sigam-me os bons"
//   copyrightText="© 2008 - 2026 Papo de Bar"
// />
