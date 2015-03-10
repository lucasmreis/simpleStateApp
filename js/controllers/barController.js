angular.module('simpleStateApp').controller('BarCtrl', function(AppStateService) {

  var state = {};
  var form = {
    newBar: ''
  };

  AppStateService.listen('bars', function(b) { state.bars = b; });
  AppStateService.listen('foos', function(f) { state.foos = f; });

  var changeBars = AppStateService.change('bars');
  var changeFoos = AppStateService.change('foos');

  var addBar = function(state, form) {
    var newBars =
      R.append(form.newBar, state.bars);
    changeFoos(newBars);
  };

  var cannotAddBar = function(state) {
    return state.foos.indexOf('requiredFoo') === -1;
  };

  var clearState = function() {
    changeFoos([]);
    changeBars([]);
  };

  this.state = state;
  this.form = form;

  this.addBar = addBar;
  this.cannotAddBar = cannotAddBar;
  this.clearState = clearState;
});