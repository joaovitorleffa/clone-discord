import styled from 'styled-components'
import { ExpandMore } from 'styled-icons/material'

export const Container = styled.div`
  background-color: var(--secondary);

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 0 11px 0 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;

`
export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
`
export const ExpandIcon = styled(ExpandMore)`
  font-size: 24px;
  height: 24px;
  color: var(--white);
  cursor: pointer;
`

