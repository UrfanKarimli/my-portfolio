import React, {  useState } from 'react'
import { motion } from "framer-motion"
import CodeBlock from "@/components/code-block";
import { BsPinAngleFill } from "react-icons/bs";
import { FaPlus } from 'react-icons/fa6';
import { TQuestion } from '../../types';
interface ExpandedState {
    [key: number]: boolean
}

export default function List(item: TQuestion) {
    const [expanded, setExpanded] = useState<ExpandedState>({})
    const handleLinkClick = (id: number) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
    };
    return (
        <li
            key={item.id}
            className='no-shadow first:border-t w-full  first:border-t-myBlue py-1 border-b border-b-myBlue relative '>
            <div onClick={() => handleLinkClick(item.id)} className='cursor-pointer text-sm ur:text-base font-medium  text-myBlack  line-clamp-1 pr-8  '>
                {item.id}. {item.question}
                <FaPlus
                    className={`ur:text-2xl text-myBlue absolute right-1 top-4 transform -translate-y-1/2 transition-transform duration-300 ${expanded[item.id] ? 'rotate-[-45deg]' : ''}`}
                />
            </div>
            <motion.div
                initial={{ height: "0px", opacity: 0 }}
                animate={
                    expanded[item.id]
                        ? { height: "auto", opacity:1 }
                        : { height: "0px", opacity: 0 }
                }
                exit={{ height: "0px", opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className=" bg-listBg w-full   will-change-[transform,opacity] "
            >
                <div className=' p-2 pb-5'>
                    {item?.answer?.map((item, index) => (
                        <div className=' w-full' key={index} >
                            {item.header && <p className="font-bold text-myBlack text-sm ur:text-xl py-2 pl-5">{item.header}</p>}
                            {item.title && <p className="font-bold text-myBlack text-xs ur:text-base  flex items-start gap-1 leading-3 ur:leading-4 "><BsPinAngleFill className=' size-3 text-myYellow' /> {item.title}</p>}
                            {item.type === "text" ? (
                                item.content &&
                                <p
                                    style={{ textShadow: 'none', textIndent: '10px' }}
                                    className='text-xs inline ur:text-sm text-[#000]  text-justify py-1 '
                                >
                                    {item.content}
                                </p>
                            ) : (
                                <CodeBlock language={item.language || "plaintext"} code={item.content} />
                            )}
                            {item.lists && <ul className=' py-1' >
                                {
                                    item.lists?.map((li, index) => (
                                        <li className='text-xs ur:text-sm text-[#000]   pl-1 ' key={index}> - {li.list}</li>
                                    ))
                                }
                            </ul>}
                        </div>
                    ))}
                </div>
                <span onClick={() => handleLinkClick(item.id)} className='absolute cursor-pointer text-xs ur:text-base right-1 bottom-px text-red-600 flex items-center gap-1'>
                    Bağla 
                    <FaPlus className={`ur:text-2xl   rotate-[-45deg]`}
                /></span>
            </motion.div>
        </li>
    )

}

