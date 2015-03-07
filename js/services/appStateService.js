angular.module('simpleStateApp').factory('AppStateService', function(StorageService) {
  var state = new Baobab(
    StorageService.load('baobab'),
    { 
      asynchronous: false,
      maxHistory: 10
    }
  );

  return state;
});