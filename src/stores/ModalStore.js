import {
  observable, action, runInAction,
} from 'mobx';
import axios from 'axios';

class ModalStore {
  @observable beer = {
    image_url: '',
    name: '',
    tagline: '',
    ibu: 0,
    abv: 0,
    ebc: 0,
    description: '',
    food_pairing: [],
  }

  @observable loading = false

  @observable error = null

  @observable similarBeers = []

  fetchData = (url) => {
    this.loading = true;
    return axios.get(url).then(data => data.data);
  }

  @action getBeer = (id) => {
    const response = this.fetchData(`https://api.punkapi.com/v2/beers/${id}`);
    response
      .then((data) => {
        const [beer] = data;
        const param = beer.ebc || 0;
        runInAction(() => {
          this.getSimilarBeers(param);
          this.beer = beer;
          this.error = null;
        });
      })
      .catch((err) => {
        runInAction(() => {
          this.error = err;
          this.loading = false;
        });
      });
  }

  @action.bound getSimilarBeers(param) {
    const response = this.fetchData(`https://api.punkapi.com/v2/beers?ebc_lt=${param}`);
    response
      .then((data) => {
        runInAction(() => {
          this.similarBeers = data.slice(0, 3);
          this.loading = false;
          this.error = null;
        });
      })
      .catch((err) => {
        runInAction(() => {
          this.error = err;
          this.loading = false;
        });
      });
  }

  @action showBeerDetails(beer) {
    const param = beer.ebc || 0;
    this.beer = beer;
    this.getSimilarBeers(param);
  }
}

export default new ModalStore();
