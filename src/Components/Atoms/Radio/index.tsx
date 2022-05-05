import { InputHTMLAttributes, FC } from 'react'

import * as Styled from './style'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  options: string[]
  currentValue: string
}

export const Radio: FC<RadioProps> = ({ ...props }) => {
  return (
    <Styled.RadioWrapper>
      {props.placeholder && <Styled.Label>{props.placeholder}:</Styled.Label>}

      {props.options.map((optionItem) => {
        return (
          <Styled.RadioOptionWrapper key={optionItem}>
            <Styled.Radio>
              <input
                type="radio"
                value={optionItem}
                checked={optionItem === props.currentValue}
                {...props}
              />

              <span>{optionItem}</span>
            </Styled.Radio>
          </Styled.RadioOptionWrapper>
        )
      })}
    </Styled.RadioWrapper>
  )
}
