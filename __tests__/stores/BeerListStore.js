import { when, observable } from 'mobx';
import BeerListStore from '../../src/stores/BeerListStore';

describe('testing BeerListStore', () => {
  test('should import data', () => {
    BeerListStore.getBeers();
    when(
      () => BeerListStore.beerList.length > 0,
      () => expect(BeerListStore.beerList).toEqual(observable([
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
        {
          id: 2,
          image_url: 'https://via.placeholder.com/350',
          name: 'no',
          tagline: 'dont drink',
          ibu: 0,
          abv: 0,
          ebc: 0,
          food_pairing: [
            'hamburger', 'chicken',
          ],
        }])),
    );
  });

  test('should increase current page', () => {
    BeerListStore.getBeers();
    when(
      () => BeerListStore.beerList.length > 0,
      () => expect(BeerListStore.currentPage).toEqual(1),
    );
  });

  test('should set loading to true', () => {
    BeerListStore.getBeers();
    when(
      () => BeerListStore.beerList.length === 0,
      () => expect(BeerListStore.loading).toEqual(true),
    );
  });

  test('should set last beer to true', () => {
    BeerListStore.getBeers();
    when(
      () => BeerListStore.beerList.length === 0,
      () => expect(BeerListStore.lastBeer).toEqual(true),
    );
  });
});
