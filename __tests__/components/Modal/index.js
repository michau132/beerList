import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Modal } from '../../../src/components/Modal';

const props = {
  beer: {
    id: 1,
    image_url: 'https://via.placeholder.com/150',
    name: 'Beer',
    tagline: 'Drink or die',
    ibu: 12,
    abv: 6,
    ebc: 32,
    description: 'Some description',
    food_pairing: ['meat', 'vegetables'],
  },
  similarBeers: [
    {
      id: 1,
      image_url: 'https://via.placeholder.com/150',
      name: 'Beer',
    },
    {
      id: 2,
      image_url: 'https://via.placeholder.com/300',
      name: 'Second One',
    },
  ],
  loading: false,
  theme: {
    media: {
      desktop: '15px',
    },
  },
};

describe('<Modal /> component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Modal {...props} />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('renders <CloseBtn/>', () => {
    expect(wrapper.find('CloseBtn')).toHaveLength(1);
  });

  test('renders <FoodPairList/>', () => {
    const FoodPairList = wrapper.find('FoodPairList');
    expect(FoodPairList).toHaveLength(1);
    expect(FoodPairList.prop('food_pairing')).toEqual(props.beer.food_pairing);
  });
});
