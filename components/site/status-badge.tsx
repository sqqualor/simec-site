import { cn } from '@/lib/utils'
import type { Product } from '@/lib/products'

export function StatusBadge({ status }: { status: Product['status'] }) {
  const inStock = status === 'in-stock'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold shadow-sm',
        inStock ? 'border-green-200 bg-green-50 text-success' : 'border-orange-200 bg-orange-50 text-orange-700',
      )}
    >
      <span className={cn('size-1.5 rounded-full', inStock ? 'bg-success' : 'bg-brand')} aria-hidden="true" />
      {inStock ? 'В наличии' : 'Под заказ'}
    </span>
  )
}
