(function() {
  'use strict';

  angular
    .module('skill')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
