var operandtostring = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
var operandtostring2 = ["0","1","2","3","4","5","6","7","8","9"];

var operator = ["+","-"];
function Leftoperand (int pattern, int leftoperand) {
    this.ltostring = function() {
      if(pattern === 1) {return operandtostring[leftoperand-1]}
      else {return operandtostring2[leftoperand-1]}
    }
}

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
