var operandtostring = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
var operandtostring2 = ["0","1","2","3","4","5","6","7","8","9"];

function Leftoperand (pattern, leftoperand) {
  this.ltostring = function() {
    if(pattern === 1) {return operandtostring2[leftoperand];}
    else {return operandtostring[leftoperand];}
  }
}
function Rightoperand (pattern,rightoperand) {
  this.rtostring = function() {
    if(pattern === 2) {return operandtostring2[rightoperand];}
    else {return operandtostring[rightoperand];}
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

//Pattern1+
describe("CaptchaApp", function() {
      it('should generate "1 + One" when CreteCaptcha(1,1,1,1)', function() {
        expect(new CreateCaptcha(1,1,1,1).generate()).toEqual('1 + One');
      })
});

//Pattern1-
describe("CaptchaApp", function() {
      it('should generate "5 - Four" when CreteCaptcha(1,2,5,4)', function() {
        expect(new CreateCaptcha(1,2,5,4).generate()).toEqual('5 - Four');
      })
});






//Pattern2+
describe("CaptchaApp", function() {
      it('should generate "Seven + 4" when CreteCaptcha(2,1,7,4)', function() {
        expect(new CreateCaptcha(2,1,7,4).generate()).toEqual('Seven + 4');
      })
});
describe("CaptchaApp", function() {
      it('should generate "Three + 2" when CreteCaptcha(2,1,3,2)', function() {
        expect(new CreateCaptcha(2,1,3,2).generate()).toEqual('Three + 2');
      })
});
describe("CaptchaApp", function() {
      it('should generate "Two + 1" when CreteCaptcha(2,1,2,1)', function() {
        expect(new CreateCaptcha(2,1,2,1).generate()).toEqual('Two + 1');
      })
});

//Pattern2-
describe("CaptchaApp", function() {
      it('should generate "Nine - 6" when CreteCaptcha(2,2,9,6)', function() {
        expect(new CreateCaptcha(2,2,9,6).generate()).toEqual('Nine - 6');
      })
});
describe("CaptchaApp", function() {
      it('should generate "Eight - 7" when CreteCaptcha(2,2,8,7)', function() {
        expect(new CreateCaptcha(2,2,8,7).generate()).toEqual('Eight - 7');
      })
});
