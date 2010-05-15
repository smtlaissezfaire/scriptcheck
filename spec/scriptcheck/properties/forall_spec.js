describe("ScriptCheck", function() {
  describe("generators", function() {
    describe("forall", function() {
      before_each(function() {
        forall = require("scriptcheck/properties/forall").forall;
      });

      it("should return a function", function() {
        var x = forall({}, function() { return true; });
        typeof(x).should.equal('function');
      });

      it("should return an array as the result of calling the inner function", function() {
        var result = forall({}, function() { return true; })(1);
        (result instanceof Array).should.be(true);
      });

      it("should have the array as many times as it is given", function() {
        var fun = forall({}, function() { return true; });

        fun(0).length.should.equal(0);
        fun(1).length.should.equal(1);
        fun(2).length.should.equal(2);
        fun(3).length.should.equal(3);
      });

      it("should return the results of calling the generator function", function() {
        var fun = forall({}, function() { return true; });
        fun(1)[0].should.equal(true);
      });

      it("should yield variables to the generating function", function() {
        var generator = function() {
          return(function() {
            return "o hai";
          });
        };

        var fun = forall({x: generator}, function(obj) {
          return obj.x;
        });

        fun(1)[0].should.equal("o hai");
      });
    });
  });
});