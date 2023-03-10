export type UsernameT = string

export type QuestionOptionT = {
  label: string
  value: string
  trait: string
}

export type QuestionT = {
  id: string
  label: string
  options: QuestionOptionT[]
}

export type AnswerT = Record<
  string,
  {
    id: string
    question: string
    answer: QuestionOptionT
  }
>
