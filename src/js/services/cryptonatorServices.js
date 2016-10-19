(function() {
  'use strict';

  angular
    .module('cryptonator', [])
    .service('cryptoService', cryptoService);

  cryptoService.$inject = ['$http'];

  function cryptoService($http) {
    /*jshint validthis: true */
    let getNavResults = '';
    let getRepResults = '';

    this.getNavRate = (getInfo) => {
      let navApi = 'https://api.cryptonator.com/api/ticker/nav-usd';
      console.log('inside get nav rate 2');
      return $http.get(navApi)
      .then((results) => {
        console.log(results);
        return results.data.ticker.price;
      });
    };

    this.getRepRate = (getMore) => {
      let  repApi = 'https://api.cryptonator.com/api/ticker/rep-usd';
      console.log('inside rep rate 2');
      return $http.get(repApi)
      .then((moreResults) => {
        console.log(moreResults);
        return moreResults.data.ticker.price;
      });
    };
  }
})();
