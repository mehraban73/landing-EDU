'use client'
import * as React from 'react'

type Item = { id: string; title: string; caption: string; icon?: string }
export default function FeatureTabs({ items, activeId }: { items: Item[]; activeId?: string }) {
  const [active, setActive] = React.useState(activeId ?? items[0]?.id)

  return (
    <section className="rounded-2xl bg-white p-3 md:p-4 shadow-sm">
<div className="grid gap-3 md:grid-cols-3 overflow-x-auto no-scrollbar md:overflow-visible snap-x">
        {items.map((it) => {
          const selected = it.id === active
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={[
                'relative rounded-2xl border p-4 text-right transition',
                selected
                  ? 'border-[3px]'
                  : 'border border-gray-200 hover:border-gray-300',
                'bg-gradient-to-b from-white to-gray-50'
              ].join(' ')}
              style={selected ? { borderColor: 'var(--page-primary)' } : undefined}
            >
              {/* notch پایین کارت */}
              {selected && (
                <span
                  className="hidden md:block absolute -bottom-3 right-8 w-6 h-6 rotate-45 rounded-sm shadow"
                  style={{ background: 'white', borderRight: '3px solid var(--page-primary)', borderBottom: '3px solid var(--page-primary)' }}
                  aria-hidden
                />
              )}
              <div className="flex items-center gap-3">
                {it.icon && <img src={it.icon} alt="" aria-hidden className="w-10 h-10" />}
                <div>
                  <div className="font-semibold text-gray-800">{it.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{it.caption}</div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}