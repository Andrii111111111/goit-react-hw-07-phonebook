import React from 'react';
import PropTypes from 'prop-types';
import { CenteredContainer, Label, Input } from './Filter.style';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <CenteredContainer>
      <Label htmlFor="name">Find contacts by name</Label>
      <Input
        type="text"
        id="name"
        name="name"
        onChange={handleFilterChange}
        placeholder="Name"
      />
    </CenteredContainer>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func,
};
