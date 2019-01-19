import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ModalSwitch from '../../src/containers/ModalSwitch';
import HomePage from '../../src/containers/HomePage';
import ModalContainer from '../../src/containers/ModalContainer';

const props = {
  location: {
    pathname: '/2',
    state: {
      modal: true,
    },
  },
};

describe('<ModalSwitch/>', () => {
  describe('component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<ModalSwitch {...props} />);
    });

    test('renders as expected', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders without crashing', () => {
      expect(wrapper).toBeDefined();
    });

    test('routes "/" to HomePage', () => {
      expect(wrapper.find('Route[exact=true][path="/"]').first().prop('component')).toBe(HomePage);
    });

    test('routes "/:id" to HomePage', () => {
      expect(wrapper.find('Route[exact=true][path="/:id"]').first().prop('component')).toBe(HomePage);
    });

    test('routes "/:id" and should be defined', () => {
      expect(wrapper.find('Route[path="/:id"]').not('[exact=true]').prop('component')).toBe(ModalContainer);
    });
  });
});
