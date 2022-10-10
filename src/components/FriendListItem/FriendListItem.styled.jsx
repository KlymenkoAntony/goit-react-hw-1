import styled from '@emotion/styled';

export const FriendCard = styled.li`
  padding: ${({ theme }) => theme.space[2]}px;
  width: 200px;
  height: 50px;
  list-style: none;
  display: grid;
  grid-template-columns: 20px 55px auto;
  align-items: center;
  justify-items: center;
  box-shadow: ${({ theme }) => theme.shadows.normal};
  border-radius: ${({ theme }) => theme.radii.normal};
  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[4]}px;
  }
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: ${({ theme }) => theme.radii.round};
  background-color: ${props => (props.isOnline ? props.theme.colors.accent : 'red')};
`;

export const Avatar = styled.img`
  width: 45px;
`;

export const Name = styled.p`
  margin: ${({ theme }) => theme.space[0]}px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;