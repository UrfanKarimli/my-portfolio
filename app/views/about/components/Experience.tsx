import { FaAnglesDown } from 'react-icons/fa6'

export default function Experience() {
    return (
        <div >
            <h1 className=' text-center text-myWhite text-2xl sm:text-[30px] lg:text-[40px]  font-semibold light-shadow  animate-pulse'>Work Experience</h1>
            <div className=' w-full flex items-center justify-center'>
                <FaAnglesDown className='animate-bounce h-7 w-7 text-myWhite' />
            </div>
            <div className='relative w-full bg-myWhite flex flex-col gap-4  items-center  p-6  py-16 my-10  border border-myBlack rounded-2xl'>
                <div className=' md:w-[560px] flex flex-col items-start gap-1'>
                    <h3 className=' flex flex-wrap text-xl ur:text-2xl text-myBlack font-bold'>Front-End Developer  <span className=' text-myBlack shadow-none ml-1 '>  @QSS Analytics</span></h3>
                    <span className='text-xs sm:text-base text-[#1b1b1bbf]'>04/2024 - 12/2024 | Baku, Azerbaijan
                    </span>
                    <span className='text-myBlack'>Achievements/Tasks</span>
                    <div className='text-myBlack ml-5 text-sm sm:text-base'>
                        <ul>
                            <li className=' list-disc'>Review colleagues&apos; codes and provide feedback to improve
                                code quality</li>
                            <li className=' list-disc'> Code optimization and debugging to ensure performance on
                                different devices and browsers</li>
                            <li className=' list-disc'> Efficient development of components for optimization of
                                components and maximum performance.</li>
                        </ul>
                    </div>
                </div>
                <div className=' md:w-[560px] flex flex-col items-start gap-1'>
                    <h3 className=' flex flex-wrap text-xl ur:text-2xl font-bold text-myBlack'>Front-End Developer Intern<span className=' text-myBlack ml-1'>@QSS Analytics</span></h3>
                    <span className='text-xs sm:text-base text-[#1b1b1bbf]'>01/2024 - 04/2024 | Baku, Azerbaijan
                    </span>
                    <span className='text-myBlack'>Achievements/Tasks</span>
                    <div className=' ml-5 text-sm sm:text-base text-myBlack'>
                        <ul>
                            <li className=' list-disc'>Optimizing and developing the architectural design
                                according to the requirements of the projects. </li>
                            <li className=' list-disc'> Continuously improve the front-end architecture.</li>
                            <li className=' list-disc'> Build well-designed and high-quality front-end systems using
                                React.js and other libraries.</li>
                        </ul>
                    </div>
                </div>
                <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[100.9%] rounded-3xl pt-[2px] pl-[2px] rounded-br-3xl bg-black   xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] '>
                </div>
            </div>
        </div>
    )
}
