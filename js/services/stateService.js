angular.module('simpleStateApp').factory('StateService', function() {
  var clone = R.clone;
  var curry = R.curry;
  var filter = R.filter;

  function get(state) {
    return function() {
      return clone(state);
    };
  }

  function getStateProp(state, prop) {
    return clone(state[prop]);
  }

  var change = curry(function(state, listeners, prop, data) {
    var sameProp = filter(function(l) { return l.prop === prop; });

    state[prop] = data;

    R.forEach(function(listener) {
      listener.action(getStateProp(state, listener.prop));
    }, sameProp(listeners));

    return getStateProp(state, prop);
  });

  var listen = curry(function(state, listeners, prop, action) {
    var listener = {prop: prop, action: action};
    listeners.push(listener);

    var unsubscribe = function() {
      return listeners.splice(listeners.indexOf(listener), 1);
    };

    action(getStateProp(state, prop));

    return unsubscribe;
  });

  return {
    get: get,
    change: change,
    listen: listen
  };
});