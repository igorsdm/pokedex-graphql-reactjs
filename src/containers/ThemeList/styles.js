import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ListItem = styled.div`
  display: flex;
  padding-bottom: 1rem;
  color: ${props => props.theme.colors.gray60};
  align-items: center;

  img {
    margin-right: 1.5rem;
    max-width: 4rem;
    border-radius: 50%;
  }
`;
