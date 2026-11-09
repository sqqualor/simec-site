'use client'

import { type Product } from '@/lib/products'
import { useSite } from './site-provider'

export function ProductCard({ product }: { product: Product }) {
  const { openProduct, openQuote } = useSite()
  const scale = product.imageScaleValue ?? 1.0

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-xl">
      {/* Контейнер с инженерной сеткой. items-end прижимает картинку строго к нижней границе */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100/80 flex items-end justify-center pb-2 px-4">
        
        {/* Инженерная сетка */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(30deg, #cbd5e1 1px, transparent 1px),
              linear-gradient(150deg, #cbd5e1 1px, transparent 1px),
              linear-gradient(90deg, #e2e8f0 1px, transparent 1px)
            `,
            backgroundSize: '40px 24px',
            backgroundPosition: 'center center'
          }}
        />

        {/* Виньетка */}
        <div className="absolute inset-0 bg-radial from-transparent via-slate-100/40 to-slate-200/60 pointer-events-none" />

        {/* Изображение техники через стандартный тег img для точного прижатия к низу */}
        <div className="relative w-full h-full flex items-end justify-center z-10">
          <img
            src={product.image}
            alt={product.title}
            style={{ transform: `scale(${scale})`, transformOrigin: 'bottom center' }}
            className="max-h-[85%] w-auto object-contain transition-transform duration-500 filter drop-shadow-[0_12px_14px_rgba(0,0,0,0.22)] group-hover:scale-[1.05]"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 z-10 bg-white">
        <div className="flex flex-col gap-2">
          <h3 className="text-base leading-snug font-semibold text-balance text-navy">{product.title}</h3>
        </div>

        <dl className="divide-y divide-border rounded-md border bg-muted/40 text-xs">
          {product.specs.map((spec) => (
            <div key={spec.label} className="flex items-center justify-between gap-3 px-3 py-1.5">
              <dt className="text-muted-foreground">{spec.label}</dt>
              <dd className="text-right font-mono font-medium text-navy">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => openProduct(product)}
              className="h-10 rounded-md border border-input text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-muted"
            >
              Подробнее
            </button>
            <button
              type="button"
              onClick={() => openQuote({ title: 'Запросить цену', product })}
              className="h-10 rounded-md bg-navy text-sm font-semibold text-white transition-colors hover:bg-brand"
            >
              Запросить цену
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}