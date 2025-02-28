import React, {  useState } from 'react'
import { motion } from "framer-motion"

import { FaPlus } from 'react-icons/fa6';

interface ExpandedState {
    [key: number]: boolean
}

type TQuestion = {
    id: number
    question: string
    answer: string
}
export default function List(item: TQuestion) {
    const [expanded, setExpanded] = useState<ExpandedState>({})
    const handleLinkClick = (id: number) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
    };
    return (
        <li
            key={item.id}
            onClick={() => handleLinkClick(item.id)}
            className=' first:border-t  first:border-t-myBlue py-1 border-b border-b-myBlue relative cursor-pointer pr-8 overflow-hidden'>
            <div style={{ textShadow: 'none' }} className=' w-full text-myBlack overflow-x-hidden line-clamp-1 '>
                {item.id}. {item.question}
                <FaPlus
                    className={`text-2xl text-myBlue absolute right-1 top-4 transform -translate-y-1/2 transition-transform duration-300 ${expanded[item.id] ? 'rotate-[-45deg]' : ''}`}
                />
            </div>
            <motion.div
                initial={{ height: "0px", opacity: 1 }}
                animate={
                    expanded[item.id]
                        ? { height: "auto", opacity: 1 }
                        : { height: "0px", opacity: 1 }
                }
                exit={{ height: "0px", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden text-sm  text-justify px-2  will-change-[transform,opacity]"
            >
                {item.answer}
            </motion.div>
        </li>
    )
}
