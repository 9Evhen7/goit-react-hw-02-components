import styled from 'styled-components';

const Wraper = styled.section`
  margin-left: 16px;
  max-width: fit-content;
`;

export const Section = ({ title, children }) => {
  return (
    <Wraper>
      <h2>{title}</h2>
      {children}
    </Wraper>
  );
};
