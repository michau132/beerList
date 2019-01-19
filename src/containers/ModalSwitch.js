import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './HomePage';
import ModalContainer from './ModalContainer';
import NotFoundPage from '../components/NotFoundPage';

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
    const path = location.pathname.substring(1);
    const isModal = !!(
      // eslint-disable-next-line no-restricted-globals
      !isNaN(path)
      || (location.state
      && location.state.modal)
    );
    return (
      <Fragment>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route
            exact
            path="/"
            component={HomePage}
          />
          <Route
            path="/:id"
            exact
            component={HomePage}
          />
          <Route path="*" component={NotFoundPage} />
        </Switch>
        {isModal ? (
          <Route
            path="/:id"
            component={ModalContainer}
          />
        ) : null}

      </Fragment>
    );
  }
}

export default ModalSwitch;
