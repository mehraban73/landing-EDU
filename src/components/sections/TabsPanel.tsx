'use client'

import * as React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { renderSection } from '@/lib/renderer'

type Tab = {
  id: string
  title: string
  caption: string
  icon?: string
  sections: any[]
}

export default function TabsPanel({
  items,
  param = 'tab',
  initialId,
}: {
  items: Tab[]
  param?: string | null
  initialId?: string
}) {
  const ids = items.map((i) => i.id)
  const pathname = usePathname()
  const search = useSearchParams()
  const router = useRouter()

  const fromUrl = param ? search.get(param) || undefined : undefined
  const [active, setActive] = React.useState<string>(
    fromUrl ?? initialId ?? ids[0],
  )

  React.useEffect(() => {
    if (!param) return
    const q = search.get(param)
    if (q && ids.includes(q) && q !== active) setActive(q)
  }, [search, param, ids.join(','), active])

  const setActiveSafe = (id: string) => {
    setActive(id)
    if (!param) return
    const sp = new URLSearchParams(search?.toString())
    sp.set(param, id)
    router.replace(`${pathname}?${sp.toString()}`, { scroll: false })
  }

  const activeItem = items.find((i) => i.id === active) || items[0]

  return (
    <section className="space-y-4">
      <div role="tablist" aria-orientation="horizontal" className="grid md:grid-cols-3 gap-3">
{items.map((it, idx) => {
  const selected = it.id === active
  const isFirst = idx === 0
  const isLast  = idx === items.length - 1

  return (
    <button
      key={it.id}
      role="tab"
      onClick={() => setActiveSafe(it.id)}
      className={[
        'notch-vars', 
        'notch-3', 
        !isFirst && 'notch-right-3',
        !isLast  && 'notch-left-3',
        'relative rounded-2xl p-5 md:p-6 text-right transition',
        'bg-gradient-to-b from-white to-[#f7f9fc]',
        selected ? 'border-[3px]' : 'border',
      ].filter(Boolean).join(' ')}
      style={
        {
          borderColor: selected ? 'var(--page-primary)' : 'rgb(229 231 235)',
         '--surface': 'rgba(233, 238, 247, 0.94)', 
          '--notch-w': '29px',
          '--notch-h': '11px',
          '--gap': '32px',
        } as React.CSSProperties
      }
    >

      <div className="flex items-center gap-3 p-3">
        {it.icon && <img src={it.icon} alt="" className="w-10 h-10" />}
        <div>
          <div className="font-semibold text-gray-800">{it.title}</div>
          <div className="text-xs text-gray-500 mt-1">{it.caption}</div>
        </div>
      </div>
    </button>
  )
})}



      </div>

      <div
        role="tabpanel"
        id={`panel-${activeItem.id}`}
        aria-labelledby={`tab-${activeItem.id}`}
className="relative rounded-3xl bg-white shadow-sm p-5 md:p-7"      >
          <span className="absolute right-3 md:right-4 top-6 bottom-6 w-[3px] rounded-full bg-[#ff7a2f]" />

        <div className="space-y-6">
          {activeItem.sections.map((s, i) => renderSection(s, i))}
        </div>
      </div>
    </section>
  )
}