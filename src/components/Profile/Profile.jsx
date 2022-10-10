import PropTypes from 'prop-types';
import { Avatar, Name, Tag, Location, Stats, Label, Quantity } from './Prifile.styled';
import { Box } from '../Box/Box';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Box
      m={5}
      pt={5}
      maxWidth={300}
      backgroundColor={'background'}
      textAlign={'center'}
      boxShadow={'normal'}
      borderRadius={'normal'}
    >
      <div>
        <Avatar src={avatar} alt={username + ' avatar'} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </Box>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};