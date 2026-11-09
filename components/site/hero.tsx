'use client'

import Image from 'next/image'
import { ArrowRight, BadgeCheck, ShieldCheck, FileCheck } from 'lucide-react'
import { TopoPattern } from './topo-pattern'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Топографический фон с изолиниями в стиле инженерных проектов */}
      <TopoPattern className="opacity-10 text-white" />

      {/* Фоновая сетка */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-12 lg:px-8">
        {/* Левая колонка с текстом */}
        <div className="flex flex-col gap-6 lg:col-span-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-xs tracking-wider text-navy-muted uppercase">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
            Поставка и сервис тяжелой техники в РФ
          </p>
          <h1 className="text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem]">
            Промышленное оборудование и инжиниринговые решения{' '}
            <span className="text-brand">под ключ</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-pretty text-navy-muted sm:text-lg">
            Специализируемся на поставках высококачественного горно-шахтного оборудования. 
            Обеспечиваем полный цикл инжинирингового сопровождения, поставку запчастей и круглосуточную техническую поддержку на объектах заказчика.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row pt-2">
            <a
              href="#catalog"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-brand px-8 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition-colors hover:bg-brand/90"
            >
              Перейти в каталог
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
          
          <ul className="flex flex-wrap gap-x-8 gap-y-3 pt-4 text-xs sm:text-sm text-navy-muted border-t border-white/10">
            <li className="flex items-center gap-2">
              <BadgeCheck className="size-4 text-brand shrink-0" aria-hidden="true" />
              Сертификаты ЕАС
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand shrink-0" aria-hidden="true" />
              Гарантия производителя
            </li>
            <li className="flex items-center gap-2">
              <FileCheck className="size-4 text-brand shrink-0" aria-hidden="true" />
              Полный комплект ТД
            </li>
          </ul>
        </div>

        {/* Правая колонка с полноценной крупной картинкой */}
        <div className="lg:col-span-6 w-full">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl">
            <Image
              src="/hero-bg.jpg"
              alt="Современное промышленное и горно-шахтное оборудование"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}