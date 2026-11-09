import { Factory, ShieldCheck, Truck, Wrench } from 'lucide-react'

const items = [
  {
    icon: Factory,
    title: 'Прямые поставки',
    text: 'Работаем напрямую с заводами-изготовителями — цены производителя без посредников.',
  },
  {
    icon: ShieldCheck,
    title: 'Официальная гарантия и сервис',
    text: 'Гарантия до 36 месяцев, собственная сервисная служба и склад запчастей.',
  },
  {
    icon: Truck,
    title: 'Быстрая доставка по РФ и СНГ',
    text: 'Отгрузка со склада за 1–3 дня, собственная логистика и таможенное оформление.',
  },
  {
    icon: Wrench,
    title: 'Подбор и пусконаладка',
    text: 'Инженеры подберут оборудование под задачу, выполнят монтаж и ввод в эксплуатацию.',
  },
]

export function Advantages() {
  return (
    <section id="advantages" aria-labelledby="advantages-title" className="scroll-mt-20 bg-muted/60 pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="advantages-title" className="sr-only">
          Преимущества
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="group relative flex flex-col gap-4 rounded-lg border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-md bg-navy text-white transition-colors group-hover:bg-brand">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-foreground" aria-hidden="true">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-base font-semibold text-navy">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
