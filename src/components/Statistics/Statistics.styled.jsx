import styled from '@emotion/styled';

export const Title = styled.h2`
  padding: ${({ theme }) => theme.space[3]}px;
  text-transform: uppercase;
  margin: ${({ theme }) => theme.space[0]}px;
`;

export const StatList = styled.ul`
  min-height: 60px;
  margin: ${({ theme }) => theme.space[0]}px;
  padding: ${({ theme }) => theme.space[0]}px;
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(60px, 1fr);
`;

export const Item = styled.li`
  padding: ${({ theme }) => theme.space[3]}px;
`;

export const Label = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.s};
  margin-bottom: ${({ theme }) => theme.space[2]}px; ;
`;

export const Percentage = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold}; ;
`;