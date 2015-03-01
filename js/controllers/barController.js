angular.module('simpleStateApp').controller('BarCtrl', function(AppStateService) {
  var compose = R.compose;
  var append = R.append;
  var get = R.get;
  var contains = R.contains;
  var not = R.not;

  var state = {};
  var form = {
    newBar: ''
  };

  AppStateService.listen('bars', function(b) { state.bars = b; });
  AppStateService.listen('foos', function(f) { state.foos = f; });

  var changeBars = AppStateService.change('bars');

  var addBar = function(state, form) {
    return compose(
      changeBars,
      append(form.newBar),
      get('bars')
      )(state);
  };

  function log(x) { return function(y) { console.log(x, y); return y; }; };

  var cannotAddBar = compose(
    not(contains('requiredFoo')),
    get('foos'));

  this.state = state;
  this.form = form;

  this.addBar = addBar;
  this.cannotAddBar = cannotAddBar;
});