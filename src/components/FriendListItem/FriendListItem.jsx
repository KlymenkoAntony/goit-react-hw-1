import PropTypes from 'prop-types';
import { FriendCard, Status, Avatar, Name } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendCard>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name + ' avatar'} width="48" />
      <Name>{name}</Name>
    </FriendCard>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};