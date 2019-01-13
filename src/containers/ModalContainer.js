import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { inject, observer, PropTypes as MobXPropTypes } from 'mobx-react';
import { toJS } from 'mobx';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(122,122,122, 0.5);
  padding: 10px;
  z-index: 10;
  
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ModalStyles = styled.div`
  background-color: #fff;
  padding: 10px;
  height: 100%;
  
  @media (min-width: 1024px) {
    height: calc(100vh - 40px);
    width: 910px;
  }
`;

@inject('ModalStore')
@observer
class ModalContainer extends Component {
  static propTypes = {
    ModalStore: MobXPropTypes.observableObject.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  }

  componentDidMount() {
    const { match, ModalStore } = this.props;
    ModalStore.getBeer(match.params.id);
  }

  render() {
    const { ModalStore, render } = this.props;
    const store = toJS(ModalStore);
    return (
      <ModalWrapper>
        <ModalStyles>
          {render({ ...store })}
        </ModalStyles>
      </ModalWrapper>
    );
  }
}

export default ModalContainer;
