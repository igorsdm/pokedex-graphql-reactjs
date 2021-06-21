import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { map } from 'lodash';
import PropTypes from 'prop-types';

import { themeList } from '~/utils/themeList';

import { changeTheme } from '~/store/modules/user/actions';

import { Container, ListItem } from './styles';

const ThemeList = ({ setToggle }) => {
  const dispatch = useDispatch();

  const handleChangeTheme = useCallback(
    theme => {
      dispatch(changeTheme(theme));
      setToggle(false);
    },
    [dispatch, setToggle]
  );

  return (
    <Container>
      {map(themeList, theme => (
        <ListItem
          key={theme.name}
          onClick={() => {
            handleChangeTheme(theme.name);
          }}
        >
          <img src={theme.thumbnailImage} alt="" />
          <strong>{theme.name}</strong>
        </ListItem>
      ))}
    </Container>
  );
};

ThemeList.propTypes = {
  setToggle: PropTypes.func.isRequired,
};

export default ThemeList;
