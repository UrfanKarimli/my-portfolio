import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'


export default function Biographi() {
    const t = useTranslations("about")
    return (
        <div className='relative w-full bg-myWhite flex flex-col-reverse items-center ur:flex-row ur:items-start justify-between p-6  my-10  border border-myBlack rounded-2xl'>
            <div className=' basis-[60%] flex flex-col  gap-5'>
                <h2 className='text-myBlack text-2xl md:text-[40px]  font-semibold leading-none text-center'>{t("aboutme")}</h2>
                <p className='text-sm sm:text-base text-myBlack '>
                {t("description")}</p>
            </div>
            <div className=' md:basis-[30%] rounded-full ur:rounded-md overflow-hidden'>
                <a href={`https://github.com/UrfanKarimli`} target='_blank' className=' ur:h-[300px] w-full  overflow-hidden'>
                    <Image src={'/me.jpeg'} alt="" width={400} height={335} className='w-[150px] h-[150px]  ur:w-full ur:h-[300px] object-cover object-top scale-125 transition transform duration-300 ease-in-out hover:scale-100' />
                </a>
            </div>
            <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[100.9%] rounded-3xl pt-[2px] pl-[2px] rounded-br-3xl bg-black   xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] '>

            </div>
        </div>
    )
}
