import { Statistic, StatisticItem, StatisticList, StatisticItemLable, 
  StatisticItemPercentage, StatisticTitle} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title ? <StatisticTitle>{title}</StatisticTitle> : ''}

      <StatisticList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticItem id={id}>
              <StatisticItemLable>{label}</StatisticItemLable>
              <StatisticItemPercentage>{percentage}%</StatisticItemPercentage>
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
