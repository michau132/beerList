import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { observable } from 'mobx';
import BeerDetails from '../../../src/components/Modal/BeerDetails';

const ModalStore = observable({
  beer: {
    id: 1,
    image_url: 'https://via.placeholder.com/150',
    name: 'Beer',
    tagline: 'Drink or die',
    ibu: 12,
    abv: 6,
    ebc: 32,
    description: 'Some description',
  },
});

describe('<BeerDetails /> component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      ModalStore,
    };
    wrapper = shallow(<BeerDetails.wrappedComponent {...props} />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
