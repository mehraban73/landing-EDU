import HeroTabs    from '@/components/sections/HeroTabs'
import TabsPanel   from '@/components/sections/TabsPanel'
import VideoPromo  from '@/components/sections/VideoPromo'
import FeatureGrid from '@/components/sections/FeatureGrid'
import KPIStrip    from '@/components/sections/KPIStrip'
import Teachers    from '@/components/sections/Teachers'

const registry = {
  'hero-tabs':   HeroTabs,
  'tabs-panel':  TabsPanel,
  'video-promo': VideoPromo,
  'feature-grid': FeatureGrid,
  'kpi-strip':   KPIStrip,
  'teachers':    Teachers,
} as const

export function renderSection(section: any, i: number) {
  const Cmp = (registry as any)[section?.type]
  if (!Cmp) {
    console.warn('Unknown section type:', section?.type, section)
    return null
  }
  return <Cmp key={i} {...section} />
}
