/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { observer, inject } from 'mobx-react';
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
  beer, ModalStore, history,
}) => {
  const {
    id, image_url, name, tagline,
  } = beer;
  const handleClick = () => {
    history.push({
      pathname: `/${id}`,
      state: { modal: true },
    });
    ModalStore.showBeerDetails(beer);
  };
  return (
    <BeerListItemStyle
      onClick={handleClick}
    >
      <div>
        <ImgWrapper>
          <Image src={image_url} alt={name} overflow />
        </ImgWrapper>
      </div>
      <BeerName>{name}</BeerName>
      <BeerDesc>
        {tagline}
      </BeerDesc>
    </BeerListItemStyle>
  );
};

// BeerListItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   image_url: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   tagline: PropTypes.string.isRequired,
// };

export default compose(
  inject('ModalStore'),
  observer,
  withRouter,
)(BeerListItem);
