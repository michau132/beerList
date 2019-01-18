import React from 'react';
import { shallow } from 'enzyme';
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
};


describe('testing ModalContainer with opened Modal', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ModalContainer.wrappedComponent {...props} />);
  });
  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('should fire ComponentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(props.ModalStore.getBeer).toHaveBeenCalledWith('2');
  });

  test('should fire ComponentDidUpdate', () => {
    wrapper.setProps({
      match: {
        params: {
          id: '1',
        },
      },
    });
    expect(props.ModalStore.getBeer).toHaveBeenCalledWith('1');
  });
});
