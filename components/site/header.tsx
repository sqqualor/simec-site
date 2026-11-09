'use client'

import { useState } from 'react'
import { Menu, Phone, Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from './logo'
import { navLinks } from '@/lib/nav'
import { useSite } from './site-provider'

function SearchForm({ className, id }: { className?: string; id: string }) {
  const { query, setQuery } = useSite()
  return (
    <form
      role="search"
      className={cn('relative', className)}
      onSubmit={(e) => {
        e.preventDefault()
        document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })
      }}
    >
      <label htmlFor={id} className="sr-only">
        Поиск оборудования
      </label>
      <Search
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-500"
        aria-hidden="true"
      />
      <input
        id={id}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск оборудования…"
        className="h-10 w-full rounded-md border border-slate-300 bg-white pr-3 pl-9 text-base text-slate-900 placeholder:text-slate-500 shadow-xs outline-none transition-all focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20 md:text-sm"
      />
    </form>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const { openQuote } = useSite()

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/85">
      <div className="mx-auto flex h-18 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SearchForm id="header-search" className="ml-auto hidden w-full max-w-xs md:block" />

        <button
          type="button"
          onClick={() => openQuote()}
          className="hidden h-10 shrink-0 items-center rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground shadow-sm transition-colors hover:bg-brand/90 sm:inline-flex"
        >
          Запросить КП
        </button>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="ml-auto inline-flex size-10 items-center justify-center rounded-md border text-navy transition-colors hover:bg-muted md:ml-0 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu className="size-5" aria-hidden="true" />
          <span className="sr-only">Открыть меню</span>
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm transition-opacity lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Меню"
        inert={!open}
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex h-dvh w-[85%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300 lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-18 items-center justify-between border-b px-4">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex size-10 items-center justify-center rounded-md text-navy hover:bg-muted"
          >
            <X className="size-5" aria-hidden="true" />
            <span className="sr-only">Закрыть меню</span>
          </button>
        </div>
        <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-4">
          <SearchForm id="mobile-search" />
          <nav aria-label="Мобильная навигация">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex border-b py-3.5 text-base font-medium text-navy transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <a
              href="tel:+74951234567"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border text-sm font-semibold text-navy"
            >
              <Phone className="size-4" aria-hidden="true" />
              +7 (495) 123-45-67
            </a>
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                openQuote()
              }}
              className="h-12 rounded-md bg-brand text-sm font-semibold text-brand-foreground hover:bg-brand/90"
            >
              Запросить КП
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}