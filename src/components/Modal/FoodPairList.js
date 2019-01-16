import React from 'react';
import styled from 'styled-components';
import { inject, PropTypes } from 'mobx-react';
import FoodPairListItem from './FoodPairListItem';

const FoodPairListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 10px;
  
  ${({ theme }) => theme.media.desktop} {
    margin-bottom: 20px;
  }
`;

const FoodPairList = ({
  ModalStore: {
    beer: {
      food_pairing,
    },
  },
}) => (
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
  ModalStore: PropTypes.observableObject.isRequired,
};

export default inject('ModalStore')(FoodPairList);
