describe('StateService', function () {
  var service;

  beforeEach(module('simpleStateApp'));
  beforeEach(inject(function(StateService) {
    service = StateService;
  }));

  it('change state works', function() {
    var state  = { simple: 'value' };
    var change = service.change(state, []);
    var get    = service.get(state);

    change('simple', 'newValue');

    expect(get()).to.deep.equal({ simple: 'newValue' });
  });

  it('passes the current data when listen is called', function() {
    var state  = { simple: 'value' };
    var subscribers = [];
    var listen = service.listen(state, subscribers);

    var sampleScope;
    listen('simple', function(v) { sampleScope = v; });

    expect(sampleScope).to.equal('value');
  });

  it('listen state works', function() {
    var state  = { simple: 'value' };
    var subscribers = [];
    var change = service.change(state, subscribers);
    var listen = service.listen(state, subscribers);

    var sampleScope;
    var unsubscribe = listen('simple', function(v) { sampleScope = v; });

    change('simple', 'newValue');

    expect(unsubscribe).to.be.a('function');
    expect(sampleScope).to.equal('newValue');

    unsubscribe();
    change('simple', 'anotherValue');
    expect(sampleScope).to.equal('newValue');
  });

  it('can only change state using change function', function() {
    var state  = {
      simple: { data: 'value' }
    };
    var subscribers = [];
    var listen = service.listen(state, subscribers);
    var get = service.get(state);

    var sampleScope;
    listen('simple', function(v) {
      sampleScope = v;
    });

    sampleScope.data = 'I changed it!';

    expect(get()).to.deep.equal({
      simple: {
        data: 'value'
      }
    });
  });

  it('only notifies listeners when subscribed object changes', function() {
    var state  = {one: 'value', another: 'value'};
    var subscribers = [];
    var change = service.change(state, subscribers);
    var listen = service.listen(state, subscribers);

    var count = 0;
    var sampleScope;
    listen('one', function(v) {
      count++;
      sampleScope = v;
    });

    change('one', 'newValue');
    expect(count).to.equal(2);

    change('another', 'anotherValue');
    expect(count).to.equal(2);
  });
});
