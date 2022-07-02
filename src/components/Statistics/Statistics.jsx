import {
  Statistic,
  StatisticTitle,
  StatisticItem,
  StatisticList,
  StatisticLable,
  StatisticPercentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ stat, title }) => {
  return (
    <Statistic>
      <StatisticTitle>{title}</StatisticTitle>
      <StatisticList>
        {stat.map(({ id, label, percentage }) => {
          return (
            <StatisticItem key={id}>
              <StatisticLable>{label}</StatisticLable>
              <StatisticPercentage>{percentage}%</StatisticPercentage>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </Statistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
