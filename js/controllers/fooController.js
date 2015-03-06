angular.module('simpleStateApp').controller('FooCtrl', function(AppStateService, PointfreeBaobab) {
  var compose = R.compose;
  var get = R.get;
  var push = PointfreeBaobab.push;

  var foosCursor = AppStateService.select('foos');

  var state = { 
    foos: foosCursor.get()
  };

  var form = {
    newFoo: ''
  };

  foosCursor.on('update', 
    function() { state.foos = foosCursor.get() });

  var addFoo = compose(
    push(foosCursor),
    get('newFoo'));

  this.state = state;
  this.form = form;

  this.addFoo = addFoo;
});