import PropTypes from 'prop-types';
import { BtnContainer, Btn } from '../styles/feedbackOptionsStyles';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnContainer>
      {options.map(option => {
        return (
          <Btn
            key={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
            bg={option}
          >
            {option}
          </Btn>
        );
      })}
    </BtnContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
