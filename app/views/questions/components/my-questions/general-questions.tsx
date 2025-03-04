import { ReactNode } from "react"



type TAnswer = {
    type: string,
    header?: string | ReactNode,
    title?: string | ReactNode,
    content: string ,
    language?: string,
    lists?: { list: string | ReactNode }[]
}
type TQuestion = {
    id: number
    question: string
    answer: TAnswer[]
}

export const GeneralQuestions = {
    questions(): TQuestion[] {
        return [

            {
                id: 0,
                question: "",
                answer: [
                    {
                        type: "text",
                        header: "",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "",
                            },
                            {
                                list: "",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "",
                        content: `                        
                        `,
                        language: "tsx"
                    },
                ]
            },
        ]
    },
    getData() {
        return Promise.resolve(this.questions())
    },
}



