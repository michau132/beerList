import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Image from '../../src/components/Image';

describe('<Image /> component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      src: 'https://via.placeholder.com/150',
      alt: 'Beer',
    };
    wrapper = shallow(<Image {...props} />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('renders Image correctly', () => {
    expect(wrapper.prop('src')).toEqual(props.src);
    expect(wrapper.prop('alt')).toEqual(props.alt);
  });

});
