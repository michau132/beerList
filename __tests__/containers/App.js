import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/containers/App';
import ModalSwitch from '../../src/containers/ModalSwitch';

describe('testing App component', () => {
  test('render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });

  test('ModalSwitch Route should be defined', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Route').prop('component')).toBe(ModalSwitch);
  });
});
