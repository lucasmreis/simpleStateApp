angular.module('simpleStateApp').factory('AppStateService', function(StateService) {
  var state = new Baobab({
    foos: [1, 2, 3],
    bars: ['a', 'b', 'c']
  });
  
  return state;
});