"use client"

import CodeBlock from "@/components/code-block"
import Image from "next/image"

export default function WithoutRouting() {
  return (
    <div>
      <p className="font-bold text-myBlack text-sm ur:text-xl py-2">1. Paketi Qururuq</p>
      <CodeBlock language={'bash'} code={`npm install next-intl`} />
      <p className='font-bold text-sm inline ur:text-xl text-[#000]  text-justify py-1 capitalize'>2. Next Confige faylında gərəkli dəyişiklikləri edirik</p>
      <div className=' grid grid-cols-1 ur:grid-cols-2'>
        <div >
          <code>next.config.ts</code>
          <CodeBlock language={'tsx'} code={`import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
       
const nextConfig: NextConfig = {};
       
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);`} />
        </div>
        <div>
          <code>next.config.js</code>
          <CodeBlock language={'jsx'} code={`const createNextIntlPlugin = require('next-intl/plugin');
       
const withNextIntl = createNextIntlPlugin();
 
const nextConfig = {};
 
module.exports = withNextIntl(nextConfig);`} />
        </div>
      </div>

      <p className='font-bold text-sm inline ur:text-xl text-[#000] text-justify py-1 '>
        3. <code>app/</code> Qovluğu İlə Eyni Səviyyədə <code>messages/</code> Qovluğu Yaradırıq.
      </p>
      <p className="font-bold text-myBlack text-xs ur:text-base py-1 "> QEYD Layihə böyüdükcə bəzilərimizə bir JSON faylında bütün səhifələrə aid məlumatları tapıb dəyişmək çətin gələ bilər ona görə də bu dəfə (şəkildə göründüyü kimi) <code>messages/</code> qovluğunun içərisində <code>az/</code>, <code>en/</code> kimi qovluqlar yaradırıb, daha sonra onların içərisinə işlətdiyim komponent və ya səhifə adlarına uyğun JSON faylları əlavə edəcəm.</p>

      <Image className='sm:ml-4 w-full sm:w-[300px] ' src={'/technologyes/message-folder2.png'} alt='' height={400} width={300}  />
      <div className=' grid grid-cols-1 ur:grid-cols-2'>
        <div >
          <code >messages/en/notFound.json</code>
          <CodeBlock language={'json'} code={`{
    "title": "Page Not Found",
    "description": "Oops! It looks like you've encountered a non-existent page!",
    "homepage": "Return Home",
    "prevPage": "Return Previous Page"
}`} />
        </div>
        <div>
          <code>messages/az/notFound.json</code>
          <CodeBlock language={'json'} code={`{
    "title": "Səhifə Tapılmadı",
    "description": "Görünür, mövcud olmayan bir səhifəyə daxil olmağa çalışırsınız!",
    "homepage": "Əsas Səhifəyə Get",
    "prevPage": "Əvvəlki Səhifəyə Qayıt"
}`} />
        </div>
      </div>

      <p className='font-bold text-sm inline ur:text-xl text-[#000] text-justify py-1 '>
        4. Daha Sonra Bu Mesajları Əldə Etmək Üçün  <code>utils/</code> Qovluğu içərisində <code>loadMessages.ts</code> Faylı Yaradırıq.
      </p>
      <CodeBlock language={'tsx'} code={`// 'loadMessages' funksiyası, verilən 'locale' dilinə uyğun mesajları yükləyir
export async function loadMessages(locale: string) {
    try {
        // Mesajları saxlamaq üçün boş bir obyekt yaradır
        const messages: Record<string, string> = {};

        // Yüklənəcək mesaj fayllarının siyahısı
        const files = [ 'header', 'notFound', 'landing', 'about'];

        // Hər bir fayl üçün 'locale' dilinə uyğun json faylını dinamik olaraq yükləyir
        for (const file of files) {
            // Dinamik olaraq faylı import edir və mesajları əlavə edir
            const importedModule = await import(\`../messages/\${locale}/\${file}.json\`);
            messages[file] = importedModule.default;
        }
        return messages;
    } catch (error) {
        console.error(\`Mesaj faylı yüklənə bilmədi: \\\${locale}\`, error);

        // Xəta baş verərsə, boş obyekt qaytarır
        return {};
    }
}`} />
<p className='font-bold text-sm inline ur:text-xl text-[#000]  text-justify py-1 '>5. Sonra <code>request.ts/</code> Fayılını Saxlamaq Üçün <code> app/</code> Qovluğu İlə Eyni Səviyyədə <code>i18n/</code> Qovluğu Yaradırıq.</p>
      <Image className='ur:ml-4 w-full ur:w-[300px]' src={'/technologyes/i18n-folder.png'} alt='' height={200} width={300} />
      <code>request.ts</code>
      <CodeBlock language={'tsx'} code={`import { cookies } from 'next/headers';
import { loadMessages } from '@/utils/loadMessages';

export default async function getRequestConfig() {
  // cookies API-dən locale-ni alırıq
  const cookieStore = await cookies(); // await əlavə edirik
  const locale = cookieStore.get('uk-locale')?.value || 'en'; // locale cookie-sini alırıq, yoxsa default olaraq 'en'
  // Mesajları yükləyirik
  const messages = await loadMessages(locale);
  return {
    locale,
    messages,
  };
}        `} />
  <p className='font-bold text-sm inline ur:text-xl text-[#000] text-justify py-1 '>
        6. Bütün Bu Konfigurasiyanın İşləməsi Üçün Bütün Layihəni <strong>NextIntlClientProvider</strong> İlə Sarmalayırıq.
      </p>
      <CodeBlock language={'tsx'} code={`// app/layout.tsx
import { Metadata } from "next"; // Next.js üçün metadata dəstəyi
import "./globals.css"; // Global CSS faylını daxil edir
import { getLocale, getMessages } from "next-intl/server"; // Server tərəfində dil və tərcümə mesajlarını əldə etmək üçün funksiyalar
import { NextIntlClientProvider } from "next-intl"; // 'next-intl'-in client tərəfli provider-i
      
// Səhifənin metadata məlumatları (SEO üçün)
export const metadata: Metadata = {
  title: "Urfan Karimli", // Saytın başlığı
  description: "Urfan Karimli's personal website", // Saytın təsviri
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
}   `} />
<p className='font-bold text-sm inline ur:text-xl text-[#000]  text-justify py-1  '>7. İstifadəsi</p>
      <CodeBlock language={'tsx'} code={`"use client"

import { useTranslations } from "next-intl";
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NotFound() {
	const t = useTranslations("notFound"); // Json faylın adını yazırıq

	const router = useRouter()
	return (
		<div className=" sticky z-20 h-screen flex flex-col justify-center items-center gap-2">
			<h2 className=" text-myWhite text-3xl">{t("title")}</h2> {'tərcüməni mənimsətdiyimiz dəyişənin adını yazırıq'} 
			<p className=" text-myWhite">{t("description")}</p>
			<button onClick={() => router.back()} className="hover:text-red-600 text-myYellow">
			{t("prevPage")}
			</button>
			<Link className="text-myYellow hover:text-red-600" href="/">
			{t("homepage")}
			</Link>
		</div>
	)
} `} />
<p className="font-bold text-myBlack text-sm ur:text-xl py-2 ">
        Dili Dəyişmək Üçün Bir Local Switcher Komponenti Yaradırıq.
      </p>

      <CodeBlock
    language="tsx"
    code={String.raw`'use client';

import { useRouter } from 'next/navigation';
import { useTransition, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Spinner from '../spinner';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Tooltip } from 'antd';
export default function LocaleSwitcher() {
    const t = useTranslations("landing")
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const [localeActive, setLocaleActive] = useState('en');

    useEffect(() => {
        const storedLocale = Cookies.get('uk-locale');
        if (storedLocale) {
            setLocaleActive(storedLocale);
        }
    }, []);
    const onSelectChange = (arg: string) => {
        Cookies.set('uk-locale', arg);
        startTransition(() => {
            router.refresh();
        });
        setLocaleActive(arg);
    };

    if (isPending) {
        return <Spinner />
    }

    return (
        <div className=' relative w-5 h-5'>
            {
                localeActive === 'az' ?
                    (
                        <Tooltip title={'Azərbaycan dilinə keç'}>
                            <button onClick={() => onSelectChange('en')} className=' absolute' >
                                <Image src={'/united-kingdom.png'} alt={'flag'} height={20} width={20} />
                            </button>
                        </Tooltip>
                    ) : (
                        <Tooltip title={'Switch to English'}>
                            <button onClick={() => onSelectChange('az')} className=' absolute'>
                                <Image src={'/azerbaijan.png'} alt={'flagg'} height={25} width={25} />
                            </button>
                        </Tooltip>
                    )
            }
        </div>
    );
}   `}
/>
<p className="font-bold text-myBlack text-xs ur:text-base py-2 ">QEYD: Bu kod nümunələrini öz işlədiyim layihələrdən (copy/paste) etdiyim üçün gözə biraz qarmaşıq gələ bilər, amma biraz diqqətlə baxsanız necə sadə olduğunu anlayacaqsınız. Yuxarıda da yazdığım kimi bu üsul məsləhətli üsul deyil çünki Cookiedə saxladığınız bir dil dəyişikliyini asanlıqla hər yerdə götürüb işlədə bilməyəcəksiniz.</p>


      {/* <CodeBlock language={'bash'} code={``} />
      <p className="font-bold text-myBlack text-sm ur:text-xl py-2 "></p>
      <p className="font-bold text-myBlack text-xs ur:text-base py-2 "></p>
      <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '></p>
      <ul className=' list-decimal pl-5 [&>li]:py-[2px]'>
        <li className='text-xs ur:text-sm text-[#000]  '> <strong></strong></li>
      </ul> */}
    </div>
  )
}
