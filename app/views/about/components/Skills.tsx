import React from 'react'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaReact, FaSass, FaVuejs } from 'react-icons/fa'
import { FaAnglesDown } from 'react-icons/fa6'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiJavascript, SiPrimefaces, SiRedux, SiShadcnui, SiTypescript, SiZod } from 'react-icons/si'

export default function Skills() {
    return (
        <div >
            <h1 className=' text-center text-myWhite text-2xl sm:text-[30px] lg:text-[40px] font-semibold light-shadow  animate-pulse'>Skills</h1>
            <div className=' w-full flex items-center justify-center'>
                <FaAnglesDown className='animate-bounce h-7 w-7 text-myWhite' />
            </div>
            <div className='relative w-full bg-myWhite flex flex-col  items-start justify-between p-6  my-10  border border-myBlack rounded-2xl'>
                <h2 className='text-myBlack text-xl sm:text-2xl w-full   font-semibold leading-none text-center mb-5 '> Technical Skills</h2>
                <div className=' flex flex-wrap gap-x-2 gap-y-3 my-1 border-b border-b-myYellow sm:border-none pb-3 sm:pb-0'>
                    <a href='https://www.w3schools.com/html/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue   rounded-[20px] border border-[#e4e4e7] text-[#E34F26] bg-white flex items-center gap-1 text-sm'>
                        <FaHtml5 /> HTML
                    </a>
                    <a href='https://www.w3schools.com/css/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border border-[#e4e4e7] text-[#1572B6] bg-white flex items-center gap-1 text-sm'>
                        <FaCss3 /> CSS
                    </a>
                    <a href='https://sass-lang.com/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border border-[#e4e4e7] text-[#CC6699] bg-white flex items-center gap-1 text-sm'>
                        <FaSass /> Sass
                    </a>
                    <a href='https://www.javascript.com/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border bg-[#FAC826]  flex items-center gap-1 text-sm'>
                        <SiJavascript /> JavaScript
                    </a>
                    <a href='https://www.typescriptlang.org/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border text-[#3178C6] bg-white flex items-center gap-1 text-sm'>
                        <SiTypescript /> TypeScript
                    </a>
                    <a href='https://react.dev/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue border border-[#e6f7ff]  rounded-[20px] text-[#087ea4] bg-[#e6f7ff] flex items-center gap-1 text-sm '>
                        <FaReact />
                        React
                    </a>
                    <a href='https://vuejs.org/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border  text-[#18181b]  flex items-center gap-1 text-sm '>
                        <FaVuejs className=' text-[#42b883]' />
                        Vue.js
                    </a>
                    <a href='https://nextjs.org/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border  text-[#000]  flex items-center gap-1 text-sm '>
                        <RiNextjsFill className=' text-[#000]' />
                        Next.js
                    </a>
                    <a href='https://tailwindcss.com/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border border-[#e4e4e7] text-[#18181b] bg-white flex items-center gap-1 text-sm'>
                        <RiTailwindCssFill className=' text-[#00bcff]' /> Tailwind
                    </a>
                    <a href='https://getbootstrap.com/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border border-[#e4e4e7] text-[#18181b] bg-white flex items-center gap-1 text-sm'>
                        <FaBootstrap className=' text-[#7952B3]' /> Bootstrap
                    </a>
                    <a href='https://ui.shadcn.com/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border border-[#e4e4e7] text-[#18181b] bg-white flex items-center gap-1 text-sm'>
                        <SiShadcnui /> Shadcn UI
                    </a>
                    <a href='https://ant.design/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border  text-[#000]  flex items-center gap-1 text-sm '>
                        <AiOutlineAntDesign className=' text-[#1677FF]' />
                        Ant Design UI
                    </a>
                    <a href='https://www.primefaces.org/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border  text-[#18181b]  flex items-center gap-1 text-sm '>
                        <SiPrimefaces className=' text-[#000]' />
                        Prime UI
                    </a>
                    <a href='https://github.com/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border  text-[#18181b]  flex items-center gap-1 text-sm '>
                        <FaGithub className=' text-[#181717 ]' />
                        Github
                    </a>
                    <a href='https://zustand-demo.pmnd.rs/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border border-[#8D6E63] bg-[#f4f4f5] text-[#8D6E63] flex items-center gap-1 text-sm'>
                        Zustand
                    </a>
                    <a href='https://redux-toolkit.js.org/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border text-[#18181b] bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        <SiRedux className=' text-[#764ABC]' /> Redux Toolkit
                    </a>
                    <a href='https://zod.dev/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border text-[#18181b] bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        <SiZod className=' text-[#3B82F6]' /> Zod
                    </a>
                    <a href='https://github.com/jquense/yup' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border text-[#18181b] bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #Yup
                    </a>
                    <a href='https://redux-toolkit.js.org/rtk-query/overview' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border text-[#18181b] bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #RTK Query
                    </a>
                    <a href='https://tanstack.com/query/latest' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border text-[#18181b] bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #React Query
                    </a>
                    <a href='https://swr.vercel.app/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border  text-[#18181b] bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #SWR
                    </a>
                    <a href='https://react-hook-form.com/' target='_blank' className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border  text-[#18181b] bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #React Hook Form
                    </a>
                </div>
                <h2 className='text-myBlack text-xl sm:text-2xl w-full   font-semibold leading-none text-center mt-10 mb-5 sm:my-5 '> Soft Skills</h2>
                <div className=' flex flex-wrap gap-x-2 gap-y-3 my-1'>
                    <a className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border text-myBlue bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #Adaptability
                    </a>
                    <a className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border text-myBlue bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #Attention to Detail
                    </a>
                    <a className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border text-myBlue bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #Creativity
                    </a>
                    <a className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border text-myBlue bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #Teamwork
                    </a>
                    <a className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border text-myBlue bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #Problem Solving
                    </a>
                    <a className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border  text-myBlue bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #Communication
                    </a>
                    <a className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border  text-myBlue bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #Continuous Learning
                    </a>
                    <a className=' py-1.5 px-3  hover:border-myBlue  rounded-[20px] border  text-myBlue bg-[#f4f4f5] flex items-center gap-1 text-sm'>
                        #Lidership
                    </a>

                </div>
                <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[100.9%] rounded-3xl pt-[2px] pl-[2px] rounded-br-3xl bg-black   xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] '>
                </div>
            </div>
        </div>
    )
}
