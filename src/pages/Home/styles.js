import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10vh 90vh;
  grid-template-areas:
    'header'
    'body';
  width: 100%;
  min-height: 100%;
  max-width: 570px;
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  > svg {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: body;
  background-color: ${props => props.theme.colors.white};
  max-height: calc(100vh - 60px);
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 70vh;
  padding: 1rem 0 0 1rem;
  > div {
    display: flex;
    justify-content: space-between;

    &:first-child {
      padding-bottom: 1rem;
      padding-right: 1.5rem;
      strong {
        color: ${props => props.theme.colors.gray48};
      }
    }
  }
`;

export const ScrollY = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 0.5rem;
    background: #f4f4f4;
    margin: 0;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;

export const Filter = styled.div`
  display: flex;
  position: absolute;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? 1 : 0)};
  align-items: center;
  width: 100%;
  padding: 0 1.5rem;
`;

export const FilterInput = styled.input`
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  width: 100%;
  color: ${props => props.theme.colors.gray60};
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 4px;
`;

export const PokemonList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    align-self: center;
    color: ${props => props.theme.colors.gray60};
  }
`;

export const PokemonListItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  padding-right: 1rem;
  color: ${props => props.theme.colors.gray60};
  cursor: pointer;
  img {
    margin-right: 1.5rem;
    max-width: 4rem;
    border-radius: 50%;
  }
`;

export const Loading = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
