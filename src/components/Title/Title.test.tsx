import { render, screen } from '@testing-library/react'
import { Title } from '.'

test('render header title correctly', () => {
  render(<Title />)
  const heading = screen.getByRole('heading', { name: /Teamway Psychologies/i })
  expect(heading).toBeInTheDocument()
})
