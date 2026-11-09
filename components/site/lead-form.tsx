'use client'

import { useState } from 'react'
import { CheckCircle2, Paperclip, X } from 'lucide-react'
import { Field } from './field'

export function LeadForm() {
  const [fileName, setFileName] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  return (
    <section id="contacts" aria-labelledby="request-title" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-navy px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
          <div
            className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-brand/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative grid gap-10 lg:grid-cols-5 lg:items-center">
            <div className="flex flex-col gap-4 lg:col-span-2">
              <p className="font-mono text-xs tracking-wider text-brand uppercase">Инженерный расчёт</p>
              <h2 id="request-title" className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Нужен индивидуальный подбор оборудования или ТЗ?
              </h2>
              <p className="leading-relaxed text-pretty text-navy-muted">
                Отправьте техническое задание или спецификацию — инженер SIMEC подготовит расчёт, подберёт
                оборудование и аналоги с ценами и сроками поставки.
              </p>
            </div>

            <div className="lg:col-span-3">
              {sent ? (
                <div className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-10 text-center">
                  <CheckCircle2 className="size-12 text-brand" aria-hidden="true" />
                  <p className="text-xl font-semibold">Спасибо! Заявка принята</p>
                  <p className="text-sm text-navy-muted">Инженер свяжется с вами в ближайшее время в рабочее время.</p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-2 text-xs text-brand underline underline-offset-4 hover:text-white transition-colors"
                  >
                    Отправить ещё один запрос
                  </button>
                </div>
              ) : (
                <form
                  className="grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2 sm:p-8"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <Field
                    tone="dark"
                    id="lead-name"
                    name="name"
                    label="Ваше имя"
                    placeholder="Иван Петров"
                    required
                    autoComplete="name"
                  />
                  <Field
                    tone="dark"
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    label="Телефон"
                    placeholder="+7 (___) ___-__-__"
                    required
                    autoComplete="tel"
                  />
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="lead-file"
                      className="flex h-14 cursor-pointer items-center gap-3 rounded-md border border-dashed border-white/25 px-4 text-sm text-navy-muted transition-colors hover:border-brand hover:text-white has-focus-visible:border-brand has-focus-visible:ring-3 has-focus-visible:ring-brand/25"
                    >
                      <Paperclip className="size-4 shrink-0 text-brand" aria-hidden="true" />
                      <span className="truncate">{fileName ?? 'Прикрепить ТЗ/спецификацию'}</span>
                      <span className="ml-auto shrink-0 font-mono text-xs text-white/40">PDF, DOCX, XLSX</span>
                      <input
                        id="lead-file"
                        name="file"
                        type="file"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.dwg"
                        className="sr-only"
                        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                      />
                    </label>
                    {fileName && (
                      <button
                        type="button"
                        onClick={() => {
                          setFileName(null)
                          const input = document.getElementById('lead-file') as HTMLInputElement | null
                          if (input) input.value = ''
                        }}
                        className="mt-2 inline-flex items-center gap-1 text-xs text-navy-muted hover:text-white"
                      >
                        <X className="size-3" aria-hidden="true" />
                        Удалить файл
                      </button>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="h-12 rounded-md bg-brand px-6 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-colors hover:bg-brand/90 sm:col-span-2"
                  >
                    Запросить расчёт
                  </button>
                  <p className="text-xs text-white/50 sm:col-span-2">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}