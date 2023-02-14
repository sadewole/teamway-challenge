import { ReactElement, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AccountContext } from '../context/AccountProvider'

const PrivateRoute = ({
  component: Component,
}: {
  component: ReactElement
}) => {
  const currentUser = useContext(AccountContext)
  let isLoggedIn = !!currentUser

  if (!isLoggedIn) {
    return <Navigate to="/" replace />
  }

  return Component
}

export default PrivateRoute
