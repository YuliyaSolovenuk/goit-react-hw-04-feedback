import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbacksPercentage,
}) => {
  return (
    <div className={css.statistics}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positiveFeedbacksPercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbacksPercentage: PropTypes.number.isRequired,
};
