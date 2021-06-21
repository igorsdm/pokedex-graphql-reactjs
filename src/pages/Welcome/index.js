import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Pokemon from '~/assets/images/pokemon-logo.png';
import Pokemon2x from '~/assets/images/pokemon-logo@2x.png';
import Pikachu from '~/assets/images/pikachu.png';

import Button from '~/components/Button';
import Select from '~/components/Select';

import ThemeList from '~/containers/ThemeList';

import { Container, Header, Body, Footer } from './styles';

const Home = () => {
  const [toggleSelectTheme, setToggleSelectTheme] = useState(false);
  const history = useHistory();

  return (
    <Container>
      <Header>
        <picture>
          <source
            media="(min-height: 768px) and (min-width:606px)"
            srcSet={Pokemon2x}
          />
          <img src={Pokemon} alt="pokemon" />
        </picture>
      </Header>
      <Body>
        <Button
          background="buttonBackground1"
          width="20rem"
          height="3.7rem"
          onClick={() => {
            history.push('/home');
          }}
        >
          <span>Let's go!</span>
        </Button>
        <Select
          toggle={toggleSelectTheme}
          setToggle={setToggleSelectTheme}
          placeholder="Change Theme"
          width="15rem"
        >
          <ThemeList setToggle={setToggleSelectTheme} />
        </Select>
      </Body>
      <Footer>
        <picture>
          <img src={Pikachu} alt="pokemon" />
        </picture>
      </Footer>
    </Container>
  );
};

export default Home;
