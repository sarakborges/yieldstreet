import { InputHTMLAttributes, FC } from 'react'

import * as Styled from './style'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  options: string[]
  currentValue: string[]
}

export const Checkbox: FC<CheckboxProps> = ({ ...props }) => {
  return (
    <Styled.CheckboxWrapper>
      {props.placeholder && <Styled.Label>{props.placeholder}:</Styled.Label>}

      {props.options.map((optionItem) => {
        return (
          <Styled.CheckboxOptionWrapper key={optionItem}>
            <Styled.Checkbox>
              <input
                type="checkbox"
                value={optionItem}
                checked={props.currentValue.includes(optionItem)}
                {...props}
              />

              <span>{optionItem}</span>
            </Styled.Checkbox>
          </Styled.CheckboxOptionWrapper>
        )
      })}
    </Styled.CheckboxWrapper>
  )
}
