import { FC, useContext } from 'react'

import { AppContext, FormContext } from 'Contexts'

import { AppProps } from 'Helpers/Props'

import { Button } from 'Components/Atoms'

import * as Styled from './style'

export const StepsButtons: FC = () => {
  const { appState, setAppState } = useContext(AppContext)
  const { step, steps } = appState

  const { formState } = useContext(FormContext)

  const changeStep = (step: number) => {
    if (step > steps.length || step < 0) {
      return
    }

    setAppState?.((prevState: AppProps) => {
      if (step > prevState.step) {
        for (let stepItem of formState[prevState.step]) {
          if (
            stepItem.required &&
            (stepItem.value.includes('') || !stepItem.value.length)
          ) {
            return { ...prevState }
          }
        }
      }

      return { ...prevState, step }
    })
  }

  const handleSubmit = () => {
    localStorage.setItem('react-survey-submitted', JSON.stringify(true))

    setAppState?.((prevState: AppProps) => {
      return {
        ...prevState,
        isSubmitted: true,
      }
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
          <Button type="button" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </div>
    </Styled.StepsButtonsWrapper>
  )
}
