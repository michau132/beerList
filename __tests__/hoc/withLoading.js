import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import withLoading from '../../src/hoc/withLoading';

const component = () => <h1>Hi there</h1>;
const ConditionalHOC = withLoading(component);
const props = { loading: true };

describe('testing withLoading HOC', () => {
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
