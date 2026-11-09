'use client'

import { useState } from 'react'
import { categories, products, type CategoryId } from '@/lib/products'
import { ProductCard } from './product-card'

export function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all')

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <section id="catalog" className="relative bg-[#f8fafc] py-20 text-slate-900 border-t border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              Каталог оборудования
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Оборудование для горной добычи
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              Горно-шахтная и погрузочно-доставочная техника под задачи вашего объекта.
            </p>
          </div>

          <p className="font-mono text-xs text-slate-500">
            Найдено позиций: <span className="font-semibold text-slate-900">{filteredProducts.length}</span>
          </p>
        </div>

        {/* Табы категорий */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-200 pb-6">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-brand text-white shadow-md shadow-brand/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-xs'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Сетка карточек */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}