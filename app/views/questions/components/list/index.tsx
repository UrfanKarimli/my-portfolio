import React, { useState } from 'react'
import { motion } from "framer-motion"
import CodeBlock from "@/components/code-block";
import { BsPinAngleFill } from "react-icons/bs";
import { FaPlus } from 'react-icons/fa6';

interface ExpandedState {
    [key: number]: boolean
}

type TAnswer = {
    type: string,
    title?: string,
    header?: string,
    content: string,
    language?: string,
    lists?: { list: string }[]


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
                initial={{ height: "0px", }}
                animate={
                    expanded[item.id]
                        ? { height: "auto", }
                        : { height: "0px", }
                }
                exit={{ height: "0px", }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden bg-[#EEE8AA]  will-change-[transform,opacity] "
            >
                <div className=' p-2'>
                    {item?.answer?.map((item, index) => (
                        <div key={index} >


                            {item.header && <p style={{ textShadow: 'none' }} className="font-bold text-sm ur:text-xl py-2 pl-5">{item.header}</p>}
                            {item.title && <p style={{ textShadow: 'none' }} className="font-bold text-xs ur:text-base  flex items-start gap-1 leading-3 ur:leading-4 "><BsPinAngleFill className=' size-3 text-myYellow' /> {item.title}</p>}
                            {item.type === "text" ? (
                                item.content &&
                                <p
                                    style={{ textShadow: 'none', textIndent: '10px' }}
                                    className='text-xs ur:text-sm text-[#000]  text-justify py-1 '
                                >
                                    {item.content}
                                </p>
                            ) : (
                                <CodeBlock language={item.language || "plaintext"} code={item.content} />
                            )}
                            {item.lists && <ul >
                                {
                                    item.lists?.map((li, index) => (
                                        <li className='text-xs ur:text-sm text-[#000]  text-justify pl-1' style={{ textShadow: 'none' }} key={index}> - {li.list}</li>
                                    ))
                                }
                            </ul>}
                        </div>
                    ))}
                </div>
            </motion.div>
        </li>
    )

}

