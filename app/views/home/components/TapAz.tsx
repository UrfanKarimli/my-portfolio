import Image from 'next/image'
import React from 'react'
import { FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiJavascript, SiShadcnui } from 'react-icons/si'

export default function TapAz() {
    return (
        <div className='relative w-full bg-myWhite flex flex-col-reverse lg:flex-row items-center justify-between p-6  my-10  border border-myBlack rounded-2xl'>
            <div className=' lg:basis-[49%] mt-4 lg:mt-0  flex flex-col gap-5'>
                <h2 className='text-[#ff4f08] text-2xl sm:text-[30px] lg:text-[40px]  font-semibold leading-none'>Tap.az <sub>(copy)</sub></h2>
                <p className='text-sm sm:text-base text-myBlack '>The main objective of this project is to gain practical experience with React.js technologies and become familiar with modern frontend tools.
                    Since no backend is used in this project, static data is stored in JavaScript files to ensure proper functionality in the Vercel environment.
                </p>
                <div className=' flex flex-wrap gap-2 my-1'>
                    <span className=' py-1.5 px-3  rounded-[20px] text-[#087ea4] bg-[#e6f7ff] flex items-center gap-1 text-sm '>
                        <FaReact />
                        React
                    </span>
                    <span className=' py-1.5 px-3  rounded-[20px] border border-[#e4e4e7] text-[#18181b] bg-white flex items-center gap-1 text-sm'>
                        <SiShadcnui /> Shadcn
                    </span>
                    <span className=' py-1.5 px-3  rounded-[20px] border border-[#e4e4e7] text-[#18181b] bg-white flex items-center gap-1 text-sm'>
                        <RiTailwindCssFill className=' text-[#00bcff]' /> Tailwind
                    </span>
                    <span className=' py-1.5 px-3  rounded-[20px] border bg-[#FAC826]  flex items-center gap-1 text-sm'>
                        <SiJavascript /> JavaScript
                    </span>
                </div>
            </div>
            <div className=' w-full lg:basis-[49%] rounded-md overflow-hidden'>
                <a href={`https://tapaz-blush.vercel.app/`} target='_blank' className=' h-full w-full'>
                    <Image src={'/TapAz.png'} alt="" width={750} height={535} className='  w-full h-full object-cover object-center transition transform duration-300 ease-in-out hover:scale-105' />
                </a>
            </div>
            <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[100.9%] rounded-3xl pt-[2px] pl-[2px] rounded-br-3xl bg-black   xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] '>

            </div>
        </div>
    )
}
