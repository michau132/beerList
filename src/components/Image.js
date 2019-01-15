import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const ImageStyles = styled.img`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  width: 100%;
`;

const Image = ({ src, alt }) => (
  <LazyLoad overflow height={180} offset={100}>
    <ImageStyles src={src} alt={alt} />
  </LazyLoad>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
