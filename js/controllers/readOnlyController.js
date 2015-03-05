angular.module('simpleStateApp').controller('ReadOnlyCtrl', function(AppStateService) {
  
  var state = {
    get foos() { return AppStateService.select('foos').get(); },
    get bars() { return AppStateService.select('bars').get(); }
  };

  this.state = state;
});