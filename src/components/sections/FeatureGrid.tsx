import clsx from 'clsx'

const baseCols = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
} as const

const mdCols = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
} as const

type Props = {
  items: { title: string; desc: string }[]
  cols?: { base?: 1 | 2 | 3 | 4; md?: 1 | 2 | 3 | 4 }
}

export default function FeatureGrid({ items, cols }: Props) {
  const base = cols?.base ?? 1
  const md = cols?.md ?? 3

  return (
    <section className="rounded-2xl border bg-white p-6">
      <div className={clsx('grid gap-4', baseCols[base], mdCols[md])}>
        {items.map((f, i) => (
          <div key={i} className="rounded-xl border p-4">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
