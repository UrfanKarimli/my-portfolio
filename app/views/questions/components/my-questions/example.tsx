import { TQuestion } from "../../types"

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



