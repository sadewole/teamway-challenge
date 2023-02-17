import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  secondary?: boolean
}

export const Button = ({
  children,
  disabled,
  onClick,
  secondary,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const buttonColor = secondary
    ? 'text-gray-900 enabled:hover:text-white border-2 border-gray-900'
    : 'text-white bg-gray-900'
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${buttonColor} w-full py-2.5 px-5 enabled:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg disabled:opacity-75`}
      {...rest}
    >
      {children}
    </button>
  )
}
