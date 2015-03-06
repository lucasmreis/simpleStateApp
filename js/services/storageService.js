angular.module('simpleStateApp').factory('StorageService', function() {
  var curry = R.curry;

  var save = curry(function(prop, items) {
    window.localStorage.setItem('simple-app-' + prop, JSON.stringify(items));
    return items;
  });

  var load = function(prop) {
    var items = JSON.parse(window.localStorage.getItem('simple-app-' + prop));
    return items ? items : [];
  };

  return {
    save: save,
    load: load
  };
});