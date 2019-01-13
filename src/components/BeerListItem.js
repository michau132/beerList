import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Image';

const BeerListItemStyle = styled.li`
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 4px 1px rgba(122,122,122,0.9);
  transition: .5s all;
  text-align: center;
  margin: 20px;
  width: 320px;
  cursor: pointer;
  
  :hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 29px 9px rgba(122,122,122,1);
  }
`;

const ImgWrapper = styled.div`
  height: 180px;
  margin-bottom: 10px;
`;

const BeerName = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.color.title};
  font-weight: bold;
`;

const BeerDesc = styled.div`
  font-size: 18px;
  color: #b7b7b7;
`;

const BeerListItem = ({
  id, image_url, name, tagline, handleClick,
}) => (
  <BeerListItemStyle
    onClick={() => handleClick(id)}
  >
    <div>
      <ImgWrapper>
        <Image src={image_url} alt={name} />
      </ImgWrapper>
    </div>
    <BeerName>{name}</BeerName>
    <BeerDesc>
      {tagline}
    </BeerDesc>
  </BeerListItemStyle>
);

BeerListItem.propTypes = {
  id: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default BeerListItem;
