var chai = require ('chai'); //requires the chai bdd library
var expect = chai.expect; // require the expect chai library
var db = db || {}; // mock database
// Namespacing

describe('How BDD testing shoud work for newbies', function() {

  // callbacks contain tests
  // CCT callbacks contain tets
  it('should have a passing grade in mocha', function() {
    var grade = 8; // 8 out of 10 to pass
    expect(grade).to.be.above(7);
  });

});
