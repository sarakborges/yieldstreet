import { FC, useContext } from 'react'

import { AppContext } from 'Contexts'

import { AppProps } from 'Helpers/Props'

import { Button } from 'Components/Atoms'

import * as Styled from './style'

export const StepsButtons: FC = () => {
  const { appState, setAppState } = useContext(AppContext)
  const { step, steps } = appState

  const changeStep = (step: number) => {
    if (step > steps.length || step < 0) {
      return
    }

    setAppState?.((prevState: AppProps) => {
      return { ...prevState, step }
    })
  }

  return (
    <Styled.StepsButtonsWrapper>
      <div>
        {step !== 0 && (
          <Button
            type="button"
            disabled={step === 0}
            onClick={() => changeStep(step - 1)}
          >
            Previous step
          </Button>
        )}
      </div>

      <div>
        {step !== steps.length ? (
          <Button
            type="button"
            disabled={step === steps.length}
            onClick={() => changeStep(step + 1)}
          >
            Next step
          </Button>
        ) : (
          <Button type="button">Submit</Button>
        )}
      </div>
    </Styled.StepsButtonsWrapper>
  )
}
