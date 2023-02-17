import { useContext } from 'react'
import {
  DispatchQuestionContext,
  QuestionContext,
} from '../../context/QuestionProvider'
import { Button } from '../Button'
import traits from '../../mocks/traits.json'
import { mode } from '../../utils/mode'

const FinishScreen = ({ onRestart }: { onRestart(e: 'question'): void }) => {
  const questionDispatch = useContext(DispatchQuestionContext)
  const { selectedAnswers } = useContext(QuestionContext)

  const handleRestartQuestion = () => {
    questionDispatch({ action: 'restart' })
    onRestart('question')
  }

  const reports = Object.entries(selectedAnswers).map(
    ([_, value]) => value.answer.trait,
  )
  const highestSelectedReport = mode(reports)
  const trait = traits.find((trait) => trait.name === highestSelectedReport)

  return (
    <div className="text-center max-w-lg mx-auto flex flex-col items-center">
      <h1 className="text-xl font-semibold">Your Results</h1>
      <h2 className="text-3xl font-semibold my-3">
        You are an <span className="font-title uppercase">{trait?.name}</span>
      </h2>
      <p>{trait?.description}</p>
      <div className="mt-6">
        <Button onClick={handleRestartQuestion}>Retack test</Button>
      </div>
    </div>
  )
}

export default FinishScreen
