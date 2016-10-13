var operandtostring = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
var operandtostring2 = ["0","1","2","3","4","5","6","7","8","9"];

function Leftoperand (int pattern, int leftoperand) {
  this.pattern = pattern;
  this.leftoperand = leftoperand;
  this.ltostring = function() {
    if(pattern === 1) {return operandtostring[this.leftoperand-1]}
    else {return operandtostring2[this.leftoperand-1]}
  }
}
function Rightoperand (int pattern, int rightoperand) {
  this.pattern = pattern;
  this.rightoperand = rightoperand;
  this.rtostring = function() {
    if(pattern === 2) {return operandtostring[this.righttoperand-1]}
    else {return operandtostring2[this.rightoperand-1]}
  }
}
function Operator (int operator)
{
  this.otostring = function(){ }
}
function Captcha(int pattern ,int operator, int leftoperand ,int rightoperand) {
  var l = new Leftoperand(pattern,leftoperand);
  var r = new Rightoperand(pattern,rightoperand)
  var o = new
  this.generate = function(){
    return l.ltostring() + " " + o.otosting()+ " " + r.rtostring();
  }
}


describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
