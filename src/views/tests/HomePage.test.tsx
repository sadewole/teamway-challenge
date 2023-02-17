import { fireEvent, render, screen } from '@testing-library/react'
import HomePage from '../HomePage'

describe('Homepage', () => {
  it('elements should exist on the page', () => {
    render(<HomePage />)
    expect(getButton()).toBeInTheDocument()
    expect(getTextBox()).toBeInTheDocument()
  })

  it('button should be disabled when empty input', () => {
    render(<HomePage />)

    expect(getButton()).toHaveAttribute('disabled')
    expect(getButton()).toBeDisabled()
  })

  it('button should not be disabled when input has value', () => {
    render(<HomePage />)

    fireEvent.input(getTextBox(), {
      target: { value: 'John' },
    })

    expect(getButton()).not.toHaveAttribute('disabled')
    expect(getButton()).not.toBeDisabled()
  })
})

function getButton() {
  return screen.getByRole('button', {
    name: /Login/i,
  })
}
function getTextBox() {
  return screen.getByRole('textbox', {
    name: /Enter your name to login/i,
  })
}
