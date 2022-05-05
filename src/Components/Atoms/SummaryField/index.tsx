import { FC, useContext } from 'react'

import { StepProps } from 'Helpers/Props'

import { FormContext } from 'Contexts'

import * as Styled from './style'

interface SummaryFieldProps {
  stepKey: number
  fieldKey: number
  fieldItem: StepProps
}

export const SummaryField: FC<SummaryFieldProps> = ({
  stepKey,
  fieldItem,
  fieldKey,
}) => {
  const { formState } = useContext(FormContext)

  return (
    <li>
      <Styled.FieldItem>
        <>
          {`- ${fieldItem.fieldTitle}: `}

          {formState?.[stepKey]?.[fieldKey]?.value?.join(', ') || ''}
        </>
      </Styled.FieldItem>
    </li>
  )
}
