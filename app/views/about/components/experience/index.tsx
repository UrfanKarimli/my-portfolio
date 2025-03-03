import { useTranslations } from 'next-intl'
import { FaAnglesDown } from 'react-icons/fa6'

export default function Experience() {
        const t = useTranslations("about")
    
    return (
        <div >
            <h2 className=' text-center text-myWhite text-2xl sm:text-[30px] lg:text-[40px]  font-semibold light-shadow  animate-pulse'>{t("experience")} </h2>
            <div className=' w-full flex items-center justify-center mt-2'>
                <FaAnglesDown className='animate-bounce h-7 w-7 text-myWhite' />
            </div>
            <div className='relative w-full bg-myWhite flex flex-col gap-4  items-center  p-6  py-16 my-10  border border-myBlack rounded-2xl'>
                <div className=' md:w-[560px] flex flex-col items-start gap-1'>
                    <h3 className=' flex flex-wrap text-xl ur:text-2xl text-myBlack font-bold'>Front-End Developer  <span className=' text-myBlack shadow-none ml-1 '>  @QSS Analytics</span></h3>
                    <span className='text-xs sm:text-base text-[#1b1b1bbf]'>04/2024 - 12/2024 | {t("baku")},
                    {t("azerbaijan")}
                    </span>
                    <span className='text-myBlack'>{t("achivement")}</span>
                    <div className='text-myBlack ml-5 text-sm sm:text-base'>
                        <ul>
                            <li className=' list-disc'>{t("qssjobrow1")}</li>
                            <li className=' list-disc'> {t("qssjobrow2")}</li>
                            <li className=' list-disc'>{t("qssjobrow3")}</li>
                        </ul>
                    </div>
                </div>
                <div className=' md:w-[560px] flex flex-col items-start gap-1'>
                    <h3 className=' flex flex-wrap text-xl ur:text-2xl font-bold text-myBlack'>Front-End Developer Intern<span className=' text-myBlack ml-1'>@QSS Analytics</span></h3>
                    <span className='text-xs sm:text-base text-[#1b1b1bbf]'>01/2024 - 04/2024 | {t("baku")},
                    {t("azerbaijan")}
                    </span>
                    <span className='text-myBlack'>{t("achivement")}</span>
                    <div className=' ml-5 text-sm sm:text-base text-myBlack'>
                        <ul>
                            <li className=' list-disc'>{t("qssjobrow4")} </li>
                            <li className=' list-disc'> {t("qssjobrow5")}</li>
                            <li className=' list-disc'> {t("qssjobrow6")}</li>
                        </ul>
                    </div>
                </div>
                <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[100.9%] rounded-3xl pt-[2px] pl-[2px] rounded-br-3xl bg-black   xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] '>
                </div>
            </div>
        </div>
    )
}
