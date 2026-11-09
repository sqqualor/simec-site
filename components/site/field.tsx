import { cn } from '@/lib/utils'

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  tone?: 'light' | 'dark'
}

export function Field({ label, id, tone = 'light', className, ...props }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className={cn('text-sm font-medium', tone === 'dark' ? 'text-navy-muted' : 'text-foreground')}
      >
        {label}
      </label>
      <input
        id={id}
        className={cn(
          'h-11 rounded-md border px-3.5 text-base outline-none transition-colors focus-visible:border-brand focus-visible:ring-3 focus-visible:ring-brand/25 md:text-sm',
          tone === 'dark'
            ? 'border-white/15 bg-white/5 text-white placeholder:text-white/40'
            : 'border-input bg-background placeholder:text-muted-foreground/70',
          className,
        )}
        {...props}
      />
    </div>
  )
}
