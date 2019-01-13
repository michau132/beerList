import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import CloseBtn from '../CloseBtn';
import BeerDetails from './BeerDetails';
import SimilarBeerList from './SimilarBeerList';
import FoodPairList from './FoodPairList';
import withLoading from '../../hoc/withLoading';
import withError from '../../hoc/withError';


export const Modal = ({ beer, similarBeers }) => (
  <Fragment>
    <CloseBtn />
    <BeerDetails {...beer} />
    <FoodPairList food_pairing={beer.food_pairing} />
    <SimilarBeerList similarBeers={similarBeers} />
  </Fragment>
);


Modal.propTypes = {
  beer: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    ibu: PropTypes.number,
    abv: PropTypes.number,
    ebc: PropTypes.number,
    description: PropTypes.string.isRequired,
    food_pairing: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  similarBeers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};


export default compose(withLoading, withError)(Modal);
