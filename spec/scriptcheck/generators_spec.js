describe("ScriptCheck", function() {
  describe("Generators", function() {
    describe("random int generator", function() {
      forall = function(fun) {
        var results = [],
            i;
        
        for (i =0; i < 200; i++) {
          results.unshift(fun());
        }
        
        x = results.every(function(e) {
          return e === true;
        });
        
        x.should.be(true);
      }
      
      before_each(function() {
        generator = require("scriptcheck/generators/int");
      });
      
      it("should produce a number", function() {
        forall(function() {
          return(typeof(generator.generate()) === 'number');
        });
      });
      
      it("should produce a different number each time", function() {
        forall(function() {
          var v1 = generator.generate(),
              v2 = generator.generate();
          
          return v1 !== v2;
        });
      });
    });
  });
});