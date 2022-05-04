import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;

  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  padding: 16px;

  display: flex;
  place-content: center;
  place-items: center;

  background-color: var(--transparentBlack);
`

export const ModalContainer = styled.div`
  padding: 16px;

  border-radius: 8px;
  background-color: var(--white);
  box-shadow: 0 0 4px var(--transparentBlack);
`

export const ModalClose = styled.div``

export const ModalContent = styled.div``
