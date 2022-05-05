import { FC, Fragment, useContext } from 'react'

import { AppContext, FormContext } from 'Contexts'

import { AppProps, FormProps } from 'Helpers/Props'

import { Modal, Button, Input } from 'Components/Atoms'
import { Summary } from 'Components/Organisms'

import * as Styled from './style'

export const AppTemplate: FC = () => {
  const { appState, setAppState } = useContext(AppContext)
  const { step, steps } = appState

  const { formState, setFormState } = useContext(FormContext)

  const changeStep = (step: number) => {
    if (step > steps.length || step < 0) {
      return
    }

    setAppState?.((prevState: AppProps) => {
      return { ...prevState, step }
    })
  }

  const changeValue = (value: string, step: number, field: number) => {
    setFormState?.((prevState: Array<Array<FormProps>>) => {
      const newState = [
        ...prevState.map((stepsItem, stepsKey) => {
          if (step === stepsKey) {
            return [
              ...stepsItem.map((stepItem, stepKey) => {
                if (field === stepKey) {
                  return { ...stepItem, value: [value] }
                }

                return stepItem
              }),
            ]
          }

          return stepsItem
        }),
      ]

      localStorage.setItem('react-survey', JSON.stringify([...newState]))

      return newState
    })
  }

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
            {steps.map((stepItem, stepKey) => {
              return (
                <Fragment key={`form-step-${stepKey}`}>
                  {stepKey === step &&
                    stepItem.fields.map((fieldItem, fieldKey) => {
                      return (
                        <Input
                          key={`form-step-${stepKey}-${fieldItem.fieldTitle}`}
                          id={`form-step-${stepKey}-${fieldItem.fieldTitle}`}
                          placeholder={fieldItem.fieldTitle}
                          value={
                            formState?.[stepKey]?.[fieldKey]?.value[0] || ''
                          }
                          onChange={(e) => {
                            changeValue(
                              e.currentTarget.value,
                              stepKey,
                              fieldKey
                            )
                          }}
                        />
                      )
                    })}
                </Fragment>
              )
            })}

            {step === steps.length && <Summary />}

            <div
              style={{
                display: 'flex',
                placeContent: 'space-between',
              }}
            >
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
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
