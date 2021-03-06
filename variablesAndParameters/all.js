"use strict";
describe("default parameters", function() {
  it("provides defaults", function() {
    var doWork = function() {
      var name = arguments[0] !== (void 0) ? arguments[0] : "Martin";
      return name;
    };
    var result = doWork();
    expect(result).toBe("Martin");
    var result2 = doWork("Gustafsson");
    expect(result2).toBe("Gustafsson");
  });
});

"use strict";
describe("destructuring", function() {
  it("can destructure arrays", function() {
    var $__0 = [1, 3, 2],
        x = $__0[1],
        y = $__0[2],
        z = $__0[3];
    expect(x).toBe(3);
    expect(y).toBe(2);
    expect(z).toBeUndefined();
  });
  it("can destruct objects", function() {
    var doWork = function() {
      return {
        firstName: 'Martin',
        lastName: 'Gustafsson',
        handles: {twitter: 'm_gusten'}
      };
    };
    var $__0 = doWork(),
        firstName = $__0.firstName,
        twitter = $__0.handles.twitter;
    expect(firstName).toBe('Martin');
    expect(twitter).toBe('m_gusten');
  });
  it("works with parameters", function() {
    var doWork = function(url, $__0) {
      var $__1 = $__0,
          data = $__1.data,
          cache = $__1.cache;
      return data;
    };
    var result = doWork('api/test', {
      data: 'test',
      cache: false
    });
    expect(result).toBe('test');
  });
});

"use strict";
describe("how let works", function() {
  it("not like var", function() {
    expect(true).toBe(true);
  });
});
