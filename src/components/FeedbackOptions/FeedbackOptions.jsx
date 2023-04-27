import PropTypes from 'prop-types';
import { BtnList, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map((mark, i) => {
        return (
          <li key={i}>
            <Btn onClick={() => onLeaveFeedback(mark)}>{mark}</Btn>
          </li>
        );
      })}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
