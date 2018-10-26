var assert = require("chai").assert;
var luhnCheck = require('../luhn-check');

describe("Luhn Check", function() {
  it("Number should be a valid luhn number", function() {
    var number = 9094450898;
    assert.isTrue(luhnCheck(number));
  });

  it("Number should be an invalid luhn number", function() {
    var number = 9094450897;
    assert.isFalse(luhnCheck(number));
  });
});