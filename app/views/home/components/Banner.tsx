import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

export default function Banner() {
    return (
        <section id='home'>
            <div
                className='  lg:h-[90vh] w-full '>
                <div className=" w-full h-full flex items-center justify-between">
                    <div className=' flex flex-col gap-2 items-start'>
                        <h2 className='text-2xl sm:text-[35px] lg:text-[45px] font-light leading-none  text-myWhite font-roboto light-shadow'>Hello I`am</h2>
                        <h1 className='text-4xl sm:text-[55px] lg:text-[80px] font-normal leading-none  text-myWhite font-roboto light-shadow'>Urfan Karimli</h1>
                        <h2 className='text-2xl sm:text-[35px] lg:text-[45px] font-light leading-none  text-myWhite font-roboto light-shadow'>Front-end Developer</h2>
                        <a className='  mt-8  sm:text-[26px] border border-myBlack bg-myBlack hover:bg-white hover:text-myBlack py-1 px-3 text-white  flex items-center gap-2 rounded-lg '
                            download={'Resume.pdf'} href="/Urfan-Karimli-eng.pdf">Download Resume <FiExternalLink /></a>
                    </div>
                    <div className="  relative">
                        <div className="hidden lg:block absolute  top-0 right-0 rounded-lg border-[8px] border-myWhite   h-[200px] w-[300px] overflow-hidden object-center object-cover">
                            <Image src="/bannerimg1.jpeg" width={300} height={200} alt="Urfan Karimli" />

                        </div>
                        <div className="hidden lg:block absolute bottom-2 right-2 rounded-lg border-[8px] border-myWhite h-[200px] w-[160px] overflow-hidden object-center object-cover">
                            <Image src="/bannerimg4.jpeg" width={300} height={400} alt="Urfan Karimli" />

                        </div>
                        <div className="hidden lg:block absolute bottom-10 right-36 rounded-lg border-[8px] border-myWhite h-[200px] w-[200px] overflow-hidden object-center object-cover" >
                            <Image src="/bannerimg3.jpeg" width={300} height={400} alt="Urfan Karimli" />

                        </div>
                        <div className="hidden lg:block absolute -bottom-28 right-52 rounded-lg border-[8px] border-myWhite h-[200px] w-[160px] overflow-hidden object-center object-cover" >
                            <Image src="/bannerimg2.jpeg" width={300} height={400} alt="Urfan Karimli" className=" scale-[2]" />

                        </div>



                    </div>
                </div>
            </div>
        </section>
    )
}

