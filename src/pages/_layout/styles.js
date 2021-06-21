import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background: ${props => `linear-gradient(
    135deg,
    ${props.theme.colors.backgroundColor1} 0%,
    ${props.theme.colors.backgroundColor2} 100%
  );`};
`;
