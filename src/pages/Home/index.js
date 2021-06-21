import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import { filter, lowerCase, capitalize } from 'lodash';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IoMdSearch } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import { FaBookOpen } from 'react-icons/fa';

import Modal from '~/components/Modal';
import PokemonInfoModal from '~/containers/PokemonInfoModal';
import Pokedex from '~/containers/Pokedex';
import {
  clearPokemons,
  pokemonsRequest,
} from '~/store/modules/pokemon/actions';

import theme from '~/styles/colors';

import {
  Container,
  Header,
  Card,
  CardBody,
  ScrollY,
  Filter,
  FilterInput,
  PokemonList,
  PokemonListItem,
  Loading,
} from './styles';

export default function Home() {
  const dispatch = useDispatch();

  const { theme: selectedTheme } = useSelector(state => state.user);
  const { list: pokemonList, loading } = useSelector(state => state.pokemon);

  const [nameFilter, setNameFilter] = useState('');
  const [toggleNameFilter, setToggleNameFilter] = useState(false);

  const [togglePokemonInfoModal, setTogglePokemonInfoModal] = useState(false);
  const [togglePokedex, setTogglePokedex] = useState(false);
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');

  const useStyles = makeStyles({
    root: {
      color: `${theme[selectedTheme].colors.backgroundColor2}`,
    },
  });
  const classes = useStyles();

  const searchRef = useRef(null);

  const filteredPokemons = useMemo(() => {
    const filtered = filter(pokemonList, pokemon =>
      lowerCase(pokemon.name).includes(lowerCase(nameFilter))
    );
    return filtered;
  }, [pokemonList, nameFilter]);

  const handleNameFilter = useCallback(e => {
    setNameFilter(e.target.value);
  }, []);

  const handlePokemonInfo = useCallback((name, image) => {
    setTogglePokemonInfoModal(true);
    setPokemonImage(image);
    setPokemonName(name);
    setNameFilter('');
  }, []);

  useEffect(() => {
    const handleClickOutside = event => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        if (!nameFilter) {
          setToggleNameFilter(false);
          setNameFilter('');
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef, nameFilter]);

  useEffect(() => {
    dispatch(pokemonsRequest());

    return () => {
      dispatch(clearPokemons());
    };
  }, [dispatch]);

  return (
    <>
      <Container>
        <Header>
          <BsSearch
            size="1.3rem"
            color={theme[selectedTheme].colors.white}
            onClick={() => setToggleNameFilter(true)}
          />
          <h3>Choose Your Pokemon</h3>
          <FaBookOpen
            size="1.3rem"
            color={theme[selectedTheme].colors.white}
            onClick={() => setTogglePokedex(true)}
          />
          <Filter ref={searchRef} visible={toggleNameFilter}>
            <IoMdSearch
              style={{ marginLeft: '0.7rem', position: 'absolute' }}
              color={theme[selectedTheme].colors.gray60}
              size="1.3rem"
            />
            <FilterInput
              type="text"
              placeholder="Search"
              value={nameFilter}
              onChange={handleNameFilter}
            />
          </Filter>
        </Header>
        <Card>
          <CardBody>
            {!loading ? (
              <>
                <div>
                  <strong>Pokemon</strong>
                  <strong>Name</strong>
                </div>
                <ScrollY>
                  <PokemonList>
                    {filteredPokemons && filteredPokemons.length ? (
                      filteredPokemons.map(pokemon => (
                        <PokemonListItem
                          key={pokemon.name}
                          onClick={() => {
                            handlePokemonInfo(pokemon.name, pokemon.image);
                          }}
                        >
                          {!nameFilter ? (
                            <LazyLoad height="3rem" offset={300} overflow>
                              <img src={pokemon.image} alt="" />
                            </LazyLoad>
                          ) : (
                            <img src={pokemon.image} alt="" />
                          )}

                          <strong>{capitalize(pokemon.name)}</strong>
                        </PokemonListItem>
                      ))
                    ) : (
                      <p>Ops.. Its seems there is nothing to show here!</p>
                    )}
                  </PokemonList>
                </ScrollY>
              </>
            ) : (
              <Loading>
                <CircularProgress className={classes.root} size="5rem" />
              </Loading>
            )}
          </CardBody>
        </Card>

        {togglePokemonInfoModal && (
          <Modal
            toggle={togglePokemonInfoModal}
            toggleFunction={setTogglePokemonInfoModal}
          >
            <PokemonInfoModal
              toggle={togglePokemonInfoModal}
              toggleFunction={setTogglePokemonInfoModal}
              pokemonName={pokemonName}
              pokemonImage={pokemonImage}
              Loader={Loading}
              Circular={CircularProgress}
              classes={classes}
            />
          </Modal>
        )}
        {togglePokedex && (
          <Modal toggle={togglePokedex} toggleFunction={setTogglePokedex}>
            <Pokedex toggleFunction={setTogglePokedex} />
          </Modal>
        )}
      </Container>
    </>
  );
}
