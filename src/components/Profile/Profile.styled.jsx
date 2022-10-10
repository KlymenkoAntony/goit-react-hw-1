import styled from '@emotion/styled';

export const Avatar = styled.img`
  width: 100px;
  border-radius: ${props => props.theme.radii.round};
`;

export const Name = styled.p`
  margin-top: ${props => props.theme.space[4]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Tag = styled.p`
  margin-top: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.text};
`;

export const Location = styled.p`
  margin-top: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.accent};
`;

export const Stats = styled.ul`
  margin: ${props => props.theme.space[0]}px;
  padding: ${props => props.theme.space[0]}px;
  list-style: none;
  background-color: ${props => props.theme.colors.backgroundDark};
  border-top: ${props => props.theme.borders.normal};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  li {
    padding: ${props => props.theme.space[3]}px;
  }
  li:not(:last-child) {
    border-right: ${props => props.theme.borders.normal};
  }
`;

export const Label = styled.span`
  display: block;
`;

export const Quantity = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
`;