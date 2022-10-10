import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { Box } from 'components/Box/Box';

export default function FriendList({ friends }) {
  return (
    <Box as={'ul'} p={0} m={5}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </Box>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};