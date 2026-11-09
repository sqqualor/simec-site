import { Building2, Handshake, MapPin } from 'lucide-react'
import { TopoPattern } from './topo-pattern'

const stats = [
  { value: '10+', label: 'Единиц тяжелой техники поставлено' },
  { value: '5', label: 'Региональных филиалов по РФ' },
  { value: '100%', label: 'Принцип партнерства Win-Win' },
]

const offices = [
  'Норильск',
  'Апатиты',
  'Екатеринбург',
  'Красноярск',
  'Хабаровск',
]

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden bg-slate-900 py-20 text-white">
      {/* Изолинии рельефа на фоне */}
      <TopoPattern className="opacity-10 text-slate-300" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
            О компании ООО «СИМЭК»
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Надежный эксперт в поставке и обслуживании горнодобывающей техники
          </h2>
        </div>

        {/* Основной текст и филиалы */}
        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="space-y-4 text-slate-300 leading-relaxed lg:col-span-7">
            <p>
              Общество <strong className="text-white">«СИМЭК»</strong> — динамично развивающаяся компания, специализирующаяся на поставке широкого спектра высококачественного оборудования и его профессиональном сервисном обслуживании в горнодобывающем секторе.
            </p>
            <p>
              За время работы нами было поставлено более десятка единиц тяжелой горно-шахтной техники в ключевые добывающие регионы России. Нашему опыту и техническим решениям доверяют лидеры отрасли, среди которых <strong className="text-white">ПАО «ГМК «Норильский Никель»</strong>, <strong className="text-white">ПАО «ФОСАГРО»</strong> и другие крупные корпорации.
            </p>
            <p>
              Мы создаем атмосферу, в которой многолетний опыт наших специалистов и знание передовых мировых технологий работают на решение задач самых требовательных клиентов. Фундамент нашей работы — безупречная деловая репутация и открытое партнерство по принципу <span className="text-brand font-semibold">Win-Win</span>.
            </p>
          </div>

          {/* Карточка филиалов в стиле инженерного блока */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/60 p-6 backdrop-blur shadow-xl lg:col-span-5">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Building2 className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">География присутствия</h3>
                <p className="text-xs text-slate-400">Обособленные подразделения SIMEC</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {offices.map((city) => (
                <div key={city} className="flex items-center gap-2 text-sm text-slate-300">
                  <MapPin className="size-4 text-brand shrink-0" />
                  <span>{city}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-brand/10 border border-brand/20 p-3 text-xs text-slate-300 flex items-center gap-2.5">
              <Handshake className="size-5 text-brand shrink-0" />
              <span>Быстрая мобилизация сервисных бригад в любой регион работы заказчика.</span>
            </div>
          </div>
        </div>

        {/* Цифры / Статистика в стиле референса */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 border-t border-white/10 pt-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1 rounded-xl bg-slate-800/30 p-4 border border-white/5">
              <span className="text-3xl sm:text-4xl font-extrabold text-brand font-mono">
                {stat.value}
              </span>
              <span className="text-sm text-slate-300 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}