import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../src/components/Header';

describe('<Header /> component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
