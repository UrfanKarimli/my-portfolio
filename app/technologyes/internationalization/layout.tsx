"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function TechLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className='bg-myWhite w-full p-4 no-shadow'>
            <p className="font-bold text-myBlack text-sm ur:text-xl py-2 ">Çoxdilli funsionallıq(Internationalization) </p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Coxdilli funksionallıq (Internationalization - i18n) frontend tətbiqlərində istifadəçilərə fərqli dillərdə məzmun təqdim etməyə imkan verir. Bu, qlobal istifadəçilərə uyğunlaşdırılmış interfeys və daha yaxşı istifadəçi təcrübəsi təmin etmək üçün vacibdir.</p>
            <p className="font-bold text-myBlack text-xs ur:text-base py-2 ">Frontend-də Internationalization (i18n) Nədir?</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Internationalization (i18n), tətbiqin müxtəlif dillərə və mədəni kontekstlərə uyğunlaşdırılmasını asanlaşdıran bir yanaşmadır. Localization (l10n) isə müəyyən bir dil və mədəniyyətə uyğunlaşdırma prosesidir.</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>i18n və l10n arasındakı fərq:</p>
            <ul className=' list-disc pl-5 [&>li]:py-[2px]'>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>i18n (Internationalization)</strong> - Tətbiqi müxtəlif dillərə uyğunlaşdırmaq üçün struktur hazırlamaq.</li>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>l10n (Localization)</strong> -  Müəyyən bir dil üçün tərcümələr və formatlar əlavə etmək.</li>
            </ul>
            <p className="font-bold text-myBlack text-xs ur:text-base py-2 ">Frontend-də i18n Üçün Populyar Kitabxanalar</p>
            <ul className=' list-decimal pl-5 [&>li]:py-[2px]'>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>react-i18next (React üçün)</strong></li>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>i18next (Vanilla JavaScript, Vue, Angular və s. üçün)</strong></li>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>vue-i18n (Vue üçün)</strong></li>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>ngx-translate (Angular üçün)</strong></li>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>FormatJS (React və digər framework-lər üçün)</strong></li>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>Polyglot.js (Sadə və yüngül seçim)</strong></li>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>Next-intl (Next.js üçün)</strong></li>
            </ul>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '> Mən bu kitabxanalardan nümunə olaraq `Next-intl`-i göstərəcəm </p>
            <p className="font-bold text-myBlack text-sm ur:text-xl py-2 ">Next İntl</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Bildiyimiz kimi Next.js Router strukturu iki cür olur, Page Router və App Router. Bunun üçün də hər strukturun özünə məxsus konfiqurasiyası vardır.</p>
            <p className="font-bold text-myBlack text-sm ur:text-xl py-2 ">
                <strong>QEYD:</strong> Bunu şəxsi təcrübəmdə istifadə etdiyim üsula əsasən yazmışam. Ola bilər ki, kitabxanada yeni dəyişikliklər edilib və ya Next-in yeni versiyaları ilə tam uyğunlaşmasın. Son dəyişiklikləri öyrənmək və daha çox məlumat almaq üçün kitabxananın rəsmi sənədlərinə
                <a className=" text-blue-500 hover:text-myYellow" href="https://next-intl.dev/docs/getting-started"> buradan</a> daxil ola bilərsiniz.
            </p>

            <nav className=" flex items-center gap-4 w-full my-2  border-b-4">
                <Link
                    className={`ur:text-xl translate-y-1 border-b-4 font-bold  ${pathname.includes("/technologyes/internationalization/app-router") ? "text-myYellow border-b-myYellow" : "text-myBlack hover:text-myYellow"}`}
                    href={`/technologyes/internationalization/app-router/with-routing`}>App Roting</Link>
                <Link
                    className={`ur:text-xl translate-y-1 border-b-4 font-bold  ${pathname.includes("/technologyes/internationalization/page-router") ? "text-myYellow   border-b-myYellow " : "text-myBlack hover:text-myYellow"
                        }`}
                    href={`/technologyes/internationalization/page-router`}>Page Roting</Link>
            </nav>
            <div>
                {children}
            </div>
        </div>
    );
}
