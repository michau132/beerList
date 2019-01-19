import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { observable } from 'mobx';
import HomePage from '../../src/containers/HomePage';

const BeerListStore = observable({
  getBeers: jest.fn(),
  loading: false,
  error: null,
  lastBeer: false,
});

const props = {
  BeerListStore,
  match: { params: { id: 2 } },
  location: { pathname: '/2' },
};

describe('testing HomePage with opened Modal', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HomePage.wrappedComponent {...props} />);
  });
  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should fire ComponentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(props.BeerListStore.getBeers).toHaveBeenCalled();
  });

  test('should call onScroll fn', () => {
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'handleScroll');
    instance.forceUpdate();
    wrapper.prop('onScroll')();
    expect(spy).toHaveBeenCalled();
  });
});
