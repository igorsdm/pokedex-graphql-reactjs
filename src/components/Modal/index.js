import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import { Container, ModalCard } from './styles';

export default function Modal({ toggle, toggleFunction, children }) {
  const ref = useRef();
  const [display, setDisplay] = useState(toggle);

  const handleOnCancelClick = useCallback(() => {
    toggleFunction(false);
  }, [toggleFunction]);

  useEffect(() => {
    setDisplay(toggle);
  }, [toggle]);

  return (
    <Container ref={ref} visible={display} onClick={handleOnCancelClick}>
      <ModalCard
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {children}
      </ModalCard>
    </Container>
  );
}

Modal.propTypes = {
  toggle: PropTypes.bool,
  toggleFunction: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

Modal.defaultProps = {
  toggle: false,
};
