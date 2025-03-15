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

export type {TQuestion}