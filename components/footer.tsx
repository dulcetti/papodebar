import type { ComponentProps } from 'react';

import styles from '@/styles/Footer.module.scss';

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

export const FOOTER_LINK_PAGES = [
  { label: 'Anuncie', href: '/anuncie' },
  { label: 'Equipe', href: '/equipe' },
  { label: 'Contos Etílicos', href: '/contos-etilicos' },
  { label: 'Degustações e Harmonizações', href: '/degustacoes' },
  { label: 'Drinks', href: '/drinks' },
  { label: 'Contato', href: '/contato' },
  { label: '#EstiloPdB', href: '/estilo-pdb' },
  { label: 'Curiosidades', href: '/curiosidades' },
  { label: 'Dicas', href: '/dicas' },
  { label: 'Entrevistas', href: '/entrevistas' },
]

export const FOOTER_LINK_CATEGORIES = [
  { label: 'Eventos', href: '/eventos' },
  { label: 'Gastronomia', href: '/gastronomia' },
  { label: 'Música', href: '/musica' },
  { label: 'Onde Beber?', href: '/onde-beber' },
  { label: 'Promoções', href: '/promocoes' },
  { label: 'Shots', href: '/shots' },
  { label: 'Experiência PdB', href: '/experiencia-pdb' },
  { label: 'Marketing', href: '/marketing' },
  { label: 'Novidades', href: '/novidades' },
  { label: 'Produção de Cerveja', href: '/producao-de-cerveja' },
  { label: 'Responsabilidade', href: '/responsabilidade' },
  { label: 'Tecnologia', href: '/tecnologia' },
]

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface FooterProps extends ComponentProps<'footer'> {
	tagline?: string
	copyrightText?: string
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Footer({
	className,
	tagline = 'sigam-me os bons',
	copyrightText = `&copy; 2008 - ${new Date().getFullYear()} Papo de Bar`,
	...props
}: FooterProps) {
	return (
		<footer
			data-slot="site-footer"
			className={styles['site-footer']}
			{...props}
		>
			<div data-slot="site-footer-body" className={styles.menus}>
				<div data-slot="site-footer-brand" className={`${styles['col-brand']} ${styles['cols']} ${styles['cols-sm']}`}>
          <h2
            aria-label="Papo de Bar"
            className={styles.brand}
          >
            Papo de Bar
          </h2>
        </div>

        <div data-slot="site-footer-socials" className={`${styles['col-social']} ${styles['cols']} ${styles['cols-sm']}`}>
          <p data-slot="site-footer-tagline" className={styles['title']}>
            {tagline}
          </p>

          <ul className={styles['menu-social']}>
            {SOCIAL_LINKS.map((social) => (
              <li key={social.id} className={styles['menu-item']}>
                <a
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
                    className={styles.icon}
                  >
                    <path d={social.iconPath} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

				<nav
					data-slot="site-footer-links"
					aria-label="Links do rodapé"
					className={`${styles['col-menu']} ${styles['cols']} ${styles['cols-md']}`}
				>
          <ul
            data-slot="site-footer-links-column"
            className={styles['menu-links']}
            role="list"
          >
            {FOOTER_LINK_PAGES.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-slot="site-footer-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
					</ul>
				</nav>

        <nav
					data-slot="site-footer-links"
					aria-label="Links do rodapé"
					className={`${styles['col-menu']} ${styles['cols']} ${styles['cols-md']}`}
				>
          <ul
            data-slot="site-footer-links-column"
            className={styles['menu-links']}
            role="list"
          >
            {FOOTER_LINK_CATEGORIES.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-slot="site-footer-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
					</ul>
				</nav>

			<div data-slot="site-footer-bottom" className={styles['infos-copyright']}>
				<address dangerouslySetInnerHTML={{ __html: copyrightText }}></address>
			</div>
		</footer>
	)
}
