"use client"

import CodeBlock from '@/components/code-block'
import Image from 'next/image'

export default function WithRouting() {
  return (
    <div>
      <p className='font-bold text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>1. İlk öncə paketi yükləyirik</p>
      <CodeBlock language={'bash'} code={`
npm install next-intl`} />
      <p className='font-bold text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>2. Bütün səhifə qovluqlarını [locale] içində yazırıq</p>
      <Image className='ml-4' src={'/technologyes/locale-folder.png'} alt='' height={200} width={200} />
      <p className='font-bold text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>3. Next Confige faylında gərəkli dəyişiklikləri edirik</p>
      <div className=' grid grid-cols-1 ur:grid-cols-2'>
        <div >
          <p className="font-bold text-myBlack text-xs ur:text-base py-2 ">next.config.ts</p>
          <CodeBlock language={'tsx'} code={`
import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
       
const nextConfig: NextConfig = {};
       
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);`} />
        </div>
        <div>
          <p className="font-bold text-myBlack text-xs ur:text-base py-2 ">next.config.js</p>
          <CodeBlock language={'jsx'} code={`
const createNextIntlPlugin = require('next-intl/plugin');
       
const withNextIntl = createNextIntlPlugin();
 
const nextConfig = {};
 
module.exports = withNextIntl(nextConfig);`} />
        </div>
      </div>
      <p className='font-bold text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>4. Sonra <mark>request.ts</mark> və <mark>routing.ts</mark> fayılları saxlamaq üçün, layihənin kök qovluğunda <mark> app </mark> qovluğu ilə eyni səviyyədə <mark>i18n </mark> qovluğu yaradırıq.</p>
      <Image className='ml-4' src={'/technologyes/i18n-folder.png'} alt='' height={200} width={300} />
      <p className='font-bold text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>5.  <strong>routing.ts</strong> faylını yaradırıq. <mark>/i18n/routing.ts</mark> .</p>
      <CodeBlock language={'tsx'} code={`
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

// Dil parametrlərini və yönləndirmə qaydalarını müəyyən edir
export const routing = defineRouting({
  locales: ['az', 'en'], // Dəstəklənən dillər: Azərbaycan və İngilis
  defaultLocale: 'az' // Varsayılan dil Azərbaycan dilidir
});

// 'createNavigation' funksiyası 'routing' obyektindən istifadə edərək Next.js üçün beynəlxalqlaşdırılmış naviqasiya yaradır
export const { 
  Link,       // Next.js-in '<Link>' komponentinə alternativ, dilə uyğun yönləndirir
  redirect,   // Server və ya client tərəfindən lokalizasiyaya uyğun yönləndirmə üçün istifadə edilir
  usePathname, // Hal-hazırkı URL-in yol hissəsini əldə etməyə imkan verir
  useRouter,  // Next.js-in 'useRouter' hook-una bənzəyir, lakin lokalizasiya ilə işləyir
  getPathname // Lokalizasiyaya uyğun URL-i əldə etməyə imkan verir
} = createNavigation(routing);
    `} />
      <p className='font-bold text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>6. <strong>request.ts</strong> faylını yaradırıq. <mark>/i18n/request.ts</mark> .</p>
      <CodeBlock
        language="jsx"
        code={`import { getRequestConfig } from "next-intl/server"; 
import { routing } from "./routing"; 
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
      
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(\`../messages/\${locale}.json\`)).default,
  };
});
`}
      />
      <p className='font-bold text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>7. <strong>middleware.ts</strong>. <mark> app </mark> qovluğu ilə eyni səviyyədə <mark>middleware.ts </mark>  faylını yaradırıq.</p>
      <CodeBlock language={'jsx'} code={`
import createMiddleware from 'next-intl/middleware'; // 'next-intl' üçün middleware yaradan funksiya
import { routing } from './i18n/routing'; // Dil yönləndirmə ayarlarını gətirir

// 'next-intl' üçün beynəlxalqlaşdırma middleware-i yaradır
export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(az|en)/:path*'] // Middleware-i tətbiq edəcək URL-ləri müəyyən edir
};
          `} />

      <p className='font-bold text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>8. Dil çeşidləri üçün olan JSON fayılları saxlamaq üçün, layihənin kök qovluğunda <mark> app </mark> qovluğu ilə eyni səviyyədə <mark>messages </mark> qovluğu yaradırıq.</p>
      <Image className='ml-4' src={'/technologyes/message-folder.png'} alt='' height={200} width={300} />
      <p className="font-bold text-xs inline ur:text-sm text-[#000]  text-justify py-1  ">9. Bu qovluğun içərisində <mark>en.json </mark>, <mark>az.json</mark> kimi fayllar yaradırıq və fayllarda fərqli dillərdə olan tərcümələri saxlayırıq.</p>
      <div className=' grid grid-cols-1 ur:grid-cols-2'>
        <div >
          <p className="font-normal text-myBlack text-xs ur:text-base ">messages/en.json</p>
          <CodeBlock language={'json'} code={`
{
  "HomePage": {
    "title": "Hello world!",
    "about": "Go to the about page"
  }
}`} />
        </div>
        <div>
          <p className="font-normal text-myBlack text-xs ur:text-base  ">messages/az.json</p>
          <CodeBlock language={'json'} code={`
{
  "HomePage": {
    "title": "Salam dünya!",
    "about": "Haqqında səhifəsinə get"
  }
}`} />
        </div>
      </div>
      <p className='font-bold text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>10. Bütün bu konfigurasiyanın işləməsi üçün bütün layihəni <strong>NextIntlClientProvider </strong> ilə sarmalayırıq.</p>
      <CodeBlock language={'jsx'} code={`
// app/layout.tsx
import { Metadata } from "next"; // Next.js üçün metadata dəstəyi
import "./globals.css"; // Global CSS faylını daxil edir
import { getLocale, getMessages } from "next-intl/server"; // Server tərəfində dil və tərcümə mesajlarını əldə etmək üçün funksiyalar
import { NextIntlClientProvider } from "next-intl"; // 'next-intl'-in client tərəfli provider-i
      
// Səhifənin metadata məlumatları (SEO üçün)
export const metadata: Metadata = {
  title: "Urfan Karimli", // Saytın başlığı
  description: "Urfan Karimli's personal website", // Saytın təsviri
  manifest: "/manifest.json", // PWA dəstəyi üçün manifest faylı
};

// RootLayout - Bütün səhifələrə tətbiq olunan layout komponenti
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // İstifadəçinin lokalizasiyasını (dilini) əldə edir
  const locale = await getLocale();
  // Müvafiq dilə uyğun tərcümə mesajlarını yükləyir
  const messages = await getMessages();

  return (
    <html lang={locale}> {/* HTML dilini istifadəçinin seçiminə uyğun təyin edir */}
      <body>
        {/* 'next-intl' provider - bütün uşaqlara (children) tərcümə mesajlarını ötürür */}
        <NextIntlClientProvider messages={messages}>
          <main>
            {children} {/* Səhifə komponentlərinin burada göstərilməsi */}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
    `} />
      <p className='font-bold text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>11. İstifadəsi</p>
      <CodeBlock language={'jsx'} code={`
import { useTranslations } from 'next-intl'; // 'next-intl'-dən tərcümə funksiyasını gətirir
import { Link } from '@/i18n/navigation'; // Next.js üçün i18n yönləndirmə linkini istifadə edir

export default function HomePage() {
  const t = useTranslations('HomePage'); // 'HomePage' adlı tərcümə obyektini çağırır

  return (
    <div>
      {/* Tərcümə faylından 'title' açarına uyğun mətni göstərir */}
      <h1>{t('title')}</h1>

      {/* "/about" səhifəsinə keçid edən lokalizasiyaya uyğun Link */}
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}
    `} />
      <p className="font-bold text-myBlack text-xs ur:text-base py-2 "> Dili dəyişmək üçün bir <strong>Local Switcher</strong> komponenti yaradırıq. Aşağıda sadə bir kod nümunəsi göstərəcəm</p>
      <CodeBlock
        language="jsx"
        code={String.raw`
'use client'; // Bu komponentin yalnız client tərəfində işləməsini təmin edir

import { useLocale } from 'next-intl'; // Hal-hazırda aktiv dili əldə etmək üçün hook
import { useRouter, usePathname } from 'next/navigation'; // Router yönləndirmə funksiyaları
import { ChangeEvent, useTransition } from 'react'; // React hook'ları

export default function LocaleSwitcher() {
    const [isPending, startTransition] = useTransition(); // Keçid (transition) zamanı gözləmə vəziyyətini idarə edir
    const router = useRouter(); // Next.js router funksiyasını əldə edir
    const localeActive = useLocale(); // Hal-hazırda aktiv olan dili gətirir
    const pathname = usePathname(); // Hal-hazırda istifadə olunan URL yolunu əldə edir

    // Dil dəyişdikdə çağırılan funksiya
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value; // Yeni seçilən dili əldə edir

        startTransition(() => {
            // Hal-hazırkı URL-də aktiv dili yeni seçilən dillə əvəz edir
            const newPathname = pathname.replace(\`/\${localeActive}\`, \`/\${nextLocale}\`);
            router.replace(newPathname); // Yeni URL-ə yönləndirir (replace edir, yenidən yükləmə olmadan)
        });
    };

    return (
        <label className="border-2 rounded"> {/* Sərhədi və yuvarlaq kənarları olan etiket */}
            <p className="sr-only">Change language</p> {/* Görünməyən (screen reader üçün) mətn */}
            <select
                defaultValue={localeActive} // Varsayılan dəyəri aktiv dilə uyğun olaraq təyin edir
                className="bg-transparent py-2" // Arxa planı şəffaf və yuxarı-aşağı boşluğu olan stil
                onChange={onSelectChange} // Dil dəyişiklik hadisəsini idarə edir
                disabled={isPending} // Keçid zamanı disable edərək ikinci seçim edilməsinin qarşısını alır
            >
                <option value="az">Az</option> {/* Azərbaycan dili seçimi */}
                <option value="en">En</option> {/* İngilis dili seçimi */}
            </select>
        </label>
    );
}
  `}
      />

    </div>
  )
}
