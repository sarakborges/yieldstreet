import { InputHTMLAttributes, FC } from 'react'

import * as Styled from './style'

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <Styled.InputWrapper>
      {props.placeholder && (
        <Styled.Label htmlFor={props.id}>{props.placeholder}:</Styled.Label>
      )}

      <Styled.Input {...props} />
    </Styled.InputWrapper>
  )
}
