


type TAnswer = {
    type: string,
    content: string,
    title?: string,
    header?: string,
    language?: string,
    lists?: { list: string }[]
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
                            }
                        ]
                    },
                    {
                        type: "code",
                        title: "",
                        content: "",
                        language: "javascript"
                    },
                ]
            },
        ]
    },
    getData() {
        return Promise.resolve(this.questions())
    },
}



