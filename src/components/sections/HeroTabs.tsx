'use client'
import React from 'react'
import Image from 'next/image'
import TabsPanel from './TabsPanel'

type Img = { src: string; alt?: string }

// —————————— بنر موبایل مستقل (بالا) ——————————
function MobileMiniHero({ data }: { data: { title: string; chips: string[]; image: Img } }) {
  const [activeChip, setActiveChip] = React.useState(0)
  return (
    <aside
      className="md:hidden relative w-full overflow-hidden rounded-3xl text-white shadow-md p-4"
      style={{ background: 'var(--page-primary)' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.15)_0%,rgba(0,0,0,0)_40%)]" />
      <div className="relative z-10 flex gap-3 items-start">
        <Image
          src={data.image.src}
          alt={data.image.alt ?? ''}
          width={72}
          height={72}
          className="rounded-xl object-cover"
          priority
        />
        <div className="flex-1">
          <h2 className="font-bold whitespace-pre-line text-[16px] leading-6">{data.title}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {data.chips?.map((c, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveChip(i)}
                className={`chip ${i === activeChip ? 'chip--active' : ''} text-xs px-3 py-1.5`}
                aria-pressed={i === activeChip}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

// —————————— آکاردئون تب‌ها در موبایل (وسط) ——————————
function TabsAccordionMobile({ items }: { items: any[] }) {
  const [openId, setOpenId] = React.useState<string | null>(items?.[0]?.id ?? null);
  const toggle = (id: string) => setOpenId(cur => (cur === id ? null : id));

  return (
    <div className="md:hidden w-full space-y-3">
      {items.map((it: any) => {
        const open = it.id === openId;

        return (
          <div key={it.id} className={`acc ${open ? 'acc--open' : ''}`}>
            {/* هدر کارت */}
            <button
              type="button"
              onClick={() => toggle(it.id)}
              aria-expanded={open}
              className="w-full text-right p-4 flex items-center gap-3"
            >
              {it.icon && <img src={it.icon} alt="" className="w-7 h-7 shrink-0" />}

              <div className="flex-1">
                <div className={`font-extrabold text-[18px] leading-6 ${open ? 'text-[#FF7A2F]' : 'text-[#1B58D6]'}`}>
                  {it.title}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{it.caption}</div>
              </div>
            </button>

            {/* موج نارنجی (ثابت) */}
            <span className="tab-curve" aria-hidden />

            {/* فلش وسط موج — فقط فلش می‌چرخد */}
            <span className="tab-arrow" aria-hidden>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>

            {/* بدنه آکاردئون */}
            <div className="acc-body">
              <div className="border-t border-[#E9EEF7]">
                {it.sections?.map((s: any, i: number) => renderSectionMobile(s, i))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}




function renderSectionMobile(section: any, i: number) {
  if (section?.type === 'video-promo') {
    const s = section
    return (
      <div key={i} className="p-3">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            {s.badge && <div className="text-[13px] text-orange-600 font-bold">{s.badge}</div>}
            {s.minutes && (
              <div className="text-xs text-gray-500 mt-0.5">
                حدود {s.minutes.toLocaleString('fa-IR')} دقیقه
              </div>
            )}
            <h4 className="mt-1 text-sm font-semibold text-gray-800">{s.title}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {s.levels?.map((l: any, idx: number) => (
                <span
                  key={idx}
                  className="inline-flex items-center rounded-xl border px-3 py-1 text-xs border-blue-300 text-blue-700"
                >
                  {l.label}
                </span>
              ))}
            </div>
          </div>

          {s.image?.src && (
            <Image
              src={s.image.src}
              alt={s.image.alt ?? ''}
              width={88}
              height={88}
              className="rounded-xl object-cover"
            />
          )}
        </div>
      </div>
    )
  }
  return <div key={i} className="p-3 text-xs text-gray-500" />
}

// —————————— کارت کوله‌پشتی پایینِ موبایل (پایین) ——————————
function MobileBackpackStrip({
  image,
  kpi,
  mobileBanner,
}: {
  image: { src: string; alt?: string }
  kpi?: { value: string; label: string }
  mobileBanner?: {
    image?: { src: string; alt?: string } 
    lines?: { top?: string; accent?: string; bottom?: string }
  }
}) {
  const bgSrc = mobileBanner?.image?.src ?? '/img/backpack-m.png'
  const accent = '#ff7a2f'

  // متن‌های پیش‌فرض
  const top =
    mobileBanner?.lines?.top ??
    (kpi?.value ? `بیش از ${Number(kpi.value).toLocaleString('fa-IR')}` : 'بیش از ۲۵۰۰')
  const mid = mobileBanner?.lines?.accent ?? 'ویدئو آموزشی'
  const bottom = mobileBanner?.lines?.bottom ?? 'درس به درس'

  return (
    <div className="md:hidden w-full mt-4 ">
<div
  className="relative rounded-2xl overflow-hidden shadow-sm h-[180px] sm:h-[190px]" 
  style={{
    backgroundColor: '#06345C',
    backgroundImage: `url(${bgSrc})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
    backgroundSize: 'auto 100%',
  }}
  role="img"
  aria-label={image.alt ?? 'کوله آی‌نو'}
>
  <div className="absolute inset-0 flex items-center justify-سفشقف pr-4">
    <div className="text-white text-right leading-[1.9]">
      <div className="text-[17px] font-bold">
        {top} <span style={{ color: '#ff7a2f' }}>{mid}</span>
      </div>
      <div className="text-[15px] font-bold">{bottom}</div>
    </div>
  </div>
</div>
    </div>
  )
}


// —————————— ترکیب نهایی ——————————
export default function HeroTabs({ left, right }: any) {
  const mobileHeroData = left?.mobileHero
    ? { title: left.mobileHero.title, chips: left.mobileHero.chips, image: left.mobileHero.image }
    : { title: left.title, chips: left.chips, image: left.image }

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
      {/* 1) بنر مستقلِ موبایل (بالا) */}
      <MobileMiniHero data={mobileHeroData} />

      {/* 2) آکاردئون تب‌ها (موبایل) */}
      <TabsAccordionMobile items={right.items} />

      {/* 3) بنر پایین موبایل: کوله چپ + پنل راست */}
      <MobileBackpackStrip image={left.image} kpi={left.kpi} mobileBanner={left.mobileBanner} />

      {/* دسکتاپ: چیدمان قبلی */}
      <div className="hidden md:block md:col-span-8">
        <TabsPanel {...right} />
      </div>

      <aside className="hidden md:block md:col-span-4 relative overflow-hidden rounded-3xl text-white shadow-md">
        <Image src={left.image.src} alt={left.image.alt ?? ''} fill sizes="33vw" className="object-cover" priority />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.20)_0%,rgba(0,0,0,0)_35%)]" />
        <div className="relative z-10 p-6 h-full flex flex-col">
          <h2 className="text-xl font-bold leading-8 whitespace-pre-line drop-shadow">{left.title}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {left.chips?.map((c: string, i: number) => (
              <span key={i} className="inline-flex rounded-full border px-3 py-1 text-xs bg-white/10 border-white/30">
                {c}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </section>
  )
}
