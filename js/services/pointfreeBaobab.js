angular.module('simpleStateApp').factory('PointfreeBaobab', function() {
  var curry = R.curry;

  var push = curry(function(cursor, x) {
    return cursor.push(x).get();
  });

  var edit = curry(function(cursor, x) {
    return cursor.edit(x).get();
  });

  var set = curry(function(cursor, prop, x) {
    return cursor.set(prop, x).get();
  });

  return {
    push: push,
    edit: edit,
    set: set
  };
});