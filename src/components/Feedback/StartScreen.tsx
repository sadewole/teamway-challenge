import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { Button } from '../Button'

const StartScreen = ({ onStart }: { onStart(e: 'question'): void }) => {
  const currentUser = useContext(AccountContext)
  return (
    <div className="text-center py-6">
      <h1 className="text-3xl font-semibold">Welcome {currentUser}!</h1>
      <p className="my-2">Are you an introvert or an extrovert?</p>

      <div className="mt-4 max-w-sm mx-auto">
        <Button onClick={() => onStart('question')}>
          Start your personality test
        </Button>
      </div>
    </div>
  )
}

export default StartScreen
