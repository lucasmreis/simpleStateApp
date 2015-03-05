angular.module('simpleStateApp').controller('BarCtrl', function(AppStateService) {
  var compose = R.compose;
  var append = R.append;
  var get = R.get;
  var contains = R.contains;
  var not = R.not;
  var K = R.always;

  var state = {};
  var form = {
    newBar: ''
  };

  // AppStateService.listen('bars', function(b) { state.bars = b; });
  // AppStateService.listen('foos', function(f) { state.foos = f; });

  // var changeBars = AppStateService.change('bars');
  // var changeFoos = AppStateService.change('foos');

  // var addBar = function(state, form) {
  //   return compose(
  //     changeBars,
  //     append(form.newBar),
  //     get('bars')
  //     )(state);
  // };

  // var cannotAddBar = compose(
  //   not(contains('requiredFoo')),
  //   get('foos'));

  // var clearState = compose(
  //   changeBars,
  //   changeFoos,
  //   K([]))

  this.state = state;
  this.form = form;

  // this.addBar = addBar;
  // this.cannotAddBar = cannotAddBar;
  // this.clearState = clearState;
});