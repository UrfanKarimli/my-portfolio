"use client"

import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, {  useEffect, useState } from 'react'
import List from './components/list'
import { interviewTopics } from './components/links'
import { formatUrl } from '@/utils/formatUrl'
import { CssQuestions } from './components/my-questions/css-questions'
import { HtmlQuestions } from './components/my-questions/html-questions'
import { JSQuestions } from './components/my-questions/js-questions'
import { NextQuestions } from './components/my-questions/next-questions'
import { ReactQuestions } from './components/my-questions/react-questions'
import { TSQuestions } from './components/my-questions/ts-questions'
import { GeneralQuestions } from './components/my-questions/general-questions'

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

export default function Questions() {
    const [questions, setQuestions] = useState<TQuestion[]>([]);
    const params = useParams()
    const url = params!.params![0]

    useEffect(() => {
        const fetchData = async () => {
            let data: TQuestion[] = [];
            switch (url) {
                case "css":
                    data = await CssQuestions.getData();
                    break;
                case "html":
                    data = await HtmlQuestions.getData();
                    break;
                case "java-script":
                    data = await JSQuestions.getData();
                    break;
                case "next_js":
                    data = await NextQuestions.getData();
                    break;
                case "react_js":
                    data = await ReactQuestions.getData();
                    break;
                case "type-script":
                    data = await TSQuestions.getData();
                    break;
                    case "general":
                    data = await GeneralQuestions.getData();
                    break;
                default:
                    data = [];
                    break;
            }
            setQuestions(data);
        };
        fetchData();
    }, [url]);



    return (
        <div className='z-20 sticky mx-1 lg:mx-9 flex items-start ur:gap-4  h-full min-h-screen'>
            <aside className=' sticky top-20  left-0  '>
                <nav  >
                    <ul className="bg-myWhite hidden ur:flex flex-col ur:w-44 rounded-lg py-3">
                        {interviewTopics.map((topic) => (
                            <li key={topic.url}>
                                <Link className={`block font-semibold text-sm ${url === topic.url ? 'text-myYellow hover:text-[#ff4e08c0] hover:bg-[#e3f7f4]' : 'text-myGray hover:text-myBlack hover:bg-[#eff3f3]'} rounded-md py-1 px-2`}
                                    style={{ textShadow: 'none' }}
                                    href={topic.href}
                                >
                                    {topic.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <div className=' mt-5  bg-myWhite rounded-lg py-4 px-4 ur:py-8 ur:px-12 w-full' >
                <h1 style={{ textShadow: 'none' }} className='ur:text-2xl text-center ur:text-start font-semibold text-myYellow '> {formatUrl(url)} <span style={{ textShadow: 'none' }} className=' lowercase'>ilə bağlı suallar</span> </h1>
                <ol className=' flex-col items-start gap-4 my-1  '>
                    {questions?.map((item) => (
                        <List key={item.id} {...item} />
                    ))}
                </ol>
            </div>
        </div>
    )
}
