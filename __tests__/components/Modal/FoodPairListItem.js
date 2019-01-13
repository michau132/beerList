import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FoodPairListItem from '../../../src/components/Modal/FoodPairListItem';

describe('<FoodPairListItem /> component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      text: 'meat',
    };
    wrapper = shallow(<FoodPairListItem {...props} />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
