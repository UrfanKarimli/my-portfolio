import { FaCss3, FaGithub, FaHtml5, FaReact, FaSass, FaVuejs } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

export default function Spinner() {
    return (
        <div className=" fixed left-0 top-0 bg-opacity-20 bg-myBlue backdrop-blur-sm w-full h-full flex items-center justify-center">
            <div style={{ animationDuration: "2s" }} className="animate-spin relative w-20 h-20  rounded-full flex items-center justify-center ">
                {[
                    { Component: FaHtml5, color: "#E34F26" }, // HTML
                    { Component: FaCss3, color: "#1572B6" }, // CSS
                    { Component: FaGithub, color: "#181717" }, // GitHub
                    { Component: FaReact, color: "#61DAFB" }, // React
                    { Component: FaSass, color: "#CC6699" }, // Sass
                    { Component: FaVuejs, color: "#42B883" }, // Vue.js
                    { Component: RiNextjsFill, color: "#000000" }, // Next.js
                    { Component: RiTailwindCssFill, color: "#06B6D4" }, // Tailwind CSS
                    { Component: RiJavascriptLine, color: "#F7DF1E" }, // JavaScript
                    { Component: TbBrandTypescript, color: "#3178C6" } // TypeScript
                ].map(({ Component, color }, index) => {
                    const angle = (index * 360) / 10; // Hər bir ikonun bucağı
                    const radius = 35; // Mərkəzdən olan məsafə
                    const x = radius * Math.cos((angle * Math.PI) / 180); // X koordinatı
                    const y = radius * Math.sin((angle * Math.PI) / 180); // Y koordinatı
                    return (
                        <Component
                            key={index}
                            className="absolute text-xl "
                            style={{
                                transform: `translate(${x}px, ${y}px)`,
                                color: color, // Hər ikonun rəngi
                            }}
                        />
                    );
                })}
            </div>
        </div>
    )
}
