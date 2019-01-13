import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image from '../Image';

const SimilarBeerListStyle = styled.li`
  width: 180px;
  padding: 10px;
  background-color: #fff;
  display: inline-block;
  transition: .5s all;
  margin-bottom: 10px;
  box-shadow: 0px 0px 4px 1px rgba(122,122,122,0.9);
  
  ${({ theme }) => theme.media.tablet} {
    margin-right: 15px;
    box-shadow: 0px 0px 4px 1px rgba(122,122,122,0.9);
    
    :hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 19px 4px rgba(122,122,122,1);
    }
  }
`;


const SimilarBeerListImgWrapper = styled.div`
  height: 100px;
`;

const BeerName = styled.div`
  font-weight: bold;
`;


const SimilarBeerListItem = ({ id, image_url, name }) => (
  <SimilarBeerListStyle key={id}>
    <Link to={{ pathname: `/${id}`, state: { modal: true } }}>
      <SimilarBeerListImgWrapper>
        <Image src={image_url} alt={name} />
      </SimilarBeerListImgWrapper>
      <BeerName>{name}</BeerName>
    </Link>
  </SimilarBeerListStyle>
);

SimilarBeerListItem.propTypes = {
  id: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SimilarBeerListItem;
