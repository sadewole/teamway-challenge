import * as React from 'react'
import { UsernameT } from './types'

type DispatchAccountContextT = any

export const DispatchAccountContext =
  React.createContext<DispatchAccountContextT | null>(null)
export const AccountContext = React.createContext<UsernameT | null>(null)

type FetchAccountT = {
  action: 'fetchAccount'
}

type LoginAccountT = {
  action: 'login'
  payload: UsernameT
}

type LogoutAccountT = {
  action: 'logout'
}

const reducer = (
  state: UsernameT | null,
  update: LoginAccountT | LogoutAccountT | FetchAccountT,
): UsernameT | null => {
  switch (update.action) {
    case 'login': {
      localStorage.setItem('user:logged', JSON.stringify(update.payload))
      return update.payload
    }
    case 'logout': {
      localStorage.removeItem('user:logged')
      return null
    }
    case 'fetchAccount': {
      let currentUser = null
      const getLoggedUser = localStorage.getItem('user:logged')
      if (getLoggedUser) {
        currentUser = JSON.parse(getLoggedUser)
      }
      return currentUser
    }
    default:
      return state
  }
}

const UIProvider = ({ children }: { children: React.ReactNode }): any => {
  const [state, dispatch] = React.useReducer(reducer, null)

  React.useEffect(() => {
    dispatch({
      action: 'fetchAccount',
    })
  }, [])

  return (
    <DispatchAccountContext.Provider value={dispatch}>
      <AccountContext.Provider value={state}>
        {children}
      </AccountContext.Provider>
    </DispatchAccountContext.Provider>
  )
}

export default UIProvider
