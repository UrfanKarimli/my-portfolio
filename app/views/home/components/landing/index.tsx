import Image from "next/image";
import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function Landing() {
    const t = useTranslations("landing")
    const a = useTranslations("about")
    const ref1 = useRef(null)
    const inView1 = useInView(ref1)


    return (
        <section
            ref={ref1}
        >
            <div
                className='  lg:h-[90vh] w-full '>
                <div className=" relative w-full h-full flex items-center justify-between">
                    <span className="hidden lg:flex flex-col items-center gap-3 absolute left-1/2 bottom-6 z-40 -translate-x-1/2 ">
                        <h2 className=' text-center text-myWhite text-2xl  font-semibold light-shadow  animate-pulse'>{t("projects")}</h2>
                        <motion.div
                            initial={{ rotate: 2, }}
                            animate={{ rotate: -90, }}
                            transition={{ duration: 1.6, repeat: Infinity, repeatType: "reverse", }}
                            viewport={{ once: true }}
                            className=""
                        >
                            <FaAnglesDown className="  h-8 w-8 text-myWhite drop-shadow-[0_4px_10px_rgba(255,255,255,0.6)]" />
                        </motion.div>
                    </span>
                    <div className=' flex flex-col gap-2 items-start'>
                        <motion.div
                            initial={{ scale: 0.4, opacity: 0 }}
                            animate={inView1 ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0 }}
                            transition={{ duration: 0.3, bounce: 0.1, delay: 0 }}
                            viewport={{ once: false }}
                        >
                            <h2 className='text-2xl ur:text-[35px] lg:text-[45px] font-light leading-none  text-myWhite font-roboto light-shadow'> {t("title")}</h2>
                        </motion.div>
                        <motion.div
                            initial={{ x: -300, opacity: 0 }}
                            animate={inView1 ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
                            transition={{ duration: 0.5, bounce: 0.1, delay: 0.2 }}
                            viewport={{ once: false }}
                        >
                            <h1 className='text-4xl ur:text-[55px] lg:text-[80px] font-normal leading-none  text-myWhite font-roboto light-shadow'>{t("name")}</h1>
                        </motion.div>
                        <motion.div
                            initial={{ x: 500, opacity: 0 }}
                            animate={inView1 ? { x: 0, opacity: 1 } : { x: 500, opacity: 0 }}
                            transition={{ duration: 0.2, bounce: 0.1, delay: 0.6 }}
                            viewport={{ once: false }}
                        >
                            <h2 className='text-2xl ur:text-[35px] lg:text-[45px] font-light leading-none  text-myWhite font-roboto light-shadow'>Front-end Developer</h2>
                        </motion.div>
                    </div>

                    <div className="hidden lg:block  relative">
                        <motion.div
                            initial={{ rotateX: 90 }}
                            animate={inView1 ? { rotateX: 0 } : { rotateX: 90 }}
                            transition={{ duration: 1, bounce: 0.1, delay: 0 }}
                            style={{ transformOrigin: "bottom" }}
                            viewport={{ once: false }}
                            className=" absolute top-0 right-0 rounded-lg border-[8px] border-myWhite   h-[200px] w-[300px] overflow-hidden object-center object-cover"
                        >
                            <Image src="/bannerimg1.jpeg" width={300} height={200} alt="Urfan Karimli" />
                        </motion.div>
                        <motion.div
                            initial={{ rotateY: 90 }}
                            animate={inView1 ? { rotateY: 0 } : { rotateY: 90 }}
                            transition={{ duration: 1, bounce: 0.1, delay: 0.5 }}
                            style={{ transformOrigin: "right" }}
                            viewport={{ once: false }}
                            className=" absolute bottom-2 right-2 rounded-lg border-[8px] border-myWhite h-[200px] w-[160px] overflow-hidden object-center object-cover"
                        >
                            <Image src="/bannerimg4.jpeg" width={300} height={400} alt="Urfan Karimli" />
                        </motion.div>
                        <motion.div
                            initial={{ rotateX: 90 }}
                            animate={inView1 ? { rotateX: 0 } : { rotateX: 90 }}
                            transition={{ duration: 1, bounce: 0.1, delay: 0.8 }}
                            style={{ transformOrigin: "top" }}
                            viewport={{ once: false }}
                            className="absolute bottom-10 right-36 rounded-lg border-[8px] border-myWhite h-[200px] w-[200px] overflow-hidden object-center object-cover"
                        >
                            <Image src="/bannerimg3.jpeg" width={300} height={400} alt="Urfan Karimli" />
                        </motion.div>
                        <motion.div
                            initial={{ rotateY: 90 }}
                            animate={inView1 ? { rotateY: 0 } : { rotateY: 90 }}
                            transition={{ duration: 1, bounce: 0.1, delay: 1 }}
                            style={{ transformOrigin: "left" }}
                            viewport={{ once: false }}
                            className=" absolute -bottom-28 right-52 rounded-lg border-[8px] border-myWhite h-[200px] w-[160px] overflow-hidden object-center object-cover"
                        >
                            <Image src="/bannerimg2.jpeg" width={300} height={400} alt="Urfan Karimli" className=" scale-[2]" />
                        </motion.div>
                    </div>
                </div>
                <p className='hidden opacity-0 invisible'>
                    {a("description")}</p>
            </div>
        </section>
    )
}

