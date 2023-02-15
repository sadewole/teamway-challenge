import { PropsWithChildren } from 'react'
import { QuestionOptionT } from '../../../context/types'

type Props = {
  value: string
  index: number
  name: string
  answer: QuestionOptionT
  onChange(): void
}

const OptionItem = ({
  value,
  name,
  index,
  onChange,
  answer,
  children,
}: PropsWithChildren<Props>) => {
  const letterNumbering = ['A', 'B', 'C', 'D']

  return (
    <li>
      <input
        type="radio"
        id={`${name}[${value}]-id`}
        name={name}
        value={value}
        checked={answer?.value === value}
        className="hidden peer"
        onChange={onChange}
        required
      />
      <label
        htmlFor={`${name}[${value}]-id`}
        className="inline-flex items-center gap-4 w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-red-500 peer-checked:text-red-500 [&>span]:peer-checked:bg-red-500 [&>span]:peer-checked:text-white hover:text-gray-600 hover:bg-gray-50"
      >
        <span className="bg-gray-300 rounded-lg p-2 h-7 flex justify-center items-center">
          {letterNumbering[index]}
        </span>
        <div className="w-full">{children}</div>
      </label>
    </li>
  )
}

export default OptionItem
