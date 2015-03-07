angular.module('simpleStateApp').controller('BarCtrl', function(AppStateService, PointfreeBaobab) {
  var compose = R.compose;
  var get = R.get;
  var not = R.not;
  var contains = R.contains;
  var push = PointfreeBaobab.push;
  var edit = PointfreeBaobab.edit;

  var foosCursor = AppStateService.select('foos');
  var barsCursor = AppStateService.select('bars');

  var state = AppStateService.get();

  var form = {
    newBar: ''
  };

  foosCursor.on('update', 
    function() { state.foos = foosCursor.get(); });

  barsCursor.on('update', 
    function() { state.bars = barsCursor.get(); });

  var addBar = compose(
    push(barsCursor),
    get('newBar'));

  var cannotAddBar = compose(
    not(contains('requiredFoo')),
    get('foos'));

  var clearState = function() {
    compose(
      edit(barsCursor),
      edit(foosCursor)
    )([]);
  };

  var undo = function() { 
    if (AppStateService.hasHistory()) { 
      AppStateService.undo(); 
    }
  };

  this.state = state;
  this.form = form;

  this.addBar = addBar;
  this.cannotAddBar = cannotAddBar;
  this.clearState = clearState;
  this.undo = undo;
});