import React from 'react';
import { compose } from 'recompose';
import { Spring } from 'react-spring';
import BeerDetails from './BeerDetails';
import SimilarBeerList from './SimilarBeerList';
import FoodPairList from './FoodPairList';
import withLoading from '../../hoc/withLoading';
import withError from '../../hoc/withError';


export const Modal = () => (
  <Spring
    from={{ height: 400, transform: 'scale3d(0.5, 0.5, 0.5)' }}
    to={{ height: 'auto', transform: 'scale3d(1, 1, 1)' }}
    leave={{ height: 400, transform: 'scale3d(0.1, 0.1, 0.1)' }}
    config={key => (key === 'transform' ? { delay: 200 } : {})}
  >
    { (props => (
      <div style={props}>
        <BeerDetails />
        <FoodPairList />
        <SimilarBeerList />
      </div>
    ))}

  </Spring>
);


export default compose(
  withLoading,
  withError,
)(Modal);
