angular.module('simpleStateApp').controller('FooCtrl', function(AppStateService) {
  var compose = R.compose;
  var append = R.append;
  var get = R.get;

  var state = {};
  var form = {
    newFoo: ''
  };

  AppStateService.listen('foos', function(f) { state.foos = f; });

  var changeFoos = AppStateService.change('foos');

  var addFoo = function(state, form) {
    return compose(
      changeFoos,
      append(form.newFoo),
      get('foos')
      )(state);
  };

  this.state = state;
  this.form = form;

  this.addFoo = addFoo;
});