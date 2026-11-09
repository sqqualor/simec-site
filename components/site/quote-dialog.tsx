'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { Modal } from './modal'
import { Field } from './field'
import type { QuoteRequest } from './site-provider'

export function QuoteDialog({
  request,
  onClose,
}: {
  request: QuoteRequest | null
  onClose: () => void
}) {
  const [sent, setSent] = useState(false)

  const handleClose = () => {
    setSent(false)
    onClose()
  }

  return (
    <Modal open={request !== null} onClose={handleClose} title={request?.title ?? ''}>
      <div className="p-6 sm:p-8">
        {sent ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 className="size-12 text-success" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-navy">Заявка отправлена</h2>
            <p className="text-pretty text-muted-foreground">
              Инженерный отдел SIMEC обрабатывает ваш запрос. Мы свяжемся с вами для уточнения деталей поставки.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-2 h-11 rounded-md bg-navy px-6 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy/90"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h2 className="pr-10 text-xl font-semibold text-navy">{request?.title}</h2>
            {request?.product ? (
              <p className="mt-2 text-sm text-muted-foreground">
                {request.product.title}{' '}
                <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-navy">
                  {request.product.model}
                </span>
              </p>
            ) : (
              <p className="mt-2 text-sm text-muted-foreground">
                Оставьте контакты — подготовим предложение с ценами и сроками поставки.
              </p>
            )}
            <form
              className="mt-6 flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <Field id="quote-name" name="name" label="Имя" placeholder="Иван Петров" required autoComplete="name" />
              <Field
                id="quote-company"
                name="company"
                label="Компания"
                placeholder="ООО «Завод»"
                autoComplete="organization"
              />
              <Field
                id="quote-phone"
                name="phone"
                type="tel"
                label="Телефон"
                placeholder="+7 (___) ___-__-__"
                required
                autoComplete="tel"
              />
              <Field
                id="quote-email"
                name="email"
                type="email"
                label="E-mail"
                placeholder="mail@company.ru"
                autoComplete="email"
              />
              <button
                type="submit"
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-brand px-6 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
              >
                <Send className="size-4" aria-hidden="true" />
                Отправить запрос
              </button>
              <p className="text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
              </p>
            </form>
          </>
        )}
      </div>
    </Modal>
  )
}