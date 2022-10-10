import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  margin: ${({ theme }) => theme.space[5]}px;
  box-shadow: ${({ theme }) => theme.shadows.normal};
  text-align: center;
  border-collapse: collapse;
  text-transform: capitalize;
  tr:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.backgroundDark};
  }
  th {
    padding: ${({ theme }) => theme.space[3]}px;
    width: 100px;
    background-color: ${({ theme }) => theme.colors.accent};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.m};
    color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => theme.borders.normal};
  }
  td {
    padding: ${({ theme }) => theme.space[3]}px;
    border: ${({ theme }) => theme.borders.normal};
  }
`;