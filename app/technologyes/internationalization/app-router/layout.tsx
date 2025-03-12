"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TechLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <div >
            <p className="font-bold text-myBlack text-xs ur:text-base py-2 ">Next.js App Router Internationalization (i18n)</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '> App Router Internationalization özü də iki üsul ilə olur</p>
            <ul className=' list-disc pl-5 [&>li]:py-[2px]'>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>i18n routing ilə:</strong> Bu üsulda dil dəyişikliyi URL hissədə saxlanılır və istifadəçi hansı dili seçdiyini görür. Bunun üçün bütün layihə [locale] adlı slug qovluq içərisindən keçir. ilk yazdığım zamanlarda bunun navigasiyaların sürətinə mənfi təsir edəcəyini düşünürdüm, amma yanılmışam, ən yaxşı üsul budur. Next.js SSR olduğu üçün URL hissədə olan dəyişikləri həm Server tərəfindən,həm də Client tərəfindən rahat istifadə etmək olur. </li>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>i18n routing olmadan:</strong> Bu üsulda dil dəyişikliyini saxlamaq üçün ən optimal variant Cookiesdir, çünki Locale Storige və Session Storige yalnız Client tərəfində mövcud olur və Server ilə uyğunlaşmır, amma Cookies isə həm server, həm də client tərəfindən istifadə oluna bilər.</li>
            </ul>
            <nav className=" flex items-center gap-4 w-full my-2  border-b-4 ">
                <Link
                    className={`ur:text-xl translate-y-1 border-b-4 font-bold  ${pathname === "/technologyes/internationalization/app-router/with-routing" ? "text-myYellow   border-b-myYellow " : "text-myBlack hover:text-myYellow"
                        }`}
                    href={`/technologyes/internationalization/app-router/with-routing`}>Roting ilə</Link>
                <Link
                    className={`ur:text-xl translate-y-1 border-b-4 font-bold  ${pathname === "/technologyes/internationalization/app-router/without-routing" ? "text-myYellow  border-b-myYellow" : "text-myBlack hover:text-myYellow"
                        }`}
                    href={`/technologyes/internationalization/app-router/without-routing`}>Roting olmadan</Link>
            </nav>
            <div >{children}</div>
        </div>
    );
}
