


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
export const GeneralQuestions = {
    questions(): TQuestion[] {
        return [
            {
                id: 1,
                question: "test",
                answer: [{
                    type: "text",
                    content: "test1"
                },{
                    type: "text",
                    content: "test2"
                },{
                    type: "text",
                    content: "test3"
                },{
                    type: "code",
                    content: "let i = 0"
                },{
                    type: "text",
                    content: "test"
                },{
                    type: "code",
                    content: "const a = 2"
                },
            ]
            },
        ]
    },
    getData() {
        return Promise.resolve(this.questions())
    },
}



