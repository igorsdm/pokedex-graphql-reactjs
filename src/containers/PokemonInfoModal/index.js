import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { capitalize } from 'lodash';

import Button from '~/components/Button';
import { apiFetch, pokemonGQLQuery } from '~/services/api';
import { addPokemonRequest } from '~/store/modules/pokemon/actions';
import { formatPokemonInfo } from '~/utils/pokemonInfo';

import { Container, Img, Name, PokemonData } from './styles';

const PokemonInfoModal = ({
  toggle,
  toggleFunction,
  pokemonName,
  pokemonImage,
  Loader,
  Circular,
  classes,
}) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [pokemonInfo, setPokemonInfo] = useState({});

  const handleAddToPokedex = useCallback(
    (name, info) => {
      const payload = {
        name,
        info,
      };

      dispatch(addPokemonRequest(payload));
      toggleFunction(false);
    },
    [dispatch, toggleFunction]
  );

  useEffect(() => {
    if (toggle && pokemonName)
      apiFetch('pokemons', pokemonGQLQuery(pokemonName))
        .then(response => {
          const formattedPokemonInfo = formatPokemonInfo(response.data.pokemon);
          setPokemonInfo(formattedPokemonInfo);
          setLoading(false);
        })
        .catch(() => {
          toast.error('Something went wrong, please try again latter!');
          toggleFunction(false);
        });

    return () => {
      setPokemonInfo({});
    };
  }, [pokemonName, toggle, toggleFunction]);

  return (
    <Container>
      {!loading && Object.keys(pokemonInfo).length ? (
        <>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Img src={pokemonImage} alt="" />
            <Name>{capitalize(pokemonName)}</Name>
          </div>
          <PokemonData>
            <div>
              <strong>ID:</strong>
              <span>{pokemonInfo.id}</span>
            </div>
            <div>
              <strong>Abilities:</strong>
              <span>{pokemonInfo.formattedAbilities}</span>
            </div>
            <div>
              <strong>Types:</strong>
              <span>{pokemonInfo.formattedTypes}</span>
            </div>
          </PokemonData>
          <Button
            background="buttonBackground2"
            width="80%"
            height="3.7rem"
            onClick={() => handleAddToPokedex(pokemonName, pokemonInfo)}
          >
            <span>Add To Pokedex</span>
          </Button>
        </>
      ) : (
        <Loader>
          <Circular className={classes.root} size="3rem" />
        </Loader>
      )}
    </Container>
  );
};

PokemonInfoModal.propTypes = {
  toggle: PropTypes.bool.isRequired,
  toggleFunction: PropTypes.func.isRequired,
  pokemonName: PropTypes.string.isRequired,
  pokemonImage: PropTypes.string.isRequired,
  Loader: PropTypes.object.isRequired,
  Circular: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default PokemonInfoModal;
