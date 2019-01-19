import React, { Component } from 'react';
import { observer, inject, PropTypes as MobXPropTypes } from 'mobx-react';
import styled from 'styled-components';
import BeerList from '../components/BeerList';
import Header from '../components/Header';


const Main = styled.main`
  overflow-y: scroll;
  height: 100%;
`;

const StyledIsCorrectUrl = styled.p`
  color: #ff5000;
  padding: 0 40px;
`;

@inject('BeerListStore')
@observer
class HomePage extends Component {
  static propTypes ={
    BeerListStore: MobXPropTypes.observableObject.isRequired,
  }

  constructor(props) {
    super(props);
    this.scroller = React.createRef();
    this.state = {
      isCorrectUrl: true,
    };
  }


  componentDidMount() {
    const {
      BeerListStore,
      match: { params: { id } },
      location: { pathname },
    } = this.props;
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(id) || pathname === '/') {
      BeerListStore.getBeers();
    } else {
      this.setState({
        isCorrectUrl: false,
      });
    }
  }

  handleScroll = () => {
    const { BeerListStore } = this.props;
    const { loading, error, lastBeer } = BeerListStore;
    const { scroller } = this;
    if (
      scroller
      && (scroller.scrollHeight - scroller.scrollTop) < 1000
      && !loading
      && !error
      && !lastBeer
    ) {
      BeerListStore.getBeers();
    }
  }


  render() {
    const { isCorrectUrl } = this.state;
    return (
      <Main
        onScroll={this.handleScroll}
        ref={(scroller) => {
          this.scroller = scroller;
        }}
      >
        <Header />
        <BeerList />
        {!isCorrectUrl && (
        <StyledIsCorrectUrl>
          Cannot get data, provided url at the end does not match number.
          You should replace
          {' '}
          <strong>
            &quot;
            {`${window.location.hash.substring(2)}`}
          &quot;
          </strong>
            with number like
          {' '}
          <strong>&quot;12&quot;</strong>
          .
        </StyledIsCorrectUrl>
        )}
      </Main>
    );
  }
}

export default HomePage;
