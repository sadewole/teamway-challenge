import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {
  AccountContext,
  DispatchAccountContext,
} from '../context/AccountProvider'
import { DispatchQuestionContext } from '../context/QuestionProvider'
import { Title } from '../components/Title'

const Header = () => {
  const currentUser = useContext(AccountContext)
  const logoutUser = useContext(DispatchAccountContext)
  const questionDispatch = useContext(DispatchQuestionContext)

  const handleLogout = () => {
    logoutUser({ action: 'logout' })
    questionDispatch({ action: 'restart' })
  }

  return (
    <header className="bg-white px-8">
      <div className="max-w-[900px] mx-auto h-full flex items-center justify-between">
        <Title />
        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-lime-900 text-white">
            <span className="capitalize">{currentUser?.trim().charAt(0)}</span>
          </div>
          <div>
            <p className="text-sm font-semibold">{currentUser}</p>
            <NavLink
              to="/"
              onClick={handleLogout}
              className="text-sm text-red-500 "
            >
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
