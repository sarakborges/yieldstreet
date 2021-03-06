import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --transparentBlack: rgba(0, 0, 0, .5);
    --white: #fff;
    --lightGrey: #eee;
    --black: #000;
    --purple: #831de2;
  }

  * {
    box-sizing: border-box;
    outline: none;
  }

  input, button, select{
    margin: 0;
    
    font-family: inherit;
  }
  
  body{
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    color: var(--black);
  }
`

export const ModalBodyWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 32px;
`
