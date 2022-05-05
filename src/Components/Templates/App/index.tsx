import { FC, useContext } from 'react'

import { AppContext } from 'Contexts'

import { Modal } from 'Components/Atoms'
import { StepsButtons } from 'Components/Molecules'
import { Steps, Summary } from 'Components/Organisms'

import * as Styled from './style'

export const AppTemplate: FC = () => {
  const { appState } = useContext(AppContext)
  const { steps } = appState

  return (
    <>
      <Styled.GlobalStyles />

      {!!steps?.length && (
        <Modal>
          <Styled.ModalBodyWrapper>
            <Steps />
            <Summary />
            <StepsButtons />
          </Styled.ModalBodyWrapper>
        </Modal>
      )}
    </>
  )
}
