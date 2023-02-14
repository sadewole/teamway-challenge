import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

const GuardRoute = ({
  component: Component,
  redirectTo,
  isLoggedIn,
}: {
  component: ReactElement
  redirectTo: string
  isLoggedIn: boolean
}) => {
  if (isLoggedIn) {
    return <Navigate to={redirectTo} replace />
  }

  return Component
}

export default GuardRoute
