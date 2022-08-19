import styled from 'styled-components';

const handleColorType = color => {
  switch (color) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'yellow';
    case 'bad':
      return 'red';
    default:
      return 'default';
  }
};

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Btn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${props => handleColorType(props.bg)};
`;

export { BtnContainer, Btn };
