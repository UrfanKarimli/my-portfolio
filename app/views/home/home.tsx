"use client";

import { useRef, useState } from "react";
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import Banner from "./components/Banner";
import DataPark from "./components/DataPark";
import TapAz from "./components/TapAz";
import VueCommerce from "./components/VueCommerce";
import VueDashboard from "./components/VueDashboard";
import BlankSpace from "./components/BlankSpace";

export default function HomePage() {
    const carouselRef = useRef<CarouselRef>(null);
    const [isScrolling, setIsScrolling] = useState(false);
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
        <div className="z-20 sticky bottom-0 px-5 " >
            <div className=" hidden lg:block " onWheel={handleScroll}>
                <Carousel
                    ref={carouselRef}
                    className="w-full h-[90vh]"
                    speed={1000}
                    infinite={false}
                >
                    <div className="h-[90vh] w-full flex items-center justify-center lg:px-9 ">
                        <Banner />
                    </div>
                    <div className="h-[90vh] flex items-center justify-center lg:px-9">
                        <DataPark />
                    </div>
                    <div className="h-[90vh] flex items-center justify-center lg:px-9 ">
                        <TapAz />
                    </div>
                    <div className="h-[90vh] flex items-center justify-center lg:px-9">
                        <BlankSpace />
                    </div>
                    <div className="h-[90vh] flex items-center justify-center lg:px-9 ">
                        <VueDashboard />
                    </div>
                    <div className="h-[90vh] flex items-center justify-center lg:px-9 ">
                        <VueCommerce />
                    </div>
                </Carousel>
            </div>
            <div className=" lg:hidden">
                <div className=" h-[40vh] sm:h-[50vh] ur:h-[70vh] w-full flex items-center justify-center ">
                    <Banner />
                </div>
                <DataPark />
                <TapAz />
                <BlankSpace />
                <VueDashboard />
                <VueCommerce />
            </div>
        </div>
    );
}
