import { Wrench, Settings2, GraduationCap, ShieldAlert, Clock, ArrowRight } from 'lucide-react'
import { TopoPattern } from './topo-pattern'

const servicesList = [
  {
    num: '01',
    icon: Wrench,
    title: 'Пусконаладочные работы',
    description: 'Ввод тяжелой горно-шахтной техники и оборудования в эксплуатацию на объекте заказчика с настройкой всех систем.',
  },
  {
    num: '02',
    icon: Settings2,
    title: 'Плановое ТО и диагностика',
    description: 'Регулярное техническое обслуживание, аудит состояния узлов, гидросистем и двигателей для предотвращения простоев.',
  },
  {
    num: '03',
    icon: ShieldAlert,
    title: 'Капитальный и аварийный ремонт',
    description: 'Восстановление узлов и агрегатов любой сложности с использованием оригинальных запасных частей.',
  },
  {
    num: '04',
    icon: GraduationCap,
    title: 'Обучение персонала',
    description: 'Инструктаж и подготовка операторов и сервисных инженеров заказчика по правилам эксплуатации техники.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-slate-900 py-20 text-white">
      {/* Топографический паттерн на фоне */}
      <TopoPattern className="opacity-10 text-slate-300" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
            Сервисная поддержка SIMEC
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Комплексное сервисное сопровождение оборудования
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Наши выездные сервисные инженеры обеспечивают бесперебойную работу техники на крупнейших добывающих объектах по всей России.
          </p>
        </div>

        {/* Сетка карточек с крупной нумерацией в стиле референса */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 p-6 backdrop-blur transition-all hover:border-brand/50 hover:bg-slate-800"
            >
              {/* Крупный порядковый номер */}
              <span className="absolute right-4 top-2 font-mono text-4xl font-extrabold text-white/5 transition-colors group-hover:text-brand/15">
                {service.num}
              </span>

              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <service.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>
              </div>

              <div className="mt-6 border-t border-white/5 pt-4">
                <a
                  href="#contacts"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition-colors hover:text-white"
                >
                  Заказать услугу
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Баннер с выездными бригадами */}
        <div className="mt-12 rounded-2xl border border-brand/30 bg-gradient-to-r from-brand/20 via-slate-800/80 to-slate-800/80 p-8 backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand">
                <Clock className="size-5" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">Выездные сервисные бригады</span>
              </div>
              <h3 className="text-xl font-bold text-white">Нужна консультация инженера или срочный выезд на объект?</h3>
              <p className="text-sm text-slate-300">
                Оставьте заявку, и технический специалист SIMEC свяжется с вами для уточнения деталей.
              </p>
            </div>
            <a
              href="#contacts"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
            >
              Оставить заявку на сервис
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}