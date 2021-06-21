import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  border-bottom: 3px solid ${props => props.theme.colors.white};
  position: relative;

  span {
    font-size: 1.2rem !important;
  }

  svg {
    color: ${props => props.theme.colors.white};
    position: absolute;
    right: 0;
  }

  &:hover,
  :focus {
    cursor: pointer;
    transition: border-bottom 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 3px solid ${props => props.theme.colors.buttonBackground};

    span {
      transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      color: ${props => props.theme.colors.buttonBackground};
    }
    svg {
      transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      color: ${props => props.theme.colors.buttonBackground};
    }
  }
`;
