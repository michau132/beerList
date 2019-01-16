import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const Loading = () => (
  <div>loading...</div>
);

const ImageStyles = styled.img`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  width: 100%;
`;

const Image = ({ src, alt, overflow }) => (
  <LazyLoad
    overflow={overflow}
    height={180}
    offset={100}
    once
    placeholder={<Loading />}
    debounce={500}
  >
    <ImageStyles src={src} alt={alt} />
  </LazyLoad>
);

Image.defaultProps = {
  overflow: false,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  overflow: PropTypes.bool,
};

export default Image;
