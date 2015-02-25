angular.module('simpleStateApp').controller('ReadOnlyCtrl', function(AppStateService) {
  var state = {};

  AppStateService.listen('foos', function(f) { state.foos = f; });
  AppStateService.listen('bars', function(b) { state.bars = b; });

  this.state = state;
});