import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Modal } from '../../../src/components/Modal';

describe('<Modal /> component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Modal />).dive();
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
