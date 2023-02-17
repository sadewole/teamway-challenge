import * as React from 'react'
import { UsernameT } from './types'

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

type Actions = LoginAccountT | LogoutAccountT | FetchAccountT

type DispatchAccountContextT = React.Dispatch<Actions>

export const DispatchAccountContext =
  React.createContext<DispatchAccountContextT>(() => {})
export const AccountContext = React.createContext<UsernameT | null>(null)

const reducer = (
  state: UsernameT | null,
  update: Actions,
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

const UIProvider = ({ children }: { children: React.ReactNode }) => {
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
