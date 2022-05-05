import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px;
`

export const Label = styled.label`
  font-size: 12px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;

  border: 2px solid transparent;
  border-bottom: 2px solid var(--purple);
  background-color: var(--lightGrey);

  color: var(--black);

  transition: border-color 0.3s, opacity 0.3s;

  &:not(:disabled) {
    &:focus {
      border-color: var(--purple);
    }
  }

  &:disabled {
    opacity: 0.5;
  }
`
