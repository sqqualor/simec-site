'use client'

import { useEffect, useState } from 'react'
import { Calendar, Clock, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/nav'

export function TopBar() {
  const [time, setTime] = useState<string>('')
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      
      // Форматирование времени (14:35:08)
      setTime(
        now.toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Europe/Moscow',
        })
      )

      // Форматирование даты (ср, 7 октября 2026 г.)
      setDate(
        now.toLocaleDateString('ru-RU', {
          weekday: 'short',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          timeZone: 'Europe/Moscow',
        })
      )
    }

    updateDateTime()
    const timer = setInterval(updateDateTime, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-navy text-navy-muted border-b border-white/10">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-4 text-xs sm:px-6 lg:px-8">
        
        {/* Живая дата и время */}
        <div className="flex items-center gap-4 text-slate-300">
          <div className="flex items-center gap-1.5">
            <Calendar className="size-3.5 text-brand" aria-hidden="true" />
            <span className="capitalize">{date || 'Загрузка даты...'}</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono">
            <Clock className="size-3.5 text-brand" aria-hidden="true" />
            <span>{time || '00:00:00'} <span className="text-[10px] text-slate-400">МСК</span></span>
          </div>
        </div>

        {/* Email и График */}
        <div className="flex items-center gap-5">
          <span className="hidden md:inline text-slate-400">{siteConfig.workHours}</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 font-medium text-white transition-colors hover:text-brand"
          >
            <Mail className="size-3.5 text-brand" aria-hidden="true" />
            {siteConfig.email}
          </a>
        </div>

      </div>
    </div>
  )
}