'use client'
import React from 'react'

type Level = { label: string }
type Image = { src: string; alt?: string }

export default function VideoPromo({
  badge,
  minutes,
  title,
  levels,
  cta,
  image,
}: {
  badge?: string
  minutes?: number
  title: string
  levels: Level[]
  image?: Image
  cta?: { label: string; href: string }
}) {
  const bg = image?.src
    ? `url(${image.src})`
    : `var(--promo-bg, url(/img/robot.png))`
  const alt = image?.alt ?? ''

  return (
    <section
      role="img"
      aria-label={alt}
      className='p-10'
    >
      <div
        className="
          pointer-events-none absolute
          left-4 md:left-6 top-1/2 -translate-y-1/2
          w-[120px] md:w-[200px] aspect-square
          bg-no-repeat bg-contain
        "
        style={{ backgroundImage: bg }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_40%,rgba(0,0,0,0.03)_100%)]" />

      <div className="relative z-10 text-right pl-[150px] md:pl-[240px]">
        {badge && (
          <div className="text-[13px] text-[#ff6a6a] font-bold">{badge}</div>
        )}

        {minutes && (
          <div className="text-sm text-gray-500 mt-1">
            حدود {minutes.toLocaleString('fa-IR')} دقیقه
          </div>
        )}

        <h2 className="mt-1 text-xl md:text-2xl font-bold leading-relaxed">
          {title} <span className="text-[color:var(--page-primary)]">!</span>
        </h2>

        <div className="mt-4 flex flex-row-reverse flex-wrap gap-3">
          {levels.map((lv, i) => (
            <button
              key={i}
              className="rounded-xl border px-4 py-2 text-sm shadow-sm bg-white hover:bg-gray-50"
              style={{ borderColor: 'var(--page-primary)' }}
            >
              {lv.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
