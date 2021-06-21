import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 70vh;
  color: ${props => props.theme.colors.gray60};
`;

export const Img = styled.img`
  max-width: 8rem;
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

export const Name = styled.strong`
  font-size: 1.2rem;
`;

export const PokemonData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin-top: 2rem;

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  strong {
    color: ${props => props.theme.colors.black};
    margin-right: 1rem;
  }

  span {
    text-align: right;
  }
`;
