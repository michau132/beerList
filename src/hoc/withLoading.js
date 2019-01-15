import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
  ${({ loadingPosition }) => (loadingPosition
    ? 'position: absolute; bottom: 0'
    : 'position: fixed; top: 40%'
  )};
  left: 46%;
  transform: translate(-50%, -50%);
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid ${({ theme }) => theme.color.title};
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

const LoadingWrapper = styled.div`
  position: relative;
`;


const withLoading = Component => (props) => {
  // checking if the modal is rendering and return only LoadingSpinner
  const { loading, beer } = props;
  if (beer && loading) {
    return (
      <LoadingSpinner />);
  }

  // checking if beerlist is rendering or loading more beers
  const { BeerListStore: { beerList, loading: loadingBeers } = {} } = props;

  // positioning spinner to infinite scroll and if beerList have data make position to bottom: 0;
  let loadingPosition;
  if (beerList && beerList.length > 0) {
    loadingPosition = true;
  }
  return (
    <LoadingWrapper>
      <Component {...props} />
      {loadingBeers && <LoadingSpinner loadingPosition={loadingPosition} />}
    </LoadingWrapper>
  );
};

export default withLoading;
