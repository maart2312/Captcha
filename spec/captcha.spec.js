var operandtostring = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
var operandtostring2 = ["0","1","2","3","4","5","6","7","8","9"];

function Leftoperand (pattern, leftoperand) {
  this.ltostring = function() {
    if(pattern === 1) {return operandtostring[leftoperand];}
    else {return operandtostring2[leftoperand];}
  }
}
function Rightoperand (pattern,rightoperand) {
  this.rtostring = function() {
    if(pattern === 2) {return operandtostring[righttoperand];}
    else {return operandtostring2[rightoperand];}
  }
}
function Operator (operator)
{
  this.otostring = function(){
      if(operator === 1){ return ' + ';  }
      else if(operator === 2){ return ' - '; }
      else if(operator === 3){ return ' * '; }
      else if(operator === 4){ return ' / ';  }
    }
}
function Captcha(pattern ,operator,leftoperand,rightoperand) {
  var l = new Leftoperand(pattern,leftoperand);
  var r = new Rightoperand(pattern,rightoperand);
  var o = new Operator(operator);
  this.generate = function(){
    return l.ltostring() + o.otostring() + r.rtostring();
  }
}
function CreateCaptcha(pattern ,operator,leftoperand,rightoperand) {
    return new Captcha(pattern ,operator,leftoperand,rightoperand);
}
