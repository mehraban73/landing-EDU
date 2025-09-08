import type { Page } from '../types'

const page: Page = {
  slug: 'students',
  seo: { title: 'دانش‌آموزان | آی‌نو', description: 'ویدیو، آزمون و گزارش پیشرفت.' },
  theme: {
    primary: '#1b58d6',
  surface: '#E9EEF7',
  background: 'linear-gradient(180deg, #F5F8FF 0%, rgba(245,248,255,0) 55%), #E9EEF7',
    promoBg: '/img/robot.png',
  },
  titleH1: 'سامانه آموزش مجازی آی‌نو',
  sections: [
    {
      type: 'hero-tabs',
left: {
  title: 'با آی‌نو،\nموفقیت همیشه همراهت است.',
  chips: ['ابتدایی', 'متوسطه اول', 'متوسطه دوم'],

  image: { src: '/img/backpack.png', alt: 'کوله و میز مطالعه' },

  kpi: { value: '2500', label: 'VIDEOS' },

  mobileHero: {
    title: '…',
    chips: ['…','…'],
    image: { src: '/img/robot.png' }
  },

  mobileBanner: {
    image: { src: '/img/backpack-m.png', alt: 'کوله نسخه موبایل' },
    panelColor: '#1f3e75',
    lines: { top: 'بیش از ۲۵۰۰', accent: 'ویدئو آموزشی', bottom: 'درس به درس' }
  }
},
      right: {
        param: 'tab',
        initialId: 'videos',
        items: [
          {
            id: 'videos',
            title: 'ویدئوهای آموزشی',
            caption: 'درس به درس سریع یاد بگیر',
            icon: '/img/ic-videos.svg',
            sections: [
              {
                type: 'video-promo',
                badge: 'ویدیو آموزشی',
                minutes: 37500,
                title: 'پایه تحصیلی خودت رو انتخاب کن',
                levels: [{ label: 'دهم' }, { label: 'یازدهم' }, { label: 'دوازدهم' }],
                cta: { label: 'شروع رایگان', href: '/signup' },
              },
            ],
          },
          {
            id: 'exams',
            title: 'امتحانات نهایی',
            caption: 'سوالات طبقه‌بندی شده',
            icon: '/img/ic-exams.svg',
            sections: [
              {
                type: 'video-promo',
                badge: 'بانک سوال',
                minutes: 8200,
                title: 'پایه‌ات رو انتخاب کن و تمرین کن',
                levels: [{ label: 'دهم' }, { label: 'یازدهم' }, { label: 'دوازدهم' }],
                cta: { label: 'دیدن نمونه سؤال‌ها', href: '/questions' },
              },
            ],
          },
          {
            id: 'konkur',
            title: 'کنکور',
            caption: 'تسلط بر تمامی مباحث',
            icon: '/img/ic-cap.svg',
            sections: [
              {
                type: 'video-promo',
                badge: 'مسیر کنکور',
                minutes: 15400,
                title: 'پایه مناسب کنکور رو انتخاب کن',
                levels: [{ label: 'دهم' }, { label: 'یازدهم' }, { label: 'دوازدهم' }],
                cta: { label: 'شروع مسیر', href: '/konkur' },
              },
            ],
          },
        ],
      },
    },
     {
    type: 'teachers',
    title: 'معلم‌های آی‌نو',
    items: [
      { name: 'علیرضا شیخ عطار', subject: 'ریاضی', bio: 'مدرس ...', avatar: '/img/t1.png' },
      {  name: 'علیرضا شیخ عطار', subject: 'ریاضی', bio: 'مدرس ...', avatar: '/img/t1.png' },
      { name: 'حسین ضیغمی‌زاده', subject: 'ریاضی', bio: 'نویسنده ...', avatar: '/img/t2.png' },
      {  name: 'حسن شفیعیان',   subject: 'زیست‌شناسی', bio: 'مدرس ...', avatar: '/img/t3.png' }
    ],
    cta: { label: 'مشاهده سایر معلم‌ها', href: '/teachers' }
  },
  ],
}

export default page