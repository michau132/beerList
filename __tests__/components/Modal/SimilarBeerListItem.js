import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SimilarBeerListItem from '../../../src/components/Modal/SimilarBeerListItem';

describe('<SimilarBeerListItem /> component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      id: 1,
      image_url: 'https://via.placeholder.com/150',
      name: 'Beer',
    };
    wrapper = shallow(<SimilarBeerListItem {...props} />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('renders Image correctly', () => {
    const img = wrapper.find('Image');
    expect(img.prop('src')).toEqual(props.image_url);
    expect(img.prop('alt')).toEqual(props.name);
  });
});
