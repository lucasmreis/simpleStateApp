angular.module('simpleStateApp').controller('FooCtrl', function(AppStateService) {

  var state = {};
  var form = {
    newFoo: ''
  };

  AppStateService.listen('foos',
    function(f) { state.foos = f; });

  // changeFoos is a function that
  // only affects the foos property
  var changeFoos = AppStateService.change('foos');

  var addFoo = function(state, form) {
    // using Ramda library
    var newFoos =
      R.append(form.newFoo, state.foos);
    changeFoos(newFoos);
  };

  // exposed to the view:
  this.state = state;
  this.form = form;

  this.addFoo = addFoo;
});