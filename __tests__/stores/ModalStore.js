import { when, observable } from 'mobx';
import ModalStore from '../../src/stores/ModalStore';

describe('testing ModalStore', () => {
  test('should import beer info', () => {
    ModalStore.getBeer();
    when(
      () => ModalStore.beer.name > 0,
      () => expect(ModalStore.beerList).toEqual(observable([
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
      ])),
    );
  });

  test('should call getSimilarBeers fn', () => {
    ModalStore.getBeer();
    when(
      () => ModalStore.beer.name > 0,
      () => expect(ModalStore.getSimilarBeers).toHaveBeenCalledWith(8),
    );
  });

  test('should set loading to true', () => {
    ModalStore.getBeer();
    when(
      () => ModalStore.beer.name === 0,
      () => expect(ModalStore.loading).toEqual(true),
    );
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
