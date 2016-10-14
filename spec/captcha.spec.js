var operandtostring = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
var operandtostring2 = ["0","1","2","3","4","5","6","7","8","9"];

function Leftoperand (int pattern, int leftoperand) {
  this.pattern = pattern;
  this.leftoperand = leftoperand;
  this.ltostring = function() {
    if(pattern === 1) {return operandtostring[this.leftoperand]}
    else {return operandtostring2[this.leftoperand]}
  }
}
function Rightoperand (int pattern, int rightoperand) {
  this.pattern = pattern;
  this.rightoperand = rightoperand;
  this.rtostring = function() {
    if(pattern === 2) {return operandtostring[this.righttoperand]}
    else {return operandtostring2[this.rightoperand]}
  }
}
function Operator (int operator)
{
  this.otostring = function(){
      if(operator === 1){ return ' + ';  }
      else if(operator === 2){ return ' - '; }
      else if(operator === 3){ return ' * '; }
      else if(operator === 4){ return ' / ';  }
    }
}
function Captcha(int pattern ,int operator, int leftoperand ,int rightoperand) {
  var l = new Leftoperand(pattern,leftoperand);
  var r = new Rightoperand(pattern,rightoperand);
  var o = new Operator(operator);
  this.generate = function(){
    return l.ltostring() + o.otosting() + r.rtostring();
  }
}
