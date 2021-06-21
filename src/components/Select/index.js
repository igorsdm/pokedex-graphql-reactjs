import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { BsChevronDown } from 'react-icons/bs';

import Modal from '../Modal';
import { InputGroup } from './styles';

const Select = ({ children, placeholder, toggle, setToggle, ...rest }) => {
  const handleToggleModal = useCallback(() => {
    setToggle(!toggle);
  }, [toggle, setToggle]);

  return (
    <>
      <InputGroup {...rest} onClick={handleToggleModal}>
        <span>{placeholder}</span>
        <BsChevronDown size="2.5rem" />
      </InputGroup>
      <Modal toggle={toggle} toggleFunction={setToggle}>
        {children}
      </Modal>
    </>
  );
};

Select.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  placeholder: PropTypes.string.isRequired,
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
};

export default Select;
