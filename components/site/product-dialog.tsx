'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FileText, Image as ImageIcon, Ruler } from 'lucide-react'
import { formatPrice, type Product } from '@/lib/products'
import { Modal } from './modal'

export function ProductDialog({
  product,
  onClose,
  onRequestPrice,
}: {
  product: Product | null
  onClose: () => void
  onRequestPrice: (product: Product) => void
}) {
  const [activeTab, setActiveTab] = useState<'photo' | 'drawing'>('photo')

  return (
    <Modal open={product !== null} onClose={onClose} title={product?.title ?? ''} className="max-w-4xl">
      {product && (
        <div className="grid md:grid-cols-2">
          {/* Левая колонка: переключатель и изображение / чертеж */}
          <div className="flex flex-col bg-muted/40 p-4">
            {/* Кнопки переключения вида */}
            <div className="mb-3 flex rounded-lg bg-muted p-1">
              <button
                type="button"
                onClick={() => setActiveTab('photo')}
                className={`flex flex-1 items-center justify-center gap-2 rounded-md py-1.5 text-xs font-semibold transition-colors ${
                  activeTab === 'photo'
                    ? 'bg-white text-navy shadow-sm'
                    : 'text-muted-foreground hover:text-navy'
                }`}
              >
                <ImageIcon className="size-4" />
                Фотография
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('drawing')}
                className={`flex flex-1 items-center justify-center gap-2 rounded-md py-1.5 text-xs font-semibold transition-colors ${
                  activeTab === 'drawing'
                    ? 'bg-white text-navy shadow-sm'
                    : 'text-muted-foreground hover:text-navy'
                }`}
              >
                <Ruler className="size-4" />
                Чертеж (Схема)
              </button>
            </div>

            {/* Контейнер картинки */}
            <div className="relative aspect-square w-full flex-1 overflow-hidden rounded-md bg-white border md:aspect-auto">
              <Image 
                src={activeTab === 'photo' ? product.image : product.drawing} 
                alt={activeTab === 'photo' ? product.title : `Чертеж — ${product.title}`} 
                fill 
                sizes="(min-width: 768px) 450px, 100vw" 
                className="object-contain p-4" 
              />
            </div>
          </div>

          {/* Правая колонка: характеристики и описание */}
          <div className="flex flex-col gap-4 p-6 max-h-[80vh] overflow-y-auto">
            <div className="pr-8">
              <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-navy">{product.model}</span>
              <h2 className="mt-2 text-xl font-semibold text-balance text-navy">{product.title}</h2>
            </div>
            
            <p className="text-sm leading-relaxed text-pretty text-muted-foreground">{product.description}</p>
            
            <dl className="divide-y divide-border rounded-md border text-sm">
              {[...product.specs, ...product.extraSpecs].map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4 px-3 py-2">
                  <dt className="text-muted-foreground">{spec.label}</dt>
                  <dd className="text-right font-medium text-navy">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-auto flex flex-col gap-3 pt-4">
              <p className="text-lg font-semibold text-navy">{formatPrice(product.price)}</p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onRequestPrice(product)}
                  className="h-11 flex-1 rounded-md bg-navy px-4 text-sm font-semibold text-white transition-colors hover:bg-brand"
                >
                  Запросить цену
                </button>
                <a
                  href={`/pdf/${product.id}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md border border-input px-4 text-sm font-semibold text-navy transition-colors hover:bg-muted"
                >
                  <FileText className="size-4" aria-hidden="true" />
                  Паспорт изделия
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  )
}