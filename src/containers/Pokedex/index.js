import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Chart } from 'react-google-charts';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import { clearPokedex } from '~/store/modules/pokemon/actions';
import { getPokemonsData } from '~/utils/pokemonData';

import { Container, Title, ChartDiv } from './styles';

const Pokedex = ({ toggleFunction }) => {
  const dispatch = useDispatch();
  const { pokedex } = useSelector(state => state.pokemon);

  let data = [];

  if (pokedex) {
    data = getPokemonsData(pokedex);
  }

  return (
    <Container>
      <Title>Pokedex</Title>

      <ChartDiv>
        {data.length > 1 ? (
          <Chart
            width="100%"
            height="250px"
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data}
          />
        ) : (
          <p>Your pokedex is empty!</p>
        )}
      </ChartDiv>
      <Button
        background="buttonBackground2"
        width="80%"
        height="3.7rem"
        onClick={() => {
          toggleFunction(false);
          dispatch(clearPokedex());
        }}
      >
        <span>Clear Pokedex</span>
      </Button>
    </Container>
  );
};

Pokedex.propTypes = {
  toggleFunction: PropTypes.func.isRequired,
};

export default Pokedex;
