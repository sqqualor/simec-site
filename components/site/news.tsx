'use client'

import { useState } from 'react'
import { Calendar, ArrowRight, Newspaper } from 'lucide-react'
import { Modal } from './modal'

type NewsItem = {
  id: number
  title: string
  date: string
  category: string
  description: string
  fullContent: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Успешное участие СИМЭК в выставке MiningWorld Russia 2025',
    date: 'Апрель 2025',
    category: 'Выставки',
    description:
      'На стенде компании была представлена ПДМ FUL-07, отгруженная после мероприятия заказчику в г. Норильск. Проведены ключевые переговоры по поставкам и сервису подземной техники.',
    fullContent:
      'Компания «СИМЭК» приняла участие в Международной выставке машин и оборудования для добычи, обогащения и транспортировки полезных ископаемых MiningWorld Russia 2025, которая состоялась 23–25 апреля 2025 года в Москве.\n\nВо время выставки был проведен ряд встреч с заказчиками на предмет совместного сотрудничества в рамках поставки подземной техники и ее дальнейшего обслуживания. На нашем стенде была представлена погрузочно-доставочная машина ПДМ FUL-07, которая сразу после окончания экспозиции была отправлена заказчику для работы в городе Норильске.\n\nMiningWorld Russia 2025 стала крупнейшей выставкой за всю свою 29-летнюю историю, впервые заняв 5 выставочных залов в 2-х павильонах МВЦ «Крокус Экспо». Экспозиция расположилась на площади 30 200 м², а свои решения представили 554 компании из 13 стран мира. В этом сезоне выставку посетило рекордное количество специалистов горнодобывающей отрасли — 10 560 человек.',
  },
  {
    id: 2,
    title: 'Контракт с предприятием ОАО «УГМК» на поставку аккумуляторной техники',
    date: 'Январь 2025',
    category: 'Контракты',
    description:
      'Заключено соглашение на поставку 10-тонных ПДМ и 30-тонных шахтных самосвалов на LiFePO4 АКБ. Применение электротехники увеличит выработку в условиях ограниченного воздухообмена.',
    fullContent:
      'Компания ООО «СИМЭК» заключила контракт на поставку аккумуляторной подземной техники с одним из ключевых предприятий ОАО «УГМК».\n\nПоставка техники, а именно погрузочно-доставочных машин грузоподъемностью 10 тонн и шахтных самосвалов грузоподъемностью 30 тонн, запланирована на конец 2025 года.\n\nПрименение данной техники позволит существенно увеличить производительность предприятия по добыче в условиях ограниченного воздухообмена underground-выработок. Данная техника работает от современных аккумуляторных батарей, которые обеспечивают высокую автономность и могут заряжаться непосредственно в шахте.',
  },
  {
    id: 3,
    title: 'Подготовка экспозиции к международной выставке MiningWorld Russia 2025',
    date: 'Июнь 2024',
    category: 'События',
    description:
      'Компания «СИМЭК» официально подала заявку на участие в ключевом отраслевом событии года в МВЦ «Крокус Экспо» для демонстрации флагманских решений в подземной добыче.',
    fullContent:
      'Компания «СИМЭК» официально подала заявку на участие в Международной выставке машин и оборудования для добычи, обогащения и транспортировки полезных ископаемых MiningWorld Russia 2025, которая состоится 23–25 апреля 2025 года в Москве.\n\nОргкомитет компании приступил к подготовке стенда и согласованию списка экспонируемой тяжелой горно-шахтной техники.',
  },
]

export function News() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

  return (
    <section id="news" className="scroll-mt-20 bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Шапка блока */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Пресс-центр
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Новости и события SIMEC
            </h2>
          </div>
          <p className="text-sm text-slate-600 md:max-w-xs">
            Актуальная информация о ключевых проектах, выставках и поставках техники SIMEC.
          </p>
        </div>

        {/* Сетка новостей */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedNews(item)}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-700">
                    <Newspaper className="size-3 text-brand" />
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="size-3.5 text-slate-400" />
                    {item.date}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-slate-900 line-clamp-2 leading-snug group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition-colors group-hover:text-brand/80"
                >
                  Читать подробнее
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Модальное окно просмотра новости */}
      <Modal
        open={selectedNews !== null}
        onClose={() => setSelectedNews(null)}
        title={selectedNews?.title ?? ''}
        className="max-w-2xl"
      >
        {selectedNews && (
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
              <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-700">
                <Newspaper className="size-3 text-brand" />
                {selectedNews.category}
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Calendar className="size-3.5 text-slate-400" />
                {selectedNews.date}
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-900 leading-snug mb-6">
              {selectedNews.title}
            </h2>

            <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-600 space-y-4 whitespace-pre-line">
              {selectedNews.fullContent}
            </div>

            <div className="mt-8 border-t border-slate-100 pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedNews(null)}
                className="h-10 rounded-md bg-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-navy/90"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}