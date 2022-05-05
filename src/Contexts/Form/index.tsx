import { Dispatch, createContext, useState, FC, ReactNode } from 'react'

import { FormProps } from 'Helpers/Props'

const INITIAL_STATE: Array<Array<FormProps>> = []

export const FormContext = createContext<{
  formState: Array<Array<FormProps>>
  setFormState: Dispatch<any> | null
}>({
  formState: [...INITIAL_STATE],
  setFormState: null,
})

export const FormProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [formState, setFormState] = useState<Array<Array<FormProps>>>({
    ...INITIAL_STATE,
  })

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      <>{children}</>
    </FormContext.Provider>
  )
}
