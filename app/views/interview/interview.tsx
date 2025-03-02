"use client"

import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, {  useEffect, useState } from 'react'
import List from './components/questions/List'
import { interviewTopics } from './components/questions/links'
import { formatUrl } from '@/utils/formatUrl'
import { CssQuestions } from './components/questions/css-questions'
import { HtmlQuestions } from './components/questions/html-questions'
import { JSQuestions } from './components/questions/js-questions'
import { NextQuestions } from './components/questions/next-questions'
import { ReactQuestions } from './components/questions/react-questions'
import { TSQuestions } from './components/questions/ts-questions'
import { GeneralQuestions } from './components/questions/general-questions'

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

export default function Interview() {
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
            <div className=' mt-5  bg-myWhite rounded-lg py-8 px-12 w-full' >
                <h1 className='text-2xl font-semibold text-myBlack '> {formatUrl(url)} <span className=' lowercase'>ilə bağlı suallar</span> </h1>
                <ol className=' flex-col items-start gap-4 my-1  '>
                    {questions?.map((item) => (
                        <List key={item.id} {...item} />
                    ))}
                </ol>
            </div>
        </div>
    )
}
