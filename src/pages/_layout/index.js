import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function RegisterLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

RegisterLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
