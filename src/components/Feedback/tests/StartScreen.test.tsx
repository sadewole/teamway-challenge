import { screen } from '@testing-library/react'
import { customRender } from '../../../utils/testContextProvider'
import StartScreen from '../StartScreen'

it('should render start screen component correctly', () => {
  customRender(<StartScreen onStart={jest.fn()} />, {
    accountProviderValue: 'John',
  })

  const heading = screen.getByRole('heading', { name: /Welcome John/i })
  const button = screen.getByRole('button', {
    name: /Start your personality test/i,
  })

  expect(heading).toBeInTheDocument()
  expect(button).toBeInTheDocument()
})
