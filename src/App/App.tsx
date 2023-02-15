import { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DispatchQuestionContext } from '../context/QuestionProvider'
import http from '../common/http'
import GuardRoute from '../components/GuardRoute'
import NotFoundPage from '../views/NotFoundPage'
import FeedbackPage from '../views/FeedbackPage'
import HomePage from '../views/HomePage'
import ErrorHandler from './ErrorHandler'
import { AccountContext } from '../context/AccountProvider'

const App = () => {
  const questionDispatch = useContext(DispatchQuestionContext)
  const currentUser = useContext(AccountContext)
  let isLoggedIn = !!currentUser

  useEffect(() => {
    http.get('questions').then((questions) => {
      questionDispatch({
        action: 'set',
        payload: questions,
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <ErrorHandler>
        <Routes>
          <Route
            path="/"
            element={
              <GuardRoute
                component={<HomePage />}
                redirectTo="/feedback"
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="feedback"
            element={
              <GuardRoute
                component={<FeedbackPage />}
                redirectTo="/"
                isLoggedIn={!isLoggedIn}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorHandler>
    </BrowserRouter>
  )
}

export default App
