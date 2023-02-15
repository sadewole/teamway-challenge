import { useState } from 'react'
import FinishScreen from '../components/Feedback/FinishScreen'
import QuestionScreen from '../components/Feedback/QuestionScreen'
import StartScreen from '../components/Feedback/StartScreen'
import Layout from '../Layout'

type ScreenType = 'start' | 'question' | 'finish'

const FeedbackPage = () => {
  const [screen, setScreen] = useState<ScreenType>('start')
  const handleToggleScreen = (value: ScreenType) => setScreen(value)

  return (
    <Layout loggedIn>
      <div className="bg-white border border-gray-200 rounded-lg shadow p-3">
        {screen === 'start' && <StartScreen onStart={handleToggleScreen} />}
        {screen === 'question' && (
          <QuestionScreen onFinish={handleToggleScreen} />
        )}
        {screen === 'finish' && <FinishScreen onRestart={handleToggleScreen} />}
      </div>
    </Layout>
  )
}

export default FeedbackPage
