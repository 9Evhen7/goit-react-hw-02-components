import styled from 'styled-components';

const Stats = styled.div`
  display: flex;
  flex-direction: column;
`;
const Span = styled.span`
  padding: 5px;
`;

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
