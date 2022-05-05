import { FC, useCallback, useContext, useEffect } from 'react'

import { AppContext, FormContext } from 'Contexts'

import { AppProps } from 'Helpers/Props'

import { AppTemplate } from 'Components/Templates'

export const AppPage: FC = () => {
  const {
    appState: { steps },
    setAppState,
  } = useContext(AppContext)
  const { setFormState } = useContext(FormContext)

  const startApp = useCallback(() => {
    setAppState?.((prevState: AppProps) => {
      return {
        ...prevState,
        ...window.reactSurvey,
      }
    })
  }, [setAppState])

  useEffect(() => {
    setTimeout(startApp, 2000)
  }, [startApp])

  useEffect(() => {
    let localData = localStorage.getItem('react-survey')
    let localDataSubmitted = localStorage.getItem('react-survey-submitted')

    if (localDataSubmitted) {
      localDataSubmitted = JSON.parse(localDataSubmitted)

      setAppState?.((prevState: AppProps) => {
        return {
          ...prevState,
          isSubmitted: localDataSubmitted,
        }
      })

      if (localDataSubmitted) {
        return
      }
    }

    if (localData) {
      localData = JSON.parse(localData)

      setFormState?.(localData)

      return
    }

    setFormState?.([
      ...steps.map((item) => {
        return [
          ...item.fields.map((fieldItem) => {
            return { ...fieldItem, value: [''] }
          }),
        ]
      }),
    ])
  }, [steps, setFormState, setAppState])

  return <AppTemplate />
}
