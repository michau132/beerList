import React from 'react';
import { observable } from 'mobx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BeerListItem } from '../../src/components/BeerListItem';

const ModalStore = observable({
  showBeerDetails: jest.fn(),
});

describe('<BeerListItem /> component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      beer: {
        id: 1,
        image_url: 'https://via.placeholder.com/150',
        name: 'Beer',
        tagline: 'Drink or die',
      },
      ModalStore,
      history: {
        push: jest.fn(),
      },

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
    expect(img.prop('src')).toEqual(props.beer.image_url);
    expect(img.prop('alt')).toEqual(props.beer.name);
  });

  test('firing handleClick ', () => {
    wrapper.simulate('click');
    expect(props.history.push).toHaveBeenCalledWith({
      pathname: '/1',
      state: { modal: true },
    });
    expect(props.ModalStore.showBeerDetails).toHaveBeenCalledWith(props.beer);
  });
});
