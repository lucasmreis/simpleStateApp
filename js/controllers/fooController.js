angular.module('simpleStateApp').controller('FooCtrl', function(AppStateService) {
  var compose = R.compose;
  var append = R.append;
  var get = R.get;
  var curry = R.curry;

  var foosCursor = AppStateService.select('foos');

  var state = {
    get foos() { return foosCursor.get(); }
  };

  var form = {
    newFoo: ''
  };

  var addFoo = function(form) {
    return foosCursor.push(form.newFoo);
  };

  this.state = state;
  this.form = form;

  this.addFoo = addFoo;

  this.addFoo = addFoo;
});