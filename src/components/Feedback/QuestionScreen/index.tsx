import { useContext } from 'react'
import {
  DispatchQuestionContext,
  QuestionContext,
} from '../../../context/QuestionProvider'
import { QuestionOptionT } from '../../../context/types'
import { Button } from '../../Button'
import OptionItem from './OptionItem'

const QuestionScreen = ({ onFinish }: { onFinish(e: 'finish'): void }) => {
  const questionDispatch = useContext(DispatchQuestionContext)
  const { currentQuestion, currentQuestionIndex, questions, selectedAnswers } =
    useContext(QuestionContext)
  const selectedAnswer = selectedAnswers[currentQuestion!.id]?.answer
  const showResults = currentQuestionIndex === questions!.length - 1

  const handleNextQuestion = () => {
    if (showResults) onFinish('finish')
    else questionDispatch({ action: 'nextQuestion' })
  }

  const onSelectAnswer = (option: QuestionOptionT) => {
    questionDispatch({
      action: 'selectAnswer',
      payload: {
        [currentQuestion!.id]: {
          id: currentQuestion!.id,
          question: currentQuestion!.label,
          answer: option,
        },
      },
    })
  }

  return (
    <div>
      <p className="text-sm text-gray-700 mb-2 italic">
        All questions are required
      </p>
      <p className="text-sm text-gray-700" data-testid="questionNumbering">
        Question {currentQuestionIndex + 1}/{questions?.length}
      </p>

      <p className="text-2xl my-4" data-testid="currentQuestionLabel">
        {currentQuestion!.label}
      </p>
      <ul className="space-y-2">
        {currentQuestion?.options.map((option, index) => (
          <OptionItem
            value={option.value}
            name={currentQuestion.id}
            answer={selectedAnswer}
            onChange={() => onSelectAnswer(option)}
            index={index}
            key={option.value}
          >
            {option.label}
          </OptionItem>
        ))}
      </ul>

      <div className="flex justify-between gap-4 mt-6">
        {currentQuestionIndex > 0 && (
          <Button
            secondary
            onClick={() => questionDispatch({ action: 'previousQuestion' })}
            data-testid="previousButton"
          >
            Previous question
          </Button>
        )}
        <Button
          onClick={handleNextQuestion}
          disabled={!Boolean(selectedAnswer?.value)}
          data-testid="nextButton"
        >
          {showResults ? 'Finish' : 'Next question'}
        </Button>
      </div>
    </div>
  )
}

export default QuestionScreen
