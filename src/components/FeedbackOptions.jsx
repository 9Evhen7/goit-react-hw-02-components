import styled from 'styled-components';

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Btn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: aqua;
`;

export const Buttons = ({ options, onLeaveFeedback }) => {
  return (
    <BtnContainer>
      {options.map(option => {
        return (
          <Btn
            key={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </Btn>
        );
      })}
    </BtnContainer>
  );
};
