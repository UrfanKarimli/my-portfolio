import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Framer() {
    const ref1 = useRef(null)
    const inView1 = useInView(ref1)

    return (
        <div>
            <motion.div
                ref={ref1}
                initial={{ rotateX: 180, rotateY: 180 }}
                animate={inView1 ? { rotateX: 0, rotateY: 0 } : { rotateX: 180, rotateY: 180 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="h-full flex items-center justify-center"
            >
                <div className=" bg-myYellow h-10 w-10 flex items-center justify-center text-[8px] text-white" ></div>
            </motion.div>
        </div>
    )
}
