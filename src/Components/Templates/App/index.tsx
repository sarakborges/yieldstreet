import { FC, useCallback, useContext, useEffect } from 'react'

import { AppContext } from 'Contexts'

import { AppProps } from 'Helpers/Props'

import { Modal, Button } from 'Components/Atoms'
import { Summary } from 'Components/Organisms'

import * as Styled from './style'

export const AppTemplate: FC = () => {
  const { appState, setAppState } = useContext(AppContext)
  const { step, steps } = appState

  const stepsComponents = [undefined, undefined, undefined, <Summary />]

  const startApp = useCallback(() => {
    setAppState?.((prevState: AppProps) => {
      return {
        ...prevState,
        ...window.reactSurvey,
      }
    })
  }, [setAppState])

  const changeStep = (step: number) => {
    if (step > steps.length || step < 0) {
      return
    }

    setAppState?.((prevState: AppProps) => {
      return { ...prevState, step }
    })
  }

  useEffect(() => {
    setTimeout(startApp, 2000)
  }, [startApp])

  return (
    <>
      <Styled.GlobalStyles />

      {!!steps?.length && (
        <Modal>
          <div
            style={{
              display: 'flex',
              flexFlow: 'column',
              gap: 32,
            }}
          >
            {stepsComponents[step]}

            <div
              style={{
                display: 'flex',
                placeContent: 'space-between',
              }}
            >
              <Button
                type="button"
                disabled={step === 0}
                onClick={() => changeStep(step - 1)}
              >
                Previous step
              </Button>

              <Button
                type="button"
                disabled={step === steps.length}
                onClick={() => changeStep(step + 1)}
              >
                Next step
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
