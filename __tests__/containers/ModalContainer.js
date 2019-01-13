import React from 'react';
import { mount } from 'enzyme';
import { observable } from 'mobx';
import ModalContainer from '../../src/containers/ModalContainer';

const ModalStore = observable({
  getBeer: jest.fn(),
});

const props = {
  ModalStore,
  match: {
    params: {
      id: '2',
    },
  },
  render: jest.fn(),
};


describe('testing ModalContainer with opened Modal', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ModalContainer.wrappedComponent {...props} />);
  });
  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('should fire ComponentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(props.ModalStore.getBeer).toHaveBeenCalledWith('2');
  });
});
