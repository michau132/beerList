import React, { Fragment } from 'react';
import styled from 'styled-components';
import { compose } from 'recompose';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import withLoading from '../hoc/withLoading';
import withError from '../hoc/withError';
import BeerListItem from './BeerListItem';
import LastBeer from '../hoc/lastBeer';

const BeerListStyle = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
  padding-bottom: 150px;
  margin-bottom: 30px;
`;

const BeerList = ({ beerList, handleClick }) => (
  <BeerListStyle>
    {
      beerList.map(beer => (
        <Fragment key={beer.id}>
          <BeerListItem
            handleClick={handleClick}
            {...beer}
          />
        </Fragment>
      ))
    }
  </BeerListStyle>
);

BeerList.propTypes = {
  beerList: PropTypes.arrayOf(PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default compose(
  observer,
  withLoading,
  withError,
  LastBeer,
)(BeerList);
