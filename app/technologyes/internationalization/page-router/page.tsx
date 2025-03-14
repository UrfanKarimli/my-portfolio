import CodeBlock from '@/components/code-block'
import React from 'react'

export default function PageRouter() {
  return (
    <div>
      <p className="font-bold text-myBlack text-sm ur:text-xl py-2">1. Paketi Qururuq</p>
      <CodeBlock language={'bash'} code={`npm install next-intl`} />

      <p className="font-bold text-myBlack text-sm ur:text-xl py-2">2. Dil Fayllarını Hazırlayırıq</p>
      <p className='text-xs inline ur:text-sm text-[#000] text-justify py-1'>
        Hər dil üçün <strong>JSON</strong> formatında tərcümə faylları yarat və <code>messages/</code> qovluğuna yerləşdir:
      </p>
      <div className=' grid grid-cols-1 ur:grid-cols-2'>
        <div >
          <code className="font-normal text-myBlack text-xs ur:text-base ">messages/en.json</code>
          <CodeBlock language={'json'} code={`
{
  "HomePage": {
    "title": "Hello world!",
    "about": "Go to the about page"
  }
}`} />
        </div>
        <div>
          <code className="font-normal text-myBlack text-xs ur:text-base  ">messages/az.json</code>
          <CodeBlock language={'json'} code={`
{
  "HomePage": {
    "title": "Salam dünya!",
    "about": "Haqqında səhifəsinə get"
  }
}`} />
        </div>
      </div>
      <p className="font-bold text-myBlack text-sm ur:text-xl py-2">3. `getStaticProps` ilə Dil Məlumatlarını Yükləyirik</p>
      <p className='text-xs inline ur:text-sm text-[#000] text-justify py-1'>
        `getStaticProps` ilə tərcümə fayllarını səhifəyə daxil et:
      </p>
      <code>pages/index.ts</code>
      <CodeBlock language={'javascript'} code={`
import { useTranslations } from "next-intl";

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(\`../messages/\${context.locale}/.json\`)).default,
    },
  };
}

export default function Home() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("language")}</p>
    </div>
  );
}`} />

      <p className="font-bold text-myBlack text-sm ur:text-xl py-2">4. `next.config.js` Faylınında Gərəkli Dəyişiklikləri Edirik</p>
      <CodeBlock language={'javascript'} code={`const nextConfig = {
  i18n: {
    locales: ["en", "az"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;`} />


      <p className="font-bold text-myBlack text-sm ur:text-xl py-2">5. `next-intl` Konfiqurasiyası (`_app.js`)</p>
      <CodeBlock language={'javascript'} code={`import {NextIntlClientProvider} from 'next-intl';
import {useRouter} from 'next/router';
 
export default function App({Component, pageProps}) {
  const router = useRouter();
 
  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Vienna"
      messages={pageProps.messages}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}`} />

      <p className="font-bold text-myBlack text-sm ur:text-xl py-2">6. Serverdə Dil Parametrini Oxu (Opsional)</p>
      <CodeBlock language={'javascript'} code={`export async function getServerSideProps(context) {
  return {
    props: {
       messages: (await import(\`../messages/\${context.locale}/.json\`)).default,
    },
  };
}`} />


<p className="font-bold text-myBlack text-sm ur:text-xl py-2">7. Linklərdə Dil Parametrini İşlədirik</p>
<p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '> Bu komponenti daha səliqəli hala salıb istədiyiniz hissədə işlədə bilərsiniz.</p>
      <CodeBlock language={'javascript'} code={`import Link from "next/link";
export default function LanguageSwitcher() {
  return (
    <div>
      <Link href="/" locale="en">English</Link>
      <Link href="/" locale="az">Azərbaycan</Link>
    </div>
  );
}`} />


      <p className="font-bold text-myBlack text-sm ur:text-xl py-2">✅ Nəticə</p>
      <p className='text-xs inline ur:text-sm text-[#000] text-justify py-1'>
        Bu addımlardan sonra **Next.js Page Router**-də <strong>next-intl</strong> tam şəkildə işləyəcək.
        İstifadəçilər <code>/az</code> və <code>/en</code> URL-lərinə keçid edərək dilləri dəyişə bilərlər.
      </p>
    </div>

  )
}
