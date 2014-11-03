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
