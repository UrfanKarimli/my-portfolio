import Image from 'next/image'
import { FaVuejs } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiJavascript, SiPrimefaces, } from 'react-icons/si'

export default function VueCommerce() {
    return (
        <div className='relative w-full bg-[#f5f5f5] flex flex-col lg:flex-row items-center justify-between p-6  my-10  border border-[#1b1b1b] rounded-2xl'>
            <div className=' basis-[49%] rounded-md overflow-hidden'>
                <a href={`https://data-park-demo.vercel.app/`} target='_blank' className=' h-full w-full'>
                    <Image src={'/VueCommerce.png'} alt="" width={750} height={535} className='  w-full h-full object-cover object-center transition transform duration-300 ease-in-out hover:scale-105' />
                </a>
            </div>
            <div className=' basis-[49%]  flex flex-col gap-5'>
                <h2 className=' text-[40px]   text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 font-bold font-poppins'>Vue Commerce</h2>
                <p className=' text-[#030712]'>
                    Created for the purpose of learning Vue.js
                </p>
                <div className=' flex flex-wrap gap-2'>
                    <span className=' py-1.5 px-3  rounded-[20px] border  text-[#18181b]  flex items-center gap-1 text-sm '>
                        <FaVuejs className=' text-[#42b883]' />
                        Vue.js
                    </span>
                    <span className=' py-1.5 px-3  rounded-[20px] border  text-[#18181b]  flex items-center gap-1 text-sm '>
                        <SiPrimefaces className=' text-[#42b883]' />
                        Prime UI
                    </span>
                    <span className=' py-1.5 px-3  rounded-[20px] border border-[#e4e4e7] text-[#18181b] bg-white flex items-center gap-1 text-sm'>
                        <RiTailwindCssFill className=' text-[#00bcff]' /> Tailwind css
                    </span>
                    <span className=' py-1.5 px-3  rounded-[20px] border bg-[#FAC826]  flex items-center gap-1 text-sm'>
                        <SiJavascript /> JavaScript
                    </span>
                    <span className=' py-1.5 px-3  rounded-[20px] border bg-[#8D6E63] text-white flex items-center gap-1 text-sm'>
                        Zustand
                    </span>

                </div>
            </div>
            <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[100.9%] rounded-3xl pt-[2px] pl-[2px] rounded-br-3xl bg-black   xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] '>

            </div>
        </div>
    )
}
