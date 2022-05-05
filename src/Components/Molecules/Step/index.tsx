import { FC, useContext } from 'react'

import { AppContext, FormContext } from 'Contexts'

import { FormProps, StepsProps } from 'Helpers/Props'

import { Input } from 'Components/Atoms'

export const Step: FC<{
  stepItem: StepsProps
  stepKey: number
}> = ({ stepItem, stepKey }) => {
  const {
    appState: { step },
  } = useContext(AppContext)
  const { formState, setFormState } = useContext(FormContext)

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
      {stepKey === step &&
        stepItem.fields.map((fieldItem, fieldKey) => {
          return (
            <Input
              key={`form-step-${stepKey}-${fieldItem.fieldTitle}`}
              id={`form-step-${stepKey}-${fieldItem.fieldTitle}`}
              placeholder={fieldItem.fieldTitle}
              value={formState?.[stepKey]?.[fieldKey]?.value[0] || ''}
              onChange={(e) => {
                changeValue(e.currentTarget.value, stepKey, fieldKey)
              }}
            />
          )
        })}
    </>
  )
}
