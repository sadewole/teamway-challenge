import questions from '../../../mocks/questions.json'

export const initialState = {
  questions,
  currentQuestionIndex: 0,
  currentQuestion: questions[0],
  selectedAnswers: {},
}
