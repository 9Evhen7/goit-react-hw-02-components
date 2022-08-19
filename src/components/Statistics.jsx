import PropTypes from 'prop-types';
import { Stats, Span } from '../styles/statisticsStyles';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Stats>
        <Span>Good: {good}</Span>
        <Span>Neutral: {neutral}</Span>
        <Span>Bad: {bad}</Span>
        <Span>Total: {total}</Span>
        <Span>Positive Persentage: {parseInt(positivePercentage, 10)}%</Span>
      </Stats>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
