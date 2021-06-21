import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 60vh;
  color: ${props => props.theme.colors.gray60};
`;

export const Title = styled.div`
  color: ${props => props.theme.colors.gray48};
  font-size: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ChartDiv = styled.div`
  display: flex;
  align-items: center;
`;
