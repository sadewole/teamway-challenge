export type UsernameT = string

export type OptionT = { value: number; label: string }

export type FeedbackT = Record<
  string,
  {
    id: string
    ques: string
    ans: string | OptionT
  }
>
