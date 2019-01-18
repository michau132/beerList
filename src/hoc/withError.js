import React, { Fragment } from 'react';
import styled from 'styled-components';

const ErrorP = styled.p`
  color: red;
`;

const ErrorWrapper = styled.div`
    position: absolute;
    bottom: 1%;
    font-size: 24px;
    width: 100%;
    text-align: center;
`;

const withError = Component => (props) => {
  const { error: errorOnModal } = props;
  console.log(props);
  // error on Modal
  if (errorOnModal) {
    return (
      <Fragment>
        <ErrorP>Cannot get data, check your internet connection</ErrorP>
      </Fragment>
    );
  }

  // error on HomePage container when it fails loading
  const { BeerListStore: { error: errorOnHomePage } = {} } = props;

  return (
    <Fragment>
      <Component {...props} />
      {errorOnHomePage && (
      <ErrorWrapper>
        <ErrorP>Cannot get data, check your internet connection</ErrorP>
      </ErrorWrapper>
      )}
    </Fragment>
  );
};

export default withError;
