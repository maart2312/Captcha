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
    if(pattern === 2) {return operandtostring[rightoperand];}
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

describe("CaptchaApp", function() {
      it('should generate "9 - Six" when CreteCaptcha(2,2,9,6)', function() {
        expect(new CreateCaptcha(2,2,9,6).generate()).toEqual('9 - Six');
      })
});
describe("CaptchaApp", function() {
      it('should generate "One + 1" when CreteCaptcha(1,1,1,1)', function() {
        expect(new CreateCaptcha(1,1,1,1).generate()).toEqual('One + 1');
      })
});
describe("CaptchaApp", function() {
      it('should generate "8 - Seven" when CreteCaptcha(2,2,8,7)', function() {
        expect(new CreateCaptcha(2,2,8,7).generate()).toEqual('8 - Seven');
      })
});
describe("CaptchaApp", function() {
      it('should generate "7 + Four" when CreteCaptcha(2,1,7,4)', function() {
        expect(new CreateCaptcha(2,1,7,4).generate()).toEqual('7 + Four');
      })
});
describe("CaptchaApp", function() {
      it('should generate "3 + Two" when CreteCaptcha(2,1,3,2)', function() {
        expect(new CreateCaptcha(2,1,7,4).generate()).toEqual('7 + Four');
      })
});
