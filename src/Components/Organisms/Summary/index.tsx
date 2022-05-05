import { FC, useContext } from 'react'

import { AppContext } from 'Contexts'

import { SummaryStep } from 'Components/Molecules'

import * as Styled from './style'

export const Summary: FC = () => {
  const {
    appState: { title, steps, step },
  } = useContext(AppContext)

  if (step !== steps.length) {
    return <></>
  }

  return (
    <div>
      <Styled.SurveyTitle>
        {title || 'React Survey'} - Summary
      </Styled.SurveyTitle>

      <Styled.SurveySteps>
        {steps?.map((stepItem, stepKey) => {
          return (
            <SummaryStep
              key={stepItem.stepTitle}
              stepItem={stepItem}
              stepKey={stepKey}
            />
          )
        })}
      </Styled.SurveySteps>
    </div>
  )
}
