import { getPage } from '@/content/repo';
import { renderSection } from '@/lib/renderer';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [{ slug: 'students' }];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = await getPage(params.slug).catch(() => null);
  if (!p) return { title: 'یافت نشد' };
  return {
    title: p.seo.title,
    description: p.seo.description,
    openGraph: { images: [p.seo.ogImage || '/og-default.png'] },
    alternates: { canonical: p.seo.canonical || `/${p.slug}` },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const p = await getPage(params.slug).catch(() => null);
  if (!p) return notFound();
// تغییر 1
  const surface = p.theme.surface ?? '#E9EEF7'; // Hex باید بزارم از فیگما برمیدارم    
  const bg = p.theme.background;

  const style: React.CSSProperties = {
    ['--page-primary' as any]: p.theme.primary,
    ['--surface' as any]: surface,
    ['--promo-bg' as any]: `url(${p.theme.promoBg || '/img/robot.png'})`,

    backgroundColor: surface,

    ...(bg?.startsWith('linear-gradient')
      ? { backgroundImage: bg }
      : bg
      ? { backgroundColor: bg }
      : {}),
  };

  return (
    <main className="min-h-screen" style={style}>
      <div className="mx-auto max-w-7xl px-4 py-8 space-y-8">
        <h1 className="sr-only">{p.titleH1}</h1>
        {p.sections.map(renderSection)}
      </div>
    </main>
  );
}

