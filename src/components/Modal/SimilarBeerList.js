import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SimilarBeerListItem from './SimilarBeerListItem';

const BeerListTitle = styled.h3`
  margin-bottom: 10px;
`;

const BeerListCnt = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
  
  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
  }
`;


const SimilarBeerList = ({ similarBeers }) => (
  <div>
    <BeerListTitle>You might also like</BeerListTitle>
    <BeerListCnt>
      {
        similarBeers.map(beer => (
          <SimilarBeerListItem key={beer.id} {...beer} />
        ))
      }
    </BeerListCnt>
  </div>
);

SimilarBeerList.propTypes = {
  similarBeers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default SimilarBeerList;
