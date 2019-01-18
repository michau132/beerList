import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import LazyLoad, { forceCheck } from 'react-lazyload';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const LoadingSpinner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::after {
    content: '';
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid ${({ theme }) => theme.color.title};
    width: 50px;
    height: 50px;
    animation: ${spin} 2s linear infinite;
  }
`;

const ImageStyles = styled.img`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  width: 100%;
`;

const Image = ({
  src, alt, overflow, modal,
}) => {
  if (modal) {
    forceCheck();
  }
  return (
    <LazyLoad
      overflow={overflow}
      height={180}
      offset={100}
      once
      placeholder={<LoadingSpinner />}
      debounce={500}
    >
      <ImageStyles src={src} alt={alt} data-test="image" />
    </LazyLoad>
  );
};

Image.defaultProps = {
  overflow: false,
  modal: false,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  overflow: PropTypes.bool,
  modal: PropTypes.bool,
};

export default Image;
