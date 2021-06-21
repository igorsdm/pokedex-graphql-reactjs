import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

const DefaultButton = ({ children, ...rest }) => {
  return (
    <Button {...rest}>
      <div>{children}</div>
    </Button>
  );
};

DefaultButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

export default DefaultButton;
