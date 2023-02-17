import { customRender } from '../../utils/testContextProvider'
import NotFoundPage from '../NotFoundPage'

it('Page should match snapshot', () => {
  const { container } = customRender(<NotFoundPage />)
  expect(container).toMatchSnapshot()
})
