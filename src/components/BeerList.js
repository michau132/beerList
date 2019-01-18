import React, { Fragment } from 'react';
import styled from 'styled-components';
import { compose } from 'recompose';
import { inject, observer, PropTypes } from 'mobx-react';
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

const BeerList = ({ BeerListStore: { beerList } }) => (
  <BeerListStyle>
    {
        beerList.map(beer => (
          <Fragment key={beer.id}>
            <BeerListItem
              beer={beer}
            />
          </Fragment>
        ))
    }
  </BeerListStyle>
);

BeerList.propTypes = {
  BeerListStore: PropTypes.observableObject.isRequired,
};

export default compose(
  inject('BeerListStore'),
  observer,
  withLoading,
  withError,
  LastBeer,
)(BeerList);
