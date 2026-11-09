'use client'

import { PackageCheck, ShieldCheck, Truck, Clock, FileText, ArrowRight } from 'lucide-react'
import { useSite } from './site-provider'

export function Parts() {
  const { openQuote } = useSite()

  const advantages = [
    {
      icon: ShieldCheck,
      title: 'Оригинальное качество',
      description: 'Прямые поставки комплектующих и запчастей от сертифицированных заводов-изготовителей.',
    },
    {
      icon: PackageCheck,
      title: 'Большой склад в наличии',
      description: 'Востребованные позиции, фильтры, ремкомплекты и расходники всегда готовы к отправке.',
    },
    {
      icon: Truck,
      title: 'Быстрая логистика',
      description: 'Отработанная система доставки в любые, даже самые отдалённые добывающие регионы РФ.',
    },
    {
      icon: Clock,
      title: 'Минимизация простоев',
      description: 'Оперативный подбор деталей под спецификацию вашей техники для поддержания непрерывности процессов.',
    },
  ]

  return (
    <section id="parts" className="scroll-mt-20 bg-slate-50 py-20 text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Комплектующие и расходники
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Запасные части для горно-шахтного оборудования
            </h2>
          </div>
          <p className="text-sm text-slate-600 md:max-w-xs">
            Бесперебойная работа вашей техники благодаря оперативному снабжению и качественным запчастям.
          </p>
        </div>

        {/* Преимущества на белых карточках */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md"
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Главная темная плашка-призыв без глупого вопроса про поиск */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
          <div className="flex flex-col items-center justify-between gap-6 rounded-xl bg-slate-900 p-6 text-white sm:flex-row sm:p-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-brand font-mono text-xs font-semibold uppercase tracking-wider mb-2">
                <FileText className="size-4" />
                Инжиниринговый подбор
              </div>
              <h3 className="text-lg font-bold sm:text-xl">Нужны запчасти под вашу спецификацию?</h3>
              <p className="mt-1 text-xs text-slate-400">
                Оставьте заявку или прикрепите ТЗ, и наши инженеры подберут комплектующие по каталожному номеру или модели вашей техники.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openQuote({ title: 'Запрос подбора запасных частей' })}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90 shadow-md shadow-brand/20"
            >
              Запросить подбор
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}