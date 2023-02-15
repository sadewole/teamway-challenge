import { QuestionOptionT } from '../context/types'

export const shuffleOptions = (arr: QuestionOptionT[]) =>
  arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
