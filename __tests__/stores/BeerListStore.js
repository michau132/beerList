import { when, observable } from 'mobx';
import BeerListStore from '../../src/stores/BeerListStore';

describe('testing BeerListStore', () => {
  beforeEach(() => {
    BeerListStore.getBeers();
  });
  test('should import data', () => {
    expect(BeerListStore.beerList).toEqual(observable([
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
      }]));
  });

  test('should increase current page', () => {
    expect(BeerListStore.currentPage).toEqual(2);
  });

  test('should set loading to false', () => {
    expect(BeerListStore.loading).toBeFalsy();
  });

  test('should set last beer to false', () => {
    console.log(BeerListStore);
    expect(BeerListStore.lastBeer).toBeFalsy();
  });
  describe('second ', () => {
    
  })
  
});
