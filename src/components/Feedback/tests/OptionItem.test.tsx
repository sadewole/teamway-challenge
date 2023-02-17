/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from '@testing-library/react'
import OptionItem from '../QuestionScreen/OptionItem'

const mockAnswer = {
  label: 'Shy always',
  value: '2',
  trait: 'Introvert',
}

describe('OptionItem', () => {
  it('should render component correctly', () => {
    const { container } = render(
      <OptionItem
        value="2"
        index={0}
        name="q1"
        answer={mockAnswer}
        onChange={jest.fn()}
      >
        {mockAnswer.label}
      </OptionItem>,
    )

    const labelElement = container.querySelector('li > label')
    const spanElement = container.querySelector('li > label > span')
    const checkInput = screen.getByRole('radio')

    expect(labelElement).toHaveTextContent('Shy always')
    expect(spanElement).toHaveTextContent('A')
    expect(checkInput).toBeChecked()
  })

  it('only check radio if not checked and value is not equal answer', () => {
    render(
      <OptionItem
        value="3"
        index={0}
        name="q1"
        answer={mockAnswer}
        onChange={jest.fn()}
      >
        {mockAnswer.label}
      </OptionItem>,
    )

    const checkInput = screen.getByRole('radio')
    expect(checkInput).not.toBeChecked()
  })
})
