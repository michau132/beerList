import React, { Fragment } from 'react';
import styled from 'styled-components';
import Image from '../components/Image';

const ImgWrapper = styled.div`
  height: 500px;
`;

const LastBeer = Component => (props) => {
  const { lastBeer } = props;

  return (
    <Fragment>
      <Component {...props} />
      {lastBeer
        && (
        <div>
          <h2>Sorry there is no more beer</h2>
          <ImgWrapper>
            <Image src="https://previews.123rf.com/images/alexutemov/alexutemov1605/alexutemov160500656/56958969-stop-drink-no-beer-design-and-vector-illustration-stop-drink-stop-drink-alcohol-glass-no-sign-beer-s.jpg" alt="no beer" />
          </ImgWrapper>
        </div>
        )
      }
    </Fragment>
  );
};

export default LastBeer;
