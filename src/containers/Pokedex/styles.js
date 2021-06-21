import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 50vh;
  color: ${props => props.theme.colors.gray60};
`;

export const Title = styled.div`
  color: ${props => props.theme.colors.gray48};
  font-size: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const EmptyChart = styled.div`
  display: flex;
  height: 250px;
  align-items: center;
`;
