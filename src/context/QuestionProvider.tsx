import * as React from 'react'
import { shuffleOptions } from '../utils/shuffleOptions'
import { AnswerT, QuestionT } from './questionTypes'

type SetQuestionsT = {
  action: 'set'
  payload: Array<QuestionT>
}

type NextQuestionT = {
  action: 'nextQuestion'
}
type PreviousQuestionT = {
  action: 'previousQuestion'
}
type RestartQuestionsT = {
  action: 'restart'
}
type SelectAnswerT = {
  action: 'selectAnswer'
  payload: AnswerT
}

type Actions =
  | SetQuestionsT
  | NextQuestionT
  | PreviousQuestionT
  | RestartQuestionsT
  | SelectAnswerT

type State = {
  questions: QuestionT[] | null
  currentQuestionIndex: number
  currentQuestion: QuestionT | null
  selectedAnswers: AnswerT
}

type DispatchQuestionContextT = any

export const DispatchQuestionContext =
  React.createContext<DispatchQuestionContextT | null>(null)
export const QuestionContext = React.createContext<State>({} as State)

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  currentQuestion: null,
  selectedAnswers: {},
}

const reducer = (state: State, update: Actions): State => {
  switch (update.action) {
    case 'set': {
      const shuffledQuestionOptions = update.payload.map((question) => ({
        ...question,
        options: shuffleOptions(question.options),
      }))
      return {
        ...state,
        questions: shuffledQuestionOptions,
        currentQuestion: shuffledQuestionOptions[0],
      }
    }
    case 'selectAnswer': {
      const selectedAnswers = {
        ...state.selectedAnswers,
        ...update.payload,
      }
      return {
        ...state,
        selectedAnswers,
      }
    }
    case 'nextQuestion': {
      const hasNext = state.currentQuestionIndex < state.questions!.length - 1
      const currentQuestionIndex = hasNext
        ? state.currentQuestionIndex + 1
        : state.currentQuestionIndex
      const currentQuestion = state.questions![currentQuestionIndex]

      return {
        ...state,
        currentQuestionIndex,
        currentQuestion,
      }
    }
    case 'previousQuestion': {
      const currentQuestionIndex =
        state.currentQuestionIndex > 0
          ? state.currentQuestionIndex - 1
          : state.currentQuestionIndex
      const currentQuestion = state.questions![currentQuestionIndex]

      return {
        ...state,
        currentQuestionIndex,
        currentQuestion,
      }
    }
    case 'restart': {
      return {
        ...state,
        currentQuestionIndex: 0,
        currentQuestion: state.questions![0],
        selectedAnswers: {},
      }
    }
    default: {
      return state
    }
  }
}

const UIProvider = ({ children }: { children: React.ReactNode }): any => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <DispatchQuestionContext.Provider value={dispatch}>
      <QuestionContext.Provider value={state}>
        {children}
      </QuestionContext.Provider>
    </DispatchQuestionContext.Provider>
  )
}

export default UIProvider
