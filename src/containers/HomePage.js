import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, PropTypes as MobXPropTypes } from 'mobx-react';
import styled from 'styled-components';
import BeerList from '../components/BeerList';
import Header from '../components/Header';


const Main = styled.main`
  overflow-y: auto;
`;

@inject('BeerListStore')
class HomePage extends Component {
  static propTypes ={
    BeerListStore: MobXPropTypes.observableObject.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      action: PropTypes.string.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      path: PropTypes.string.isRequired,
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.scroller = React.createRef();
  }


  componentDidMount() {
    const {
      match, BeerListStore, history,
    } = this.props;
    if (match.params && match.params.id && history.action !== 'PUSH') {
      history.push({
        pathname: `/${match.params.id}`,
        state: { modal: true },
      });
      BeerListStore.getBeers();
    }

    if (match.path === '/' && history.action !== 'PUSH') {
      BeerListStore.getBeers();
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
    return (
      <Main
        onScroll={this.handleScroll}
        ref={(scroller) => {
          this.scroller = scroller;
        }}
      >
        <Header />
        <BeerList />
      </Main>
    );
  }
}

export default HomePage;
