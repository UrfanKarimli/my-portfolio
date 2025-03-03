import React, {  useState } from 'react'
import { motion } from "framer-motion"
import CodeBlock from "@/components/code-block/code-block";

import { FaPlus } from 'react-icons/fa6';

interface ExpandedState {
    [key: number]: boolean
}

type TAnswer = {
    type: string,
    content: string,
    language?: string
}
type TQuestion = {
    id: number
    question: string
    answer: TAnswer[]
}
export default function List(item: TQuestion) {
    const [expanded, setExpanded] = useState<ExpandedState>({})
    const handleLinkClick = (id: number) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
    };
    return (
        <li
            key={item.id}
            className=' first:border-t  first:border-t-myBlue py-1 border-b border-b-myBlue relative '>
            <div onClick={() => handleLinkClick(item.id)} style={{ textShadow: 'none' }} className='cursor-pointer text-sm ur:text-base font-medium w-full text-myBlack overflow-x-hidden line-clamp-1 pr-8  overflow-hidden'>
                {item.id}. {item.question}
                <FaPlus
                    className={`ur:text-2xl text-myBlue absolute right-1 top-4 transform -translate-y-1/2 transition-transform duration-300 ${expanded[item.id] ? 'rotate-[-45deg]' : ''}`}
                />
            </div>
            <motion.div
                initial={{ height: "0px",  }}
                animate={
                    expanded[item.id]
                        ? { height: "auto", }
                        : { height: "0px", }
                }
                exit={{ height: "0px",}}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden   will-change-[transform,opacity]"
            >
                    {item?.answer?.map((item, index)=>
                    item.type === "text" ? (
                        <p style={{ textShadow: 'none' }} className='text-xs ur:text-sm text-[#000] border bg-[#EEE8AA] py-2  text-justify px-2' key={index}>{item.content}</p>
                    ) : (
                        <CodeBlock key={index}  language={item.language || "plaintext"} code={ item.content}/>
                    )
                    )}
            </motion.div>
        </li>
    )
}

