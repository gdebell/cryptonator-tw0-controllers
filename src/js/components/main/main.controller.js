(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['cryptoService'];

  function mainController(cryptoService) {
    /*jshint validthis: true */

    this.getNavApiResults = () => {
      console.log('get nav api results: 1');
      cryptoService.getNavRate()
      .then((results) => {
        console.log('results:', results);
        this.getNavResults = results;
      });
    };

    this.getRepApiResults = () => {
      console.log('get rep api results 1');
      cryptoService.getRepRate()
      .then((moreResults) => {
        console.log('more results', moreResults);
        this.getRepResults = moreResults;
      });
    };
  }

})();
