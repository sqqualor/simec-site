'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

type ModalProps = {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  className?: string
}

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      aria-label={title}
      className={cn(
        'm-auto w-[calc(100%-2rem)] max-w-lg rounded-xl bg-card p-0 text-card-foreground shadow-2xl backdrop:bg-navy/70 backdrop:backdrop-blur-sm',
        className,
      )}
    >
      {open && (
        <div className="relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 z-10 inline-flex size-9 items-center justify-center rounded-md bg-background/80 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-5" aria-hidden="true" />
            <span className="sr-only">Закрыть</span>
          </button>
          {children}
        </div>
      )}
    </dialog>
  )
}
