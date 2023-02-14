import * as React from 'react'

export type QuestionT = {
  label: string
  options?: {
    label: string
    value: number
  }[]
}

type SetQuestionsT = {
  action: 'set'
  payload: Array<QuestionT>
}

type Action = SetQuestionsT

type State = {
  questions: QuestionT[] | null
}

type DispatchQuestionContextT = any

export const DispatchQuestionContext =
  React.createContext<DispatchQuestionContextT | null>(null)
export const QuestionContext = React.createContext<State>({} as State)

const initialState = {
  questions: [],
}

const reducer = (state: State, update: Action): State => {
  if (update.action === 'set') {
    return {
      ...state,
      questions: update.payload,
    }
  }
  return state
}

const UIProvider = ({ children }: { children: React.ReactNode }): any => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  console.log('questions', state)

  return (
    <DispatchQuestionContext.Provider value={dispatch}>
      <QuestionContext.Provider value={state}>
        {children}
      </QuestionContext.Provider>
    </DispatchQuestionContext.Provider>
  )
}

export default UIProvider
