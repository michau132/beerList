import {
  observable, action, runInAction,
} from 'mobx';
import axios from 'axios';

class BeerListStore {
  @observable beerList = [];

  @observable currentPage = 0;

  @observable loading = false;

  @observable error = null;

  @observable lastBeer = false;

  @observable errorUrl = false;

  fetchData(url) {
    this.loading = true;
    return axios.get(url).then(data => data.data);
  }


  @action getBeers() {
    const options = {
      page: this.currentPage,
      per_page: 20,
    };
    const response = this.fetchData(`https://api.punkapi.com/v2/beers?page=${options.page + 1}&per_page=${options.per_page}`);

    response
      .then((data) => {
        if (data.length > 0) {
          runInAction(() => {
            this.beerList = [...this.beerList, ...data];
            this.currentPage = this.currentPage + 1;
            this.loading = false;
            this.error = null;
          });
        } else {
          runInAction(() => {
            this.lastBeer = true;
            this.loading = false;
            this.error = null;
          });
        }
      })
      .catch((err) => {
        runInAction(() => {
          this.error = err;
          this.loading = false;
        });
      });
  }

  @action setError = () => {
    this.errorUrl = true;
  }
}

export default new BeerListStore();
