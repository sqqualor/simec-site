import { Mail, MapPin } from 'lucide-react'
import { categories } from '@/lib/products'
import { Logo } from './logo'
import { navLinks, siteConfig } from '@/lib/nav'

export function Footer() {
  return (
    <footer id="contacts" className="scroll-mt-20 bg-navy text-navy-muted">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-5">
          <Logo tone="light" />
          <p className="text-sm leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        <nav aria-label="Разделы сайта">
          <h3 className="text-sm font-semibold text-white">Компания</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Категории каталога">
          <h3 className="text-sm font-semibold text-white">Каталог</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {categories.slice(1).map((cat) => (
              <li key={cat.id}>
                <a href="#catalog" className="transition-colors hover:text-white">
                  {cat.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold text-white">Контакты</h3>
          <address className="mt-4 flex flex-col gap-3 text-sm not-italic">
            <p className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
              {siteConfig.address}
            </p>
            <a href={`mailto:${siteConfig.email}`} className="flex gap-2.5 transition-colors hover:text-white">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
              {siteConfig.email}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>{`© ${new Date().getFullYear()} ${siteConfig.fullName}. Все права защищены.`}</p>
          <a href="#contacts" className="transition-colors hover:text-white">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}