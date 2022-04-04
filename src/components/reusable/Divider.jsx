import styled from 'styled-components';

const Divider = () => {
  return <Line />;
};

const Line = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.portfolio.line};
`;

export default Divider;
