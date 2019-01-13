import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import withError from '../../src/hoc/withError';

const component = () => <h1>Hi there</h1>;
const ConditionalHOC = withError(component);
const props = { error: true };

describe('testing withError HOC', () => {
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
