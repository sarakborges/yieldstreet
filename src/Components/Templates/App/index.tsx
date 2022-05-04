import { FC, useCallback, useContext, useEffect } from 'react'

import { AppContext } from 'Contexts'

import { AppProps } from 'Helpers/Props'

import { Modal } from 'Components/Atoms'

import * as Styled from './style'

export const AppTemplate: FC = () => {
  const { appState, setAppState } = useContext(AppContext)
  const { title } = appState

  const startApp = useCallback(() => {
    setAppState?.((prevState: AppProps) => {
      return { ...prevState, ...window.reactSurvey }
    })
  }, [setAppState])

  useEffect(() => {
    startApp()
  }, [startApp])

  return (
    <>
      <Styled.GlobalStyles />

      <Modal>
        <>{title}</>
      </Modal>
    </>
  )
}
