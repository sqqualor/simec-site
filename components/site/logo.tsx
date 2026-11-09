'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  return (
    <a href="#top" className={cn('flex items-center gap-2.5', className)} aria-label="SIMEC — на главную">
      <Image
        src="/logo.png"
        alt="SIMEC"
        width={160}
        height={45}
        className="h-10 w-auto object-contain"
        priority
      />
    </a>
  )
}