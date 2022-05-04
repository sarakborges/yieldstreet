import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --transparentBlack: rgba(0, 0, 0, .5);
    --white: #fff;
    --black: #000;
  }

  * {
    box-sizing: border-box;
  }

  input, button, select{
    font-family: inherit;
  }
  
  body{
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    color: var(--black);
  }
`
