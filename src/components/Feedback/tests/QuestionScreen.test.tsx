import { screen, within } from '@testing-library/react'
import { customRender } from '../../../utils/testContextProvider'

import QuestionScreen from '../QuestionScreen'
import { initialState } from './mockQuestionState'

describe('Question screen', () => {
  it('should render component correctly', () => {
    customRender(<QuestionScreen onFinish={jest.fn()} />, {
      questionProviderValue: initialState,
    })

    expect(screen.getByTestId('questionNumbering')).toHaveTextContent(
      'Question 1/5',
    )
    expect(screen.getByTestId('currentQuestionLabel')).toHaveTextContent(
      initialState.currentQuestion.label,
    )

    const listItems = within(screen.getByRole('list')).getAllByRole('listitem')
    expect(listItems).toHaveLength(4)

    expect(screen.queryByTestId('previousButton')).not.toBeInTheDocument()
    expect(screen.getByTestId('nextButton')).toBeInTheDocument()
  })
})
