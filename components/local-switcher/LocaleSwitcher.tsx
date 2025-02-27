'use client';

import { useRouter } from 'next/navigation';
import {  useTransition, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Spinner from '../spinner/Spinner';
import Image from 'next/image';

export default function LocaleSwitcher() {
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



    if(isPending){
        return <Spinner />
    }




    return (
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

    );
}
