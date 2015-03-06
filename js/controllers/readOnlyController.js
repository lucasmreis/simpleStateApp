angular.module('simpleStateApp').controller('ReadOnlyCtrl', function(AppStateService) {
  
  var foosCursor = AppStateService.select('foos');
  var barsCursor = AppStateService.select('bars');

  var state = AppStateService.get();

  foosCursor.on('update', 
    function() { state.foos = foosCursor.get(); console.log('FOOS', state.foos); });

  barsCursor.on('update', 
    function() { state.bars = barsCursor.get(); console.log('BARS', state.bars); });

  this.state = state;
});