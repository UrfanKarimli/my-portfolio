"use client";

import { useRef, useState } from "react";
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { motion, useInView } from "framer-motion"
import Landing from "./components/landing";
import DataPark from "./components/data-park";
import TapAz from "./components/tap-az";
import VueCommerce from "./components/vue-commerce";
import VueDashboard from "./components/vue-dashboard";
import BlankSpace from "./components/blank-space";


export default function HomePage() {
    const carouselRef = useRef<CarouselRef>(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)
    const ref7 = useRef(null)
    const ref8 = useRef(null)
    const ref9 = useRef(null)
    const ref10 = useRef(null)
    const ref11 = useRef(null)
    const inView2 = useInView(ref2)
    const inView3 = useInView(ref3)
    const inView4 = useInView(ref4)
    const inView5 = useInView(ref5)
    const inView6 = useInView(ref6)
    const inView7 = useInView(ref7)
    const inView8 = useInView(ref8)
    const inView9 = useInView(ref9)
    const inView10 = useInView(ref10)
    const inView11 = useInView(ref11)

    const scrollSensitivity = 50;

    const handleScroll = (event: React.WheelEvent) => {
        if (!carouselRef.current || isScrolling) return;


        if (Math.abs(event.deltaY) < scrollSensitivity) return;

        setIsScrolling(true);
        if (event.deltaY > 0) {
            carouselRef.current.next();
        } else {
            carouselRef.current.prev();
        }
        setTimeout(() => {
            setIsScrolling(false);
        }, 1000);
    };


    return (
        <div className=" px-5 " >
            <div className=" hidden lg:block " onWheel={handleScroll}>
                <Carousel
                    ref={carouselRef}
                    className="w-full "
                    speed={1000}
                    infinite={false}
                >
                    <div className="h-[90vh] w-full flex items-center justify-center lg:px-9 overflow-y-hidden ">
                        
                        <Landing />
                    </div>
                    <div className="h-[90vh] lg:px-9 overflow-x-hidden">
                        <motion.div
                            ref={ref2}
                            initial={{ rotateX: 180, rotateY: 180 }}
                            animate={inView2 ? { rotateX: 0, rotateY: 0 } : { rotateX: 180, rotateY: 180 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className="h-full flex items-center justify-center"
                        >
                            <DataPark />
                        </motion.div>
                    </div>
                    <div className="h-[90vh] lg:px-9 overflow-x-hidden">
                        <motion.div
                            ref={ref3}
                            initial={{ rotateY: 180 }}
                            animate={inView3 ? { rotateY: 0 } : { rotateY: 180 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className="h-full flex items-center justify-center"
                        >
                            <TapAz />
                        </motion.div>
                    </div>
                    <div className="h-[90vh] lg:px-9 overflow-x-hidden">
                        <motion.div
                            ref={ref4}
                            initial={{ rotateX: 180 }}
                            animate={inView4 ? { rotateX: 0 } : { rotateX: 180 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className="h-full flex items-center justify-center"
                        >
                            <BlankSpace />
                        </motion.div>
                    </div>
                    <div className="h-[90vh] lg:px-9 overflow-x-hidden ">
                        <motion.div
                            ref={ref5}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={inView5 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{ duration: 1, }}
                            viewport={{ once: false }}
                            className="h-full flex items-center justify-center"
                        >
                            <VueDashboard />
                        </motion.div>
                    </div>
                    <div className="h-[90vh] lg:px-9 overflow-x-hidden">
                        <motion.div
                            ref={ref6}
                            initial={{ rotate: -45 }}
                            animate={inView6 ? { rotate: 0 } : { rotate: -45 }}
                            transition={{ duration: 0.5, }}
                            viewport={{ once: false }}
                            className="h-full flex items-center justify-center"
                        >
                            <VueCommerce />
                        </motion.div>
                    </div>
                </Carousel>
            </div>
            <div className=" lg:hidden overflow-x-hidden">
                <div className=" h-[40vh] sm:h-[50vh] ur:h-[70vh] w-full flex items-center justify-center ">
                    <Landing />
                </div>
                <motion.div
                    ref={ref7}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={inView7 ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="pr-5"
                >
                    <DataPark />
                </motion.div>
                <motion.div
                    ref={ref8}
                    initial={{ x: 300, opacity: 0 }}
                    animate={inView8 ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="pr-5"
                >
                    <TapAz />
                </motion.div>
                <motion.div
                    ref={ref9}
                    initial={{ x: -300, opacity: 0 }}
                    animate={inView9 ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="pr-5"
                >
                    <BlankSpace />
                </motion.div>
                <motion.div
                    ref={ref10}
                    initial={{ scaleX: 0.2, opacity: 0 }}
                    animate={inView10 ? { scaleX: 1, opacity: 1 } : { scaleX: 0.2, opacity: 0 }}
                    transition={{ duration: 1, bounce: 0.3, delay: 0.6 }}
                    viewport={{ once: false }}
                    className="pr-5"
                >
                    <VueDashboard />
                </motion.div>
                <motion.div
                    ref={ref11}
                    initial={{ scaleY: 0.2, opacity: 0 }}
                    animate={inView11 ? { scaleY: 1, opacity: 1 } : { scaleY: 0.2, opacity: 0 }}
                    transition={{ duration: 1 , bounce: 0.1,  delay: 0.4 }}
                    viewport={{ once: false }}
                    className="pr-5"
                >
                    <VueCommerce />
                </motion.div>
                
            </div>
        </div>
    );
}
