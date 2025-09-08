// src/content/types.ts
export type Image = { src: string; alt?: string }

export type VideoPromo = {
  type: 'video-promo'
  badge?: string
  minutes?: number
  title: string
  // اگر در موبایل تصویر نداشتیم هم ارور نگیریم
  image?: Image
  levels: { label: string }[]
  cta?: { label: string; href: string }
}

export type TabsPanel = {
  type: 'tabs-panel'
  param?: string
  initialId?: string
  items: {
    id: string
    title: string
    caption: string
    icon?: string
    sections: Section[]
  }[]
}

/** ستون چپ + تب‌ها و پنل سمت راست */
export type HeroTabs = {
  type: 'hero-tabs'
  left: {
    title: string
    chips: string[]
    image: Image
    kpi?: { value: string; label: string }

    // 👇 اضافه‌های جدید برای موبایل
    mobileHero?: {
      title: string
      chips: string[]
      image: Image
    }
    mobileBanner?: {
      image?: Image            
      panelColor?: string     
      lines?: {
        top?: string
        accent?: string
        bottom?: string
      }
    }
  }
  right: Omit<TabsPanel, 'type'>
}

export type Teachers = {
  type: 'teachers'
  title: string
  items: { name: string; subject: string; bio: string; avatar: string }[]
  cta?: { label: string; href: string }
}

export type Section =
  | HeroTabs
  | TabsPanel
  | VideoPromo
  // | FeatureGrid
  // | KPIStrip
  | Teachers

export type Page = {
  slug: string
  seo: { title: string; description?: string; canonical?: string; ogImage?: string }
  theme: { primary: string; background?: string; promoBg?: string, surface?: string  }
  titleH1: string
  sections: Section[]
}
