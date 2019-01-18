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
  // error on Modal
  if (errorOnModal) {
    return (
      <Fragment>
        <ErrorP>Cannot get data, probably beer that you are looking for, does not exist</ErrorP>
      </Fragment>
    );
  }
  // error on HomePage container when it fails loadings
  const { BeerListStore: { errorUrl, error: errorOnHomePage } = {} } = props;
  // eslint-disable-next-line react/destructuring-assignment


  const errorUrlText = <ErrorP>Cannot get data, provided url does not match number. Correct url http://url.com/1 if you provided </ErrorP>;
  const errorOnHomePageText = <ErrorP>Cannot get data, check your internet connection</ErrorP>;
  return (
    <Fragment>
      <Component {...props} />
      {errorOnHomePage && (
      <ErrorWrapper>
        {errorOnHomePage && errorOnHomePageText}
        {errorUrl && errorUrlText}
      </ErrorWrapper>
      )}
    </Fragment>
  );
};

export default withError;
