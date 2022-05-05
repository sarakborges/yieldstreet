import { FC, useContext } from 'react'

import { AppContext, FormContext } from 'Contexts'

import { FormProps, StepProps, StepsProps } from 'Helpers/Props'
import { FIELD_TYPES } from 'Helpers/Consts'

import { Checkbox, Input, Radio, Select } from 'Components/Atoms'

export const Step: FC<{
  stepItem: StepsProps
  stepKey: number
}> = ({ stepItem, stepKey }) => {
  const {
    appState: { step },
  } = useContext(AppContext)
  const { formState, setFormState } = useContext(FormContext)

  const componentTypes = {
    [FIELD_TYPES.INPUT]: ({
      fieldProps,
      fieldKey,
    }: {
      fieldProps: StepProps
      fieldKey: number
    }) => (
      <Input
        key={`form-step-${stepKey}-${fieldProps.fieldTitle}`}
        id={`form-step-${stepKey}-${fieldProps.fieldTitle}`}
        placeholder={fieldProps.fieldTitle}
        value={formState?.[stepKey]?.[fieldKey]?.value[0] || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          changeValue(e.currentTarget.value, stepKey, fieldKey)
        }}
      />
    ),

    [FIELD_TYPES.SELECT]: ({
      fieldProps,
      fieldKey,
    }: {
      fieldProps: StepProps
      fieldKey: number
    }) => (
      <Select
        key={`form-step-${stepKey}-${fieldProps.fieldTitle}`}
        id={`form-step-${stepKey}-${fieldProps.fieldTitle}`}
        placeholder={fieldProps.fieldTitle}
        options={fieldProps.options || []}
        value={formState?.[stepKey]?.[fieldKey]?.value[0] || ''}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          changeValue(e.currentTarget.value, stepKey, fieldKey)
        }}
      />
    ),

    [FIELD_TYPES.RADIO]: ({
      fieldProps,
      fieldKey,
    }: {
      fieldProps: StepProps
      fieldKey: number
    }) => (
      <Radio
        key={`form-step-${stepKey}-${fieldProps.fieldTitle}`}
        name={`form-step-${stepKey}-${fieldProps.fieldTitle}`}
        placeholder={fieldProps.fieldTitle}
        options={fieldProps.options || []}
        currentValue={formState?.[stepKey]?.[fieldKey]?.value[0] || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          changeValue(e.currentTarget.value, stepKey, fieldKey)
        }}
      />
    ),

    [FIELD_TYPES.CHECKBOX]: ({
      fieldProps,
      fieldKey,
    }: {
      fieldProps: StepProps
      fieldKey: number
    }) => (
      <Checkbox
        key={`form-step-${stepKey}-${fieldProps.fieldTitle}`}
        name={`form-step-${stepKey}-${fieldProps.fieldTitle}`}
        placeholder={fieldProps.fieldTitle}
        options={fieldProps.options || []}
        currentValue={formState?.[stepKey]?.[fieldKey]?.value || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          changeCheckbox(
            e.currentTarget.value,
            e.currentTarget.checked,
            stepKey,
            fieldKey
          )
        }}
      />
    ),
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

  const changeCheckbox = (
    value: string,
    isChecked: boolean,
    step: number,
    field: number
  ) => {
    setFormState?.((prevState: Array<Array<FormProps>>) => {
      const newState = [
        ...prevState.map((stepsItem, stepsKey) => {
          if (step === stepsKey) {
            return [
              ...stepsItem.map((stepItem, stepKey) => {
                if (field === stepKey) {
                  return {
                    ...stepItem,
                    value: isChecked
                      ? [
                          ...stepItem.value.filter(
                            (stepItemValue) => stepItemValue !== ''
                          ),
                          value,
                        ]
                      : [
                          ...stepItem.value.filter(
                            (stepItemValue) =>
                              stepItemValue !== value && stepItemValue !== ''
                          ),
                        ],
                  }
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
          return Object.values(FIELD_TYPES).includes(fieldItem.fieldType) ? (
            componentTypes[fieldItem.fieldType]({
              fieldProps: { ...fieldItem },
              fieldKey,
            })
          ) : (
            <></>
          )
        })}
    </>
  )
}
