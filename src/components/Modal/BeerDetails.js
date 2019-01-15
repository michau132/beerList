/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';
import Image from '../Image';

const mediaTablet = ({ theme }) => theme.media.tablet;

const BeerDetailsCnt = styled.div`
  ${mediaTablet} {
    display: grid;
    grid-template-columns: 20% 80%;
    overflow: hidden;
  }
`;

const BeerDetailsStyle = styled.div`
  ${mediaTablet} {
    margin-left: 20px;
  }
`;

const ImgWrapper = styled.div`
  height: 220px;
  margin-bottom: 10px;
  
  ${mediaTablet} {
    margin-bottom: 0;
    height: 70%;
  }
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Tagline = styled.p`
  font-weight: lighter;
  margin-bottom: 30px;
  position: relative;
  
  :before {
    content: '';
    display: block;
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 6px;
    width: 65px;
    background: ${({ theme }) => theme.color.title}
  }
`;

const BeerAttributes = styled.div`
  margin-bottom: 10px;
  
  ${mediaTablet} {
    display: flex;
  }
`;

const BeerAttribute = styled.h4`
  font-weight: bold;
  
  ${mediaTablet} {
    margin-right: 20px;
  }
  
  span {
    font-weight: normal;
  }
`;

const Description = styled.p`
  margin-bottom: 10px;
`;


const BeerDetails = ({
  ModalStore: {
    beer: {
      image_url, name, tagline, ibu, abv, ebc, description,
    },
  },
}) => (
  <BeerDetailsCnt>
    <ImgWrapper>
      <Image src={image_url} alt={name} />
    </ImgWrapper>
    <BeerDetailsStyle>
      <Name>{name}</Name>
      <Tagline>{tagline}</Tagline>
      <BeerAttributes>
        <BeerAttribute>
                IBU:
          {' '}
          <span>{ibu || 0}</span>
        </BeerAttribute>
        <BeerAttribute>
                ABV:
          {' '}
          <span>{abv || 0}</span>
        </BeerAttribute>
        <BeerAttribute>
                EBC:
          {' '}
          <span>{ebc || 0}</span>
        </BeerAttribute>
      </BeerAttributes>
      <Description>{description}</Description>
    </BeerDetailsStyle>
  </BeerDetailsCnt>

);

BeerDetails.defaultProps = {
  ibu: 0,
  abv: 0,
  ebc: 0,
};


// BeerDetails.propTypes = {
//   image_url: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   tagline: PropTypes.string.isRequired,
//   ibu: PropTypes.number,
//   abv: PropTypes.number,
//   ebc: PropTypes.number,
//   description: PropTypes.string.isRequired,
// };


export default inject('ModalStore')(BeerDetails);
