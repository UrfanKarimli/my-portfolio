import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiShadcnui, SiTypescript } from 'react-icons/si'



export default function DataPark() {
            const t = useTranslations("landing")
    
    return (
        <div className='relative w-full bg-myWhite flex flex-col lg:flex-row items-center justify-between p-6  my-10  border border-myBlack rounded-2xl'>
            <div className='w-full lg:basis-[49%] rounded-md overflow-hidden'>
                <a href={`https://data-park-demo.vercel.app/`} target='_blank' className=' h-full w-full  '>
                    <Image src={'/datapark.png'} alt="" width={750} height={535} className='  w-full h-full  object-cover object-center transition transform duration-300 ease-in-out hover:scale-105' />
                </a>
            </div>
            <div className=' lg:basis-[49%] mt-4 lg:mt-0  flex flex-col gap-2'>
                <h2 className='text-[#f7941d] text-2xl sm:text-[30px] lg:text-[40px]  font-semibold'>Data park</h2>
                <p className='text-sm sm:text-base text-[#355474]'>
                    {t("dataparkp")}
                </p>
                <div className='text-sm sm:text-base flex flex-wrap gap-2'>
                    <span className=' py-1.5 px-3  rounded-[20px] text-[#087ea4] bg-[#e6f7ff] flex items-center gap-1 text-sm '>
                        <FaReact />
                        React.js
                    </span>
                    <span className=' py-1.5 px-3  rounded-[20px] border border-[#e4e4e7] text-[#18181b] bg-white flex items-center gap-1 text-sm'>
                        <SiShadcnui /> Shadcn UI
                    </span>
                    <span className=' py-1.5 px-3  rounded-[20px] border border-[#e4e4e7] text-[#18181b] bg-white flex items-center gap-1 text-sm'>
                        <RiTailwindCssFill className=' text-[#00bcff]' /> Tailwind css
                    </span>
                    <span className=' py-1.5 px-3  rounded-[20px] border text-[#3178C6] bg-white flex items-center gap-1 text-sm'>
                        <SiTypescript /> TypeScript
                    </span>
                    <span className=' py-1.5 px-3  rounded-[20px] border bg-[#8D6E63] text-white flex items-center gap-1 text-sm'>
                        Zustand
                    </span>
                    <span className=' py-1.5 px-3  rounded-[20px] border text-[#18181b] bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #Zod
                    </span>
                    <span className=' py-1.5 px-3  rounded-[20px] border  text-[#18181b] bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #SWR
                    </span>
                    <span className=' py-1.5 px-3  rounded-[20px] border  text-[#18181b] bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #React Hook Form
                    </span>
                </div>
            </div>
            <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[100.9%] rounded-3xl pt-[2px] pl-[2px] rounded-br-3xl bg-black   xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] '>

            </div>
        </div>
    )
}
