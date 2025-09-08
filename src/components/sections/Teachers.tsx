import Image from "next/image";

export default function Teachers({
  title,
  items,
  cta,
}: {
  title: string;
  items: { name: string; subject: string; bio: string; avatar: string }[];
  cta?: { label: string; href: string };
}) {
  return (
    <section
      className="relative mt-8 rounded-3xl p-4 sm:p-5 md:p-7 shadow-md overflow-visible"
      style={{ background: 'var(--page-primary)' }}
    >
      <h3 className="hidden md:block text-white text-base sm:text-lg md:text-xl font-bold mb-4 md:mb-5">
        {title}
      </h3>

      <div className="md:hidden -mx-4 px-4 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory pr-16">
        <div className="flex gap-3">
          {items.map((t, i) => (
            <article
              key={i}
              className="snap-center shrink-0 w-[60%] mx-auto rounded-2xl bg-white p-5 shadow-sm"
            >
              <header className="flex justify-between gap-3">

                <div>
                  <div className="font-semibold text-gray-800 text-sm">{t.name}</div>
                  <div className="text-xs text-blue-600">{t.subject}</div>
                </div>
                                <Image
                  src={t.avatar}
                  alt={`عکس ${t.name}`}
                  width={68}
                  height={68}
                  className="rounded-xl object-cover"
                />
              </header>
              <p className="text-xs text-gray-500 mt-2 line-clamp-2">{t.bio}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-4 gap-4">
        {items.map((t, i) => (
          <article key={i} className="rounded-2xl bg-white p-4 shadow-sm min-h-[120px]">
            <header className="flex justify-between gap-3">

              <div>
                <div className="font-semibold text-gray-800">{t.name}</div>
                <div className="text-sm text-blue-600">{t.subject}</div>
              </div>
                            <Image
                src={t.avatar}
                alt={`عکس ${t.name}`}
                width={81}
                height={81}
                className="rounded-xl object-cover"
              />
            </header>
            <p className="text-xs text-gray-500 mt-3 line-clamp-2">{t.bio}</p>
          </article>
        ))}
      </div>

      {cta && (
        <div className="hidden md:flex mt-5 justify-center">
          <a
            href={cta.href}
            className="inline-flex items-center rounded-xl px-5 py-2 text-sm font-medium text-white
                       bg-[#ff7a2f] shadow hover:brightness-105 transition"
          >
            {cta.label}
          </a>
        </div>
      )}

      {cta && (
        <a
          href={cta.href}
          aria-label="مشاهده سایر معلم‌ها"
          className="md:hidden absolute -right-1/12 top-1/2 -translate-y-1/2
                     bg-[#ff7a2f] text-white rounded-xl px-3 py-2 text-sm font-medium shadow
                     rotate-90 origin-center z-20"
        >
          سایر معلم‌ها ‹
        </a>
      )}

      <img
        src="/img/Vector.png"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute bottom-4 right-6 h-14 opacity-30 pointer-events-none select-none"
      />
    </section>
  );
}
