import React, { Fragment } from 'react';
import styled from 'styled-components';
import CloseBtn from '../components/CloseBtn';

const ErrorP = styled.p`
  color: red;
`;

const withError = Component => (props) => {
  const { error } = props;
  if (error) {
    return (
      <Fragment>
        <CloseBtn />
        <ErrorP>Ups something goes wrong</ErrorP>
      </Fragment>
    );
  }
  return (
    <Component {...props} />
  );
};

export default withError;
