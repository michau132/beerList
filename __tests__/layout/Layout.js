import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Layout from '../../src/layout/Layout';

describe('testing Layout component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('to match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
