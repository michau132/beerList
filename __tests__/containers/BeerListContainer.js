import React from 'react';
import { mount, shallow } from 'enzyme';
import { observable } from 'mobx';
import BeerListContainer from '../../src/containers/BeerListContainer';

const BeerListStore = observable({
  getBeers: jest.fn(),
  loading: false,
  error: null,
  lastBeer: false,
  beerList: [{ id: 1, name: 'Some beer' }],
});

const ModalStore = observable({
  showBeerDetails: jest.fn(),
});

const props = {
  history: {
    push: jest.fn(),
    action: 'POP',
  },
  render: jest.fn(),
  match: {
    params: {
      id: 1,
    },
    path: '/beer/1',
  },
  BeerListStore,
  ModalStore,
};

describe('testing BeerListContainer with opened Modal', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<BeerListContainer.wrappedComponent {...props} />);
  });
  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('should fire ComponentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(props.BeerListStore.getBeers).toHaveBeenCalled();
    expect(props.history.push).toHaveBeenCalledWith({
      pathname: `/beer/${1}`,
      state: { modal: true },
    });
  });

  test('should call onScroll fn', () => {
    const shallowWrapper = shallow(<BeerListContainer.wrappedComponent {...props} />);
    const instance = shallowWrapper.instance();
    const spy = jest.spyOn(instance, 'scroll');
    instance.forceUpdate();
    shallowWrapper.prop('onScroll')();
    expect(spy).toHaveBeenCalled();
  });

  test('method onHandleClick should be defined', () => {
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'handleClick');
    instance.handleClick(1);
    expect(spy).toHaveBeenCalledWith(1);
    expect(props.history.push).toHaveBeenCalledWith({
      pathname: `/beer/${1}`,
      state: { modal: true },
    });
    expect(props.ModalStore.showBeerDetails).toHaveBeenCalledWith({ id: 1, name: 'Some beer' });
  });
});

// describe('testing BeerListContainer main page without Modal', () => {
//   test('should call only BeerListStore.getBeers() only in ComponentDidmount', () => {
//     const newProps = { ...props, match: { params: {}, path: '/' } };
//     console.log(newProps);
//     const wrapperWithNewProps = shallow(<BeerListContainer.wrappedComponent {...newProps} />);
//     wrapperWithNewProps.instance().forceUpdate();
//     wrapperWithNewProps.update();
//     wrapperWithNewProps.instance().componentDidMount();
//     expect(newProps.BeerListStore.getBeers).toHaveBeenCalled();
//     expect(newProps.history.push).not.toHaveBeenCalled();
//     expect(newProps.ModalStore.getBeer).not.toHaveBeenCalled();
//   });
// });
