export type QuestionOptionT = {
  label: string
  value: string
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
