angular.module('simpleStateApp').factory('AppStateService', function(StateService) {
  var state = {
    foos: [1, 2, 3],
    bars: ['a', 'b', 'c']
  };

  var listeners = [];

  var get    = StateService.get(state);
  var change = StateService.change(state, listeners);
  var listen = StateService.listen(state, listeners);

  return {
    get: get,
    change: change,
    listen: listen
  };
});