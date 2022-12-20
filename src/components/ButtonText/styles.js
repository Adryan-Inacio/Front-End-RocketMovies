import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  background: none;

  color: ${({ theme }) => theme.COLORS.PINK};
`
