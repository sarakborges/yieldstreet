import { FC, useContext } from 'react'

import { AppContext } from 'Contexts'

import { Step } from 'Components/Molecules'

export const Steps: FC = () => {
  const { appState } = useContext(AppContext)
  const { steps } = appState

  return (
    <>
      {steps.map((stepItem, stepKey) => {
        return (
          <Step
            key={`form-step-${stepKey}`}
            stepItem={stepItem}
            stepKey={stepKey}
          />
        )
      })}
    </>
  )
}
