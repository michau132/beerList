import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LastBeer from '../../src/hoc/lastBeer';

const component = () => <h1>Hi there</h1>;
const ConditionalHOC = LastBeer(component);
const props = { lastBeer: true };

describe('testing LastBeer HOC', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ConditionalHOC {...props} />);
  });
  test('should render component when loading is set to true', () => {
    expect(wrapper).toBeDefined();
  });

  test('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
