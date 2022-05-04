import { FC, useContext } from 'react'

import { StepProps } from 'Helpers/Props'

import { AppContext } from 'Contexts'

import * as Styled from './style'

interface SummaryFieldProps {
  stepKey: number
  fieldItem: StepProps
}

export const SummaryField: FC<SummaryFieldProps> = ({ stepKey, fieldItem }) => {
  const {
    appState: { answers },
  } = useContext(AppContext)

  return (
    <li>
      <Styled.FieldItem>
        <>
          {`- ${fieldItem.fieldTitle}: `}

          {answers
            ?.find(
              (answerItem) =>
                answerItem.step === stepKey &&
                answerItem.field === fieldItem.fieldTitle
            )
            ?.value?.join(', ') || ''}
        </>
      </Styled.FieldItem>
    </li>
  )
}
