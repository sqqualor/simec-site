export type CategoryId = 'mining-trucks' | 'lhd'

export const categories: { id: CategoryId | 'all'; label: string }[] = [
  { id: 'all', label: 'Всё оборудование' },
  { id: 'mining-trucks', label: 'Шахтные самосвалы' },
  { id: 'lhd', label: 'Погрузочно-доставочные' },
]

export type Spec = { label: string; value: string }

export type Product = {
  id: string
  title: string
  model: string
  category: CategoryId
  image: string
  drawing: string
  imageScaleValue?: number
  price: number | null
  specs: [Spec, Spec, Spec]
  description: string
  extraSpecs: Spec[]
}

export const products: Product[] = [
  // --- Шахтные самосвалы ---
  {
    id: 'udt-20',
    title: 'Шахтный автосамосвал UDT 20',
    model: 'UDT 20',
    category: 'mining-trucks',
    image: '/udt20.png',
    drawing: '/udt20-drawing.png',
    imageScaleValue: 0.9,
    price: null,
    specs: [
      { label: 'Грузоподъемность', value: '20 000 кг' },
      { label: 'Мощность', value: '235 кВт (320 л.с.)' },
      { label: 'Объем кузова', value: '10,0 м³' },
    ],
    description: 'Шарнирно-сочлененный карьерный самосвал грузоподъемностью 20 тонн, созданный для работы в пространстве размером 3х3 м.',
    extraSpecs: [
      { label: 'Двигатель', value: 'Volvo TAD 853VE' },
      { label: 'Крутящий момент', value: '1310 Нм' },
      { label: 'Трансмиссия', value: 'DANA R36000' },
      { label: 'Общая длина', value: '9100 мм' },
      { label: 'Эксплуатационный вес', value: '33 600 кг' },
    ],
  },
  {
    id: 'udt-35',
    title: 'Шахтный автосамосвал UDT 35',
    model: 'UDT 35',
    category: 'mining-trucks',
    image: '/udt35.png',
    drawing: '/udt35-drawing.png',
    imageScaleValue: 0.85,
    price: null,
    specs: [
      { label: 'Грузоподъемность', value: '35 000 кг' },
      { label: 'Мощность', value: '331 кВт (450 л.с.)' },
      { label: 'Объем кузова', value: '18,0 м³' },
    ],
    description: 'Шарнирно-сочлененный карьерный самосвал грузоподъемностью 35 тонн, помещающийся в пространстве 4х4 м, с кондиционированной кабиной.',
    extraSpecs: [
      { label: 'Двигатель', value: 'SCANIA DC 13 076A' },
      { label: 'Крутящий момент', value: '1954 Нм' },
      { label: 'Трансмиссия', value: 'DANA R6422' },
      { label: 'Общая длина', value: '10 516 мм' },
      { label: 'Рабочий вес', value: '30 000 кг' },
    ],
  },
  {
    id: 'udt-45',
    title: 'Шахтный автосамосвал UDT 45',
    model: 'UDT 45',
    category: 'mining-trucks',
    image: '/udt45.png',
    drawing: '/udt45-drawing.png',
    imageScaleValue: 0.7,
    price: null,
    specs: [
      { label: 'Грузоподъемность', value: '45 000 кг' },
      { label: 'Мощность', value: '450 кВт (603 л.с.)' },
      { label: 'Объем кузова', value: '22,0 м³' },
    ],
    description: 'Высокопроизводительный 45-тонный шахтный самосвал для использования на перегонах 4.5х4.5 м.',
    extraSpecs: [
      { label: 'Двигатель', value: 'Volvo TAD1641VE-B' },
      { label: 'Крутящий момент', value: '2913 Нм' },
      { label: 'Трансмиссия', value: 'Серия DANA 8000' },
      { label: 'Общая длина', value: '10 806 мм' },
      { label: 'Рабочий вес', value: '36 000 кг' },
    ],
  },

  // --- Погрузочно-доставочные машины ---
  {
    id: 'ful-07',
    title: 'Погрузо-доставочная машина Ful 07',
    model: 'Ful 07',
    category: 'lhd',
    image: '/ful07.png',
    drawing: '/ful07-drawing.png',
    imageScaleValue: 0.85,
    price: null,
    specs: [
      { label: 'Производительность', value: '6 700 кг' },
      { label: 'Мощность', value: '185 кВт' },
      { label: 'Объем ковша', value: '3,0 м³' },
    ],
    description: '7-тонная ПДМ (аналог SANDVIK LH307) для подземных работ и тоннелей более 3.5х3.5 м.',
    extraSpecs: [
      { label: 'Двигатель', value: 'Volvo TAD850VE' },
      { label: 'Крутящий момент', value: '1060 Нм' },
      { label: 'Трансмиссия', value: 'DANA R32420' },
      { label: 'Масса машины', value: '30 100 кг' },
      { label: 'Радиус поворота', value: '5870 мм (наружный)' },
    ],
  },
  {
    id: 'ful-07ev',
    title: 'FUL 7EV (Электрическая)',
    model: 'FUL 7EV',
    category: 'lhd',
    image: '/ful07-ev.png',
    drawing: '/ful07ev-drawing.png',
    imageScaleValue: 0.75,
    price: null,
    specs: [
      { label: 'Производительность', value: '6 700 кг' },
      { label: 'Мощность мотора', value: '100/50 кВт' },
      { label: 'Объем ковша', value: '3,0 м³' },
    ],
    description: 'Подземная аккумуляторная ПДМ с нулевым уровнем выбросов для работы в условиях плохой вентиляции.',
    extraSpecs: [
      { label: 'Емкость аккумулятора', value: '163 кВт/ч' },
      { label: 'Тяговое усилие', value: '≥150 кН' },
      { label: 'Масса машины', value: '20 600 кг' },
      { label: 'Радиус поворота', value: '5845 мм (наружный)' },
      { label: 'Экологичность', value: 'Нулевой выброс вредных газов' },
    ],
  },
  {
    id: 'ful-10',
    title: 'Погрузо-доставочная машина Ful 10',
    model: 'Ful 10',
    category: 'lhd',
    image: '/ful10.png',
    drawing: '/ful10-drawing.png',
    imageScaleValue: 0.85,
    price: null,
    specs: [
      { label: 'Грузоподъемность', value: '10 000 кг' },
      { label: 'Мощность', value: '235 кВт' },
      { label: 'Объем ковша', value: '4,6 м³' },
    ],
    description: '10-тонная ПДМ (модернизация SANDVIK EJC210) для подземных работ в тоннелях более 3.5х3.5 м.',
    extraSpecs: [
      { label: 'Двигатель', value: 'Volvo TAD1150VE' },
      { label: 'Крутящий момент', value: '1581 Нм' },
      { label: 'Трансмиссия', value: 'DANA 36000' },
      { label: 'Масса машины', value: '29 100 кг' },
      { label: 'Радиус поворота', value: '6545 мм (наружный)' },
    ],
  },
]

export function formatPrice(price: number | null) {
  if (price === null) return 'По запросу'
  return `${new Intl.NumberFormat('ru-RU').format(price)} ₽`
}