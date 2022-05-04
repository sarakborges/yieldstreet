import { FC } from 'react'

import { StepsProps } from 'Helpers/Props'

import { SummaryField } from 'Components/Atoms'

import * as Styled from './style'

interface SummaryFieldProps {
  stepItem: StepsProps
  stepKey: number
}

export const SummaryStep: FC<SummaryFieldProps> = ({ stepItem, stepKey }) => {
  return (
    <li key={stepItem.stepTitle}>
      <p>{stepItem.stepTitle}</p>

      {!!stepItem.fields?.length && (
        <Styled.StepFields>
          {stepItem.fields.map((fieldItem) => {
            return (
              <SummaryField
                key={`${stepItem.stepTitle}-${fieldItem.fieldTitle}`}
                stepKey={stepKey}
                fieldItem={fieldItem}
              />
            )
          })}
        </Styled.StepFields>
      )}
    </li>
  )
}
