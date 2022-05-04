import styled from 'styled-components'

export const Button = styled.button`
  padding: 8px 12px;

  border: 2px solid var(--purple);
  border-radius: 4px;
  background-color: var(--purple);

  color: var(--white);

  transition: color 0.3s, background-color 0.3s, opacity 0.3s;

  &:not(:disabled) {
    cursor: pointer;

    &:hover {
      background-color: var(--white);

      color: var(--purple);
    }
  }

  &:disabled {
    opacity: 0.5;
  }
`
