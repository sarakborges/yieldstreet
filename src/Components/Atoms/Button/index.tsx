import { ButtonHTMLAttributes, FC } from 'react'

import * as Styled from './style'

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <Styled.Button type={props?.type || 'button'} {...props}>
      {children}
    </Styled.Button>
  )
}
