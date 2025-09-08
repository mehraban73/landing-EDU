This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
ساختار پروژه (خلاصه)


public/
  img/
  
    backpack.png         # تصویر دسکتاپ
    
    backpack-m.png       # تصویر موبایل بنر کوله
    
    bgTab.png            # بک‌گراند موجیِ آکاردئون موبایل
    
    ic-*.svg             # آیکن‌ها
    

    

src/

  app/
  
    (routes)/[slug]/page.tsx           # صفحه‌ی students (داینمیک)
  components/_sections/
  
    HeroTabs.tsx        # سکشن تب‌ها + بنرهای موبایل/دسکتاپ
    TabsPanel.tsx       # تب‌پَنل دسکتاپ
    Teachers.tsx        # سکشن معلم‌ها (گرید دسکتاپ + اسکرول موبایل)
    VideoPromo.tsx      # رندر آیتم‌های داخل تب

    
  content/
  
    pages/students.ts   # داده‌های صفحه (theme, sections, tabs, ...)
    types.ts            # تایپ‌ها (Page/Section/etc)
  lib/renderer.ts       # renderSection
  
  styles/globals.css    # Tailwind و utilهای سفارشی (notch/curve/...)
  

  

