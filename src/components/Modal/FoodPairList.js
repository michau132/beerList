import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FoodPairListItem from './FoodPairListItem';

const FoodPairListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 10px;
  
  ${({ theme }) => theme.media.desktop} {
    margin-bottom: 20px;
  }
`;

const FoodPairList = ({ food_pairing }) => (
  <FoodPairListStyle>
    <h4>Best served with:</h4>
    {
      food_pairing.map(item => (
        <FoodPairListItem key={item} text={item} />
      ))
    }
  </FoodPairListStyle>
);

FoodPairList.propTypes = {
  food_pairing: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FoodPairList;
