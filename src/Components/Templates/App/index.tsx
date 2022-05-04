import { FC, useCallback, useContext, useEffect } from 'react'

import { AppContext } from 'Contexts'

import { AppProps } from 'Helpers/Props'

import { Modal } from 'Components/Atoms'
import { Summary } from 'Components/Organisms'

import * as Styled from './style'

export const AppTemplate: FC = () => {
  const { appState, setAppState } = useContext(AppContext)
  const { step, steps } = appState

  const stepsComponents = [<Summary />, <Summary />, <Summary />, <Summary />]

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

  return (
    <>
      <Styled.GlobalStyles />

      {!!steps?.length && <Modal>{stepsComponents[step]}</Modal>}
    </>
  )
}
