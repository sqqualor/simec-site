'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { Product } from '@/lib/products'
import { QuoteDialog } from './quote-dialog'
import { ProductDialog } from './product-dialog'

export type QuoteRequest = {
  title: string
  product?: Product
}

type SiteContextValue = {
  query: string
  setQuery: (q: string) => void
  openQuote: (request?: QuoteRequest) => void
  openProduct: (product: Product) => void
}

const SiteContext = createContext<SiteContextValue | null>(null)

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('')
  const [quote, setQuote] = useState<QuoteRequest | null>(null)
  const [product, setProduct] = useState<Product | null>(null)

  const openQuote = useCallback((request?: QuoteRequest) => {
    setProduct(null)
    setQuote(request ?? { title: 'Запросить коммерческое предложение' })
  }, [])

  const value = useMemo(
    () => ({ query, setQuery, openQuote, openProduct: setProduct }),
    [query, openQuote],
  )

  return (
    <SiteContext.Provider value={value}>
      {children}
      <ProductDialog
        product={product}
        onClose={() => setProduct(null)}
        onRequestPrice={(p) => openQuote({ title: 'Запросить цену', product: p })}
      />
      <QuoteDialog request={quote} onClose={() => setQuote(null)} />
    </SiteContext.Provider>
  )
}

export function useSite() {
  const ctx = useContext(SiteContext)
  if (!ctx) throw new Error('useSite must be used within SiteProvider')
  return ctx
}
