import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CloseBtn from '../../src/components/CloseBtn';

describe('<CloseBtn /> component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CloseBtn />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
