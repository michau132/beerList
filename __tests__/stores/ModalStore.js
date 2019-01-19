import { observable } from 'mobx';
import ModalStore from '../../src/stores/ModalStore';

describe('testing ModalStore', () => {
  beforeEach(() => {
    ModalStore.getBeer();
  });
  test('should import beer info', () => {
    expect(ModalStore.beer).toEqual(observable(
      {
        id: 1,
        image_url: 'https://via.placeholder.com/150',
        name: 'Beer',
        tagline: 'Drink or die',
        ibu: 15,
        abv: 12,
        ebc: 8,
        food_pairing: [
          'meat', 'vegetables',
        ],
      },
    ));
  });

  test('should set loading to false', () => {
    expect(ModalStore.loading).toBeFalsy();
  });

  test('should call getSimilarBeers', () => {
    const spy = jest.spyOn(ModalStore, 'getSimilarBeers');
    ModalStore.showBeerDetails({
      id: 1,
      image_url: 'https://via.placeholder.com/150',
      name: 'Beer',
      tagline: 'Drink or die',
      ibu: 15,
      abv: 12,
      ebc: 8,
      food_pairing: [
        'meat', 'vegetables',
      ],
    });

    expect(spy).toHaveBeenCalledWith(8);
  });
});
