import PropTypes from 'prop-types';
import getRandomHexColor from '../utils/getRandomHexColor';
import { Title, StatList, Item, Label, Percentage } from './Statistics.styled';
import { Box } from '../Box/Box';

export default function Statistics({ title, stats }) {
  return (
    <Box as={'section'} m={5} textAlign={'center'} width={'fit-content'} boxShadow={'normal'}>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Box>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};