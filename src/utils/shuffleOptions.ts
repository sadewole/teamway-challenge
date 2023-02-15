import { QuestionOptionT } from '../context/questionTypes'

export const shuffleOptions = (arr: QuestionOptionT[]) =>
  arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
