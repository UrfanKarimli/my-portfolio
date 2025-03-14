import CodeBlock from "@/components/code-block";

export default function page() {
    return (
        <div className='bg-myWhite w-full p-4 no-shadow'>
            <p className="font-bold text-myBlack text-sm ur:text-xl py-2 ">Progressive Web Apps (PWA) Nədir?</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Progressive Web Apps (PWA) veb texnologiyalarından istifadə edərək mobil tətbiqlər kimi işləyən veb tətbiqlərdir. Onlar İnternet brauzerlərində çalışan, lakin natıv mobil tətbiqlər kimi performans və istifadə rahatlığı təmin edən proqramlardır.</p>
            <p className="font-bold text-myBlack text-xs ur:text-base py-2 ">PWA-nın Üsas Xüsusiyyətləri:</p>
            <ul className=' list-decimal pl-5 [&>li]:py-[2px]'>
                <li className='text-xs ur:text-sm text-[#000]  '><strong>Offline Dəstəyi:</strong> PWA-lar, veb tətbiqlərini istifadəçilərə internet bağlantısı olmadıqda belə işləyə biləcək şəkildə optimallaşdırır. Bu, Service Worker adlı bir texnologiya ilə mümkün olur. Service Worker, saytı offline rejimində işlədə bilər və həmçinin məlumatları lokal yaddaşda saxlayaraq istifadəçiyə təcrübə təmin edə bilər.</li>
                <li className='text-xs ur:text-sm text-[#000]  '><strong>Yerli Tətbiq Gibi Davranış:</strong>PWA-lar yerli tətbiqlərin funksiyalarını təmin edə bilir. Məsələn, istifadəçilər PWA-ları başlatmaq üçün onları cihazlarına əlavə edə, ekranın əsas hissəsindəki ikonadan açıb istifadə edə bilərlər. Bu tətbiqlər, mobil cihazlarda və masaüstü kompüterlərdə özəl olaraq ekranın tam ölçüsünü alaraq işləyir.</li>
                <li className='text-xs ur:text-sm text-[#000]  '><strong>Təsvirlər və Bildirişlər:</strong>PWA-lar, istifadəçilərə təsvirlər göndərə bilər. Bu, istifadəçiləri yeni xəbərdarlıqlar barədə məlumatlandırmaq üçün tətbiq olunur. Bu xüsusiyyət, ənənəvi veb saytlar üçün mövcud olmayan bir üstünlükdür.</li>
                <li className='text-xs ur:text-sm text-[#000]  '><strong>Sürət və Yüksək Performans:</strong>PWA-lar tətbiqlərin sürətini artırmağa kömək edən bir çox optimallaşdırma texnikalarını istifadə edir. Həmçinin, istifadəçi təcrübəsini yaxşılaşdırmaq üçün hər bir səhifə yeniləndikdə təkrar yükləməyi azaltmaq məqsədini güdür.</li>
                <li className='text-xs ur:text-sm text-[#000]  '><strong>Asan Quraşdırma:</strong>Yerli tətbiqlərlə müqayisədə, PWA-ları quraşdırmaq daha sadədir. İstifadəçilər, yalnız veb brauzerində bir neçə klik ilə PWA-nı öz cihazlarına əlavə edə bilərlər.</li>
            </ul>
            <p className='font-bold text-myBlack text-xs ur:text-base py-2 '>PWA-nın Faydaları:</p>
            <ul className=' list-disc pl-5 [&>li]:py-[2px]'>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>Yüksək Performans:</strong>Offline dəstək və yüksək sürətli yükləmə təcrübəsi təmin edir.</li>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>Quraşdırma sadəliyi:</strong> İstifadəçilər tətbiqi cihazlarına endirərkən ənənəvi tətbiqlərin tələb etdiyi mürəkkəb prosesləri keçmirlər.</li>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>Sərfəli inkişaf:</strong>Yerli tətbiqlərə nisbətən PWA-lar üçün daha aşağı inkişaf və saxlanma xərcləri vardır.</li>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>Çox Platforma Uyğunluğu:</strong> Həm mobil, həm də masaüstü platformalarda işləyə bilir.</li>
                <li className='text-xs ur:text-sm text-[#000]  '> <strong>SEO Dəstəyi:</strong>PWA-lar veb saytlar kimi SEO (axtarış motoru optimizasiyası) üçün optimallaşdırılmışdır, bu da onlara axtarış nəticələrində yaxşı mövqelər qazandırır.</li>
            </ul>
            <p className='font-bold text-myBlack text-xs ur:text-base py-2 '>PWA necə işləyir?</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>PWA-ların iş prinsipi əsasən aşağıdakı texnologiyalar üzərində qurulub:</p>
            <ul className=' list-decimal pl-5 [&>li]:py-[2px]'>
                <li className='text-xs ur:text-sm text-[#000]  '><strong>Manifest Faylı:</strong>Tətbiq üçün bir manifest faylı yaradılmalıdır. Bu fayl tətbiqin adını, rəngini, ikonasını və digər parametrləri müəyyən edir.</li>
                <li className='text-xs ur:text-sm text-[#000]  '><strong>Service Worker Qurulması:</strong>Veb tətbiqinin offline işləyə bilməsi üçün Service Worker qurulmalıdır. Bu, səhifələrin offline yüklənməsini və məlumatların saxlanmasını təmin edir.</li>
                <li className='text-xs ur:text-sm text-[#000]  '><strong>HTTPS Təminatı:</strong>PWA-ların HTTPS üzərindən xidmət etməsi vacibdir.</li>
                <li className='text-xs ur:text-sm text-[#000]  '><strong>Responsive Dizayn: </strong> PWA-ların mobil və masaüstü cihazlarda işləməsi üçün dizaynın reaksiya verən (responsive) olması lazımdır.</li>
            </ul>
            <p className="font-bold text-myBlack text-sm ur:text-xl py-2 pl-5"> Next.js ilə yaradılmış bir layihədə PWA nümunəsi:</p>
            <p className="font-medium text-myBlack text-xs ur:text-base py-2 ">1. Next-pwa quraşdırmaq</p>
<CodeBlock language={'bash'} code={`npm install next-pwa `}/>
            <p className='font-bold text-myBlack text-xs ur:text-base py-2 '>2. next.config.js Konfiqurasiyası</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Layihənin next.config.js faylına aşağıdakı konfiqurasiyanı əlavə edin:</p>
            <CodeBlock language={'tsx'} code={`
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
});            `} />
            <p className='font-bold text-myBlack text-xs ur:text-base py-2 '>3. Web App Manifest Faylı Yaratmaq</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>public/manifest.json faylını yaradın və aşağıdakı konfiqurasiyanı daxil edin:</p>
            <CodeBlock language={'json'} code={`
{
  "name": "Mənim Next.js PWA Tətbiqim",
  "short_name": "NextPWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icons/icon-192x192.png", //şəkilləri public qovluğunda icon adlı qovluqda saxlayırıq
      "sizes": "192x192", // ekranda App-ın üz qabığı
      "type": "image/png" 
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}    `} />

            <p className='font-bold text-myBlack text-xs ur:text-base py-2 '>4. Yükləmə Bildirişi (Download Popup) yaratmaq (istəyə uyğun) </p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Əgər ilk daxil olan istifadəçiyə Tətbiqi yükləməsini təklif etmək istəsəniz bir Popup compoenenti yarada bilərsiniz</p>
<CodeBlock language={'tsx'} code={`
"use client"; // Next.js'de bu komponentin client-side işləməsini təmin edir

import { useEffect, useState } from "react"; // React hook'ları import edilir
import Cookies from "js-cookie"; // Brauzer kukilərini idarə etmək üçün js-cookie kitabxanası
import { FaPlus } from "react-icons/fa"; // React Icons kitabxanasından '+' ikonunu import edir
import { useTranslations } from "next-intl"; // Next.js üçün beynəlxalqlaşdırma funksiyasını import edir

// 'beforeinstallprompt' eventinin tipini müəyyən edir
type BeforeInstallPromptEvent = Event & {
    prompt: () => void; // PWA quraşdırma dialoqunu göstərmək üçün metod
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>; // İstifadəçinin seçimini saxlayan promise
};

const PwaInstallPrompt = () => {
    const [isSupported, setIsSupported] = useState(false); // Brauzerin PWA dəstəyini idarə edən state
    const [isInstallable, setIsInstallable] = useState(false); // PWA quraşdırıla biləcəyini idarə edən state
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null); // PWA quraşdırma eventini saxlamaq üçün state
    const [showPopup, setShowPopup] = useState(
        typeof window !== "undefined" && Cookies.get("pwaDismissed") !== "true"
    ); // Popup-ın göstərilib-göstərilmədiyini idarə edir

    const t = useTranslations("header"); // Dil tərcümələri üçün 'next-intl' funksiyasını çağırır

    useEffect(() => {
        if (typeof window !== "undefined" && "serviceWorker" in navigator) {
            setIsSupported(true); // Əgər brauzer PWA dəstəkləyirsə, 'isSupported' state-ni 'true' edir
            const installEventListener = (event: Event) => {
                event.preventDefault(); // Default davranışın qarşısını alır
                setDeferredPrompt(event as BeforeInstallPromptEvent); // PWA quraşdırma eventini state-ə saxlayır
                setIsInstallable(true); // Quraşdırma mümkün olduğunu göstərən state-ni 'true' edir
            };
            window.addEventListener("beforeinstallprompt", installEventListener); // 'beforeinstallprompt' eventini dinləyir
            return () => {
                window.removeEventListener("beforeinstallprompt", installEventListener); // Təmizləmə funksiyası
            };
        }
    }, []);

    const handleInstall = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt(); // Quraşdırma dialoqunu açır
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    Cookies.set("pwaInstalled", "true", { expires: 365 }); // Əgər istifadəçi qəbul edibsə, kuki vasitəsilə saxlayır
                }
            });
            setShowPopup(false); // Popup-u bağlayır
        }
    };

    const handleCancel = () => {
        Cookies.set("pwaDismissed", "true", { expires: 365 }); // İstifadəçi popup-u bağlayıbsa, bunu kuki vasitəsilə saxlayır
        setShowPopup(false); // Popup-u bağlayır
    };

    const hasAlreadyInstalled =
        typeof window !== "undefined" && Cookies.get("pwaInstalled") === "true"; // Əgər tətbiq artıq quraşdırılıbsa, bunu yoxlayır

    return (
        <>
            {isSupported && !hasAlreadyInstalled && isInstallable && showPopup && ( // Popup göstərilmə şərtlərini yoxlayır
                <div className="fixed no-shadow top-1 right-5 ur:right-9 bg-white py-2 px-4 text-center shadow-md z-50 rounded-md">
                    <p className="text-myBlack mb-2 text-sm ur:text-base w-full">
                        {t("popupparagraph")} {/* Popup mətnini lokalizasiya edir */}
                    </p>
                    <div className="flex items-center gap-5 justify-end">
                        <button onClick={handleCancel}> {/* Popup-u bağlama düyməsi */}
                            <FaPlus className="text-xl ur:text-2xl text-red-600 rotate-[-45deg]" />
                        </button>
                        <button
                            onClick={handleInstall} // Quraşdırma düyməsi
                            className="text-sm ur:text-base border border-myBlack bg-myBlack hover:bg-white hover:text-myBlack py-[2px] px-2 text-white font-medium rounded-md"
                        >
                            {t("popupbutton")} {/* Quraşdır düyməsi mətnini lokalizasiya edir */}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PwaInstallPrompt; // Komponenti export edir
    `}/>

            <p className='font-bold text-myBlack text-xs ur:text-base py-2 '>5. PWA-nı Test Etmə</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Tətbiqinizi test etmək üçün <mark className="px-1">npm run build && npm run dev</mark> əmri işlədin:</p>
        </div>
    )
}
