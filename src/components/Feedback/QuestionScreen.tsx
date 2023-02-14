import { Button } from '../Button'

const QuestionScreen = ({ onFinish }: { onFinish(e: 'start'): void }) => {
  return (
    <div>
      <Button onClick={() => onFinish('start')}>
        Start your personality test
      </Button>
    </div>
  )
}

export default QuestionScreen
