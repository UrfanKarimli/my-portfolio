'use client';

import { useRouter } from 'next/navigation';
import { useTransition, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Spinner from '../spinner/Spinner';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { useTranslations } from 'next-intl';

export default function LocaleSwitcher() {
    const t = useTranslations("landing")
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const [localeActive, setLocaleActive] = useState('az');

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

        <div className=' flex flex-col ur:flex-row  items-center gap-4'>
            <div>
                {
                    localeActive === 'az' ? (
                        <a className=' ur:animate-pulse ur:text-sm  ur:border border-myBlack ur:bg-myBlack ur:hover:bg-white ur:hover:text-myBlack ur:py-[2px] ur:px-2 text-white font-medium  flex items-center gap-2 rounded-lg '
                            download={'Urfan-Karimli-az.pdf'} href="/Urfan-Karimli-az.pdf">
                            {t("resume")}
                            <FiExternalLink />
                        </a>)
                        : (
                            <a className=' ur:animate-pulse ur:text-sm  ur:border border-myBlack ur:bg-myBlack ur:hover:bg-white ur:hover:text-myBlack ur:py-[2px] ur:px-2 text-white font-medium  flex items-center gap-2 rounded-lg  '
                                download={'Urfan-Karimli-eng.pdf'} href="/Urfan-Karimli-eng.pdf">
                                {t("resume")}
                                <FiExternalLink />
                            </a>)
                }
            </div>
            <div className=' relative w-5 h-5'>
                {
                    localeActive === 'az' ?
                        (
                            <button onClick={() => onSelectChange('en')} className=' absolute' >
                                <Image src={`/united-kingdom.png`} alt={`flag`} height={20} width={20} />
                            </button>
                        ) : (
                            <button onClick={() => onSelectChange('az')} className=' absolute'>
                                <Image src={`/azerbaijan.png`} alt={`flagg`} height={25} width={25} />
                            </button>
                        )
                }

            </div>
        </div>
    );
}
