import React from 'react'
import { FaGraduationCap, FaUser } from 'react-icons/fa'
import { FaAnglesDown } from 'react-icons/fa6'

export default function Education() {
    return (
        <div >
            <h1 className=' text-center text-myWhite text-2xl sm:text-[30px] lg:text-[40px]  font-semibold light-shadow  animate-pulse'>Education</h1>
            <div className=' w-full flex items-center justify-center'>
                <FaAnglesDown className='animate-bounce h-7 w-7 text-myWhite' />
            </div>
            <div className='relative w-full bg-myWhite  flex justify-center  p-6  py-16 my-10  border border-myBlack rounded-2xl'>

                <div className='relative w-full md:w-[560px] flex flex-col gap-4  items-center'>
                    <div className='hidden  absolute md:-left-24 right-0  ur:flex flex-col'>
                        <FaGraduationCap className=' h-20 w-20 animate-bounce text-myBlack' />
                        <FaUser className=' -translate-y-6 h-24 w-20 text-myBlack' />
                    </div>
                    <div className=' w-full flex flex-col items-start '>
                        <h3 className='text-xl   sm:text-2xl font-bold text-myBlack'>Front-End Development </h3>
                        <h4 className=' text-lg sm:text-xl font-semibold text-myBlack'> Ingress Academy </h4>
                        <span className=' text-xs sm:text-base text-[#1b1b1bbf]'>07/2023 - 12/2023 | Baku, Azerbaijan
                        </span>
                    </div>
                    <div className=' w-full  flex flex-col items-start '>
                        <h3 className='  text-xl   sm:text-2xl font-bold text-myBlack  '>Economy </h3>
                        <h4 className=' text-lg sm:text-xl font-semibold text-myBlack'> Azerbaijan State University of Economics </h4>
                        <span className='text-xs sm:text-base text-[#1b1b1bbf]'>09/2014 - 06/2018 | Baku, Azerbaijan
                        </span>
                        <span>Bachelor degree</span>
                    </div>
                </div>

                <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[100.9%] rounded-3xl pt-[2px] pl-[2px] rounded-br-3xl bg-black   xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] '>
                </div>
            </div>
        </div>
    )
}
