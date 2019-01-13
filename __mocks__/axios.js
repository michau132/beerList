
const mockNoop = () => new Promise(() => {});

export default {
  get: jest.fn(() => Promise.resolve({
    data: [{
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
    }],
  })),
  default: mockNoop,
  post: mockNoop,
  put: mockNoop,
  delete: mockNoop,
  patch: mockNoop,

};
