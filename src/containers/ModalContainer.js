import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer, PropTypes as MobXPropTypes } from 'mobx-react';
import { toJS } from 'mobx';
import CloseBtn from '../components/CloseBtn';
import Modal from '../components/Modal';

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
  position: relative;
  overflow: hidden;
  ${({ loadingOrError }) => (loadingOrError ? 'height: 400px' : '')}
  
  @media (min-width: 1024px) {
    width: 910px;
  }
`;

@inject('ModalStore')
@observer
class ModalContainer extends Component {
  static propTypes = {
    ModalStore: MobXPropTypes.observableObject.isRequired,
  }

  componentDidMount() {
    const { match: { params: { id } }, ModalStore } = this.props;
    ModalStore.getBeer(id);
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id } }, ModalStore } = this.props;
    if (prevProps.match.params.id !== id) {
      ModalStore.getBeer(id);
    }
  }

  render() {
    const { ModalStore } = this.props;
    const store = toJS(ModalStore);
    const { loading, error } = store;
    return (
      <ModalWrapper>
        <ModalStyles loadingOrError={(loading || error) ? 1 : 0}>
          <CloseBtn />
          <Modal {...store} />
        </ModalStyles>
      </ModalWrapper>
    );
  }
}

export default ModalContainer;
