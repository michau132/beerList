import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer, PropTypes as MobXPropTypes } from 'mobx-react';
import styled from 'styled-components';
import { toJS } from 'mobx';


const Main = styled.main`
  overflow-y: auto;
`;

@inject('BeerListStore', 'ModalStore')
@observer
class BeerListContainer extends Component {
  static propTypes ={
    BeerListStore: MobXPropTypes.observableObject.isRequired,
    ModalStore: MobXPropTypes.observableObject.isRequired,
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

  scroll = () => {
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

  handleClick = (id) => {
    const { BeerListStore, ModalStore, history } = this.props;
    const BeerStore = toJS(BeerListStore);
    const foundBeer = BeerStore.beerList.find(beer => beer.id === id);
    history.push({
      pathname: `/${id}`,
      state: { modal: true },
    });
    ModalStore.showBeerDetails(foundBeer);
  }

  render() {
    const { BeerListStore, render } = this.props;
    const { handleClick } = this;
    const store = toJS(BeerListStore);
    return (
      <Main
        onScroll={this.scroll}
        ref={(scroller) => {
          this.scroller = scroller;
        }}
      >
        {
          render({ handleClick, ...store })
        }
      </Main>
    );
  }
}

export default BeerListContainer;
