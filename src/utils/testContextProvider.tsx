import { PropsWithChildren, ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, RenderOptions } from '@testing-library/react'

import {
  QuestionContext,
  State as QuestionState,
} from '../context/QuestionProvider'
import { AccountContext } from '../context/AccountProvider'

import { UsernameT } from '../context/types'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  accountProviderValue?: UsernameT | null
  questionProviderValue?: QuestionState
}

const customRender = (
  ui: ReactElement,
  {
    accountProviderValue = null,
    questionProviderValue = {
      questions: [],
      currentQuestionIndex: 0,
      currentQuestion: null,
      selectedAnswers: {},
    },
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>) => {
    return (
      <AccountContext.Provider value={accountProviderValue}>
        <QuestionContext.Provider value={questionProviderValue}>
          <BrowserRouter>{children}</BrowserRouter>
        </QuestionContext.Provider>
      </AccountContext.Provider>
    )
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

export { customRender }
