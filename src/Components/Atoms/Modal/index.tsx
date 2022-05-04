import { FC, ReactNode } from 'react'

import * as Styled from './style'

export const Modal: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Styled.ModalWrapper>
      <Styled.ModalContainer>
        <Styled.ModalClose></Styled.ModalClose>

        <Styled.ModalContent>{children}</Styled.ModalContent>
      </Styled.ModalContainer>
    </Styled.ModalWrapper>
  )
}
