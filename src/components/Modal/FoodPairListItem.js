import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FoodPairListItemStyle = styled.li`
  padding-left: 15px;
  position: relative;
  
  :before {
    content: '';
    position: absolute;
    top: 18px;
    left: 5px;
    height: 2px;
    width: 5px;
    background: ${({ theme }) => theme.color.modal}
  }
`;

const FoodPairListItem = ({ text }) => (
  <FoodPairListItemStyle>
    {text}
  </FoodPairListItemStyle>
);

FoodPairListItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FoodPairListItem;
