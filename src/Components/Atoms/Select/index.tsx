import { SelectHTMLAttributes, FC } from 'react'

import * as Styled from './style'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[]
}

export const Select: FC<SelectProps> = ({ ...props }) => {
  return (
    <Styled.SelectWrapper>
      {props.placeholder && <Styled.Label>{props.placeholder}:</Styled.Label>}

      <Styled.Select {...props}>
        <option value="">Selecione uma opção</option>

        {props.options.map((optionItem) => {
          return (
            <option key={optionItem} value={optionItem}>
              {optionItem}
            </option>
          )
        })}
      </Styled.Select>
    </Styled.SelectWrapper>
  )
}
