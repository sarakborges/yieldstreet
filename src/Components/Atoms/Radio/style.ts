import styled from 'styled-components'

export const RadioWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px;
`

export const Label = styled.p`
  padding-bottom: 8px;

  font-size: 12px;
`

export const RadioOptionWrapper = styled.div`
  padding: 2px 8px;
`

export const Radio = styled.label`
  display: inline-flex;
  place-items: center;
  gap: 8px;

  color: var(--black);
  font-size: 12px;
`
