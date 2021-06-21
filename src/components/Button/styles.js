import styled from 'styled-components';

export const Button = styled.button`
  background: ${props => props.theme.colors[props.background]};
  color: ${props => props.theme.colors.white} !important;
  border: none;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: 0.75rem 1.2rem;
  transition: 0.5s;
  border-radius: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2);
    transition-duration: 0.3s;
  }
`;
