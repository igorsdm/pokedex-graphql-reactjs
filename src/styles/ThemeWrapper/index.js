import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import globalTheme from '~/styles/colors';

const ThemeWrapper = ({ children }) => {
  const { theme } = useSelector(state => state.user);

  return <ThemeProvider theme={globalTheme[theme]}>{children}</ThemeProvider>;
};

ThemeWrapper.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ThemeWrapper;
