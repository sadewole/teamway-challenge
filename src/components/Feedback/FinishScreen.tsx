import { useContext } from 'react'
import { DispatchQuestionContext } from '../../context/QuestionProvider'
import { Button } from '../Button'

const FinishScreen = ({ onRestart }: { onRestart(e: 'question'): void }) => {
  const questionDispatch = useContext(DispatchQuestionContext)

  const handleRestartQuestion = () => {
    questionDispatch({ action: 'restart' })
    onRestart('question')
  }

  return (
    <div className="text-center max-w-lg mx-auto flex flex-col items-center">
      <h1 className="text-xl font-semibold">Your Results</h1>
      <h2 className="text-3xl font-semibold my-3">
        You are an <span className="font-title">INTROVERT</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        consequuntur distinctio veniam aut voluptates quos sit facere
        doloremque, nobis a?
      </p>
      <div className="mt-6">
        <Button onClick={handleRestartQuestion}>Retack test</Button>
      </div>
    </div>
  )
}

export default FinishScreen
