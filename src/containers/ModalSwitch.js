import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import BeerListContainer from './BeerListContainer';
import Modal from '../components/Modal';
import Header from '../components/Header';
import BeerList from '../components/BeerList';
import ModalContainer from './ModalContainer';


export const WrappedBeerList = props => (
  <BeerListContainer
    {...props}
    render={beerListContainerProps => (
      <Fragment>
        <Header />
        <BeerList {...beerListContainerProps} />
      </Fragment>
    )}
  />
);


class ModalSwitch extends Component {
  static propTypes = {
    location: PropTypes.shape({
      state: PropTypes.shape({
        modal: PropTypes.bool.isRequired,
      }),
    }).isRequired,
  }

  // eslint-disable-next-line react/destructuring-assignment
  previousLocation = this.props.location;


  componentDidUpdate(nextProps) {
    const { location } = this.props;
    if (
      nextProps.history.action !== 'POP'
      && (!location.state || !location.state.modal)
    ) {
      this.previousLocation = location;
    }
  }


  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state
      && location.state.modal
    );
    return (
      <Fragment>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route
            exact
            path="/"
            component={WrappedBeerList}
          />
          <Route
            path="/:id"
            exact
            component={WrappedBeerList}
          />
        </Switch>
        {
          isModal ? (
            <Route
              path="/:id"
              component={props => (
                <ModalContainer
                  {...props}
                  render={store => <Modal {...store} />}
                />)}
            />
          ) : null
        }
      </Fragment>
    );
  }
}

export default ModalSwitch;
