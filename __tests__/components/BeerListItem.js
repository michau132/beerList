import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BeerListItem from '../../src/components/BeerListItem';

describe('<BeerListItem /> component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      id: 1,
      image_url: 'https://via.placeholder.com/150',
      name: 'Beer',
      tagline: 'Drink or die',
      handleClick: jest.fn(),
    };
    wrapper = shallow(<BeerListItem {...props} />);
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

  test('firing handleClick ', () => {
    wrapper.simulate('click', { id: 1 });
    expect(props.handleClick).toHaveBeenCalledWith(props.id);
  });
});
