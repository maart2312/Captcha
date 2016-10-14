var operandtostring = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
var operandtostring2 = ["0","1","2","3","4","5","6","7","8","9"];

function Leftoperand (int pattern, int leftoperand) {
   this.pattern = pattern;
  //this.leftoperand = leftoperand;
  this.tostring = function() {
    if(pattern === 1) {return operandtostring[this.leftoperand-1]}
    else {return operandtostring2[this.leftoperand-1]}
  }
}
function Rightoperand (int pattern, int rightoperand) {
  this.pattern = pattern;
  //this.rightoperand = rightoperand;
  this.tostring = function() {
    if(pattern === 2) {return operandtostring[this.righttoperand-1]}
    else {return operandtostring2[this.rightoperand-1]}
  }
}
function Operator (int operator){
  this.tostring = function(){
      if(operator === 1){
        return '+' ;
      }

      if(operator === 2){
        return '-' ;
      }

      if(operator === 3){
        return '*' ;
      }

      if(operator === 4){
        return '/' ;
      }
   }
}
function Captcha(int pattern ,int operator, int leftoperand ,int rightoperand) {
  this.generate = function(){
    var l = new Leftoperand(pattern,leftoperand);
    var r = new Rightoperand(pattern,rightoperand);
    var o = new Operator(operator);
    return l + ' ' + o + ' ' + r ;
  }
}

describe('Captcha App', function() {
  describe('Pattern is 1', function() {
    let pattern = 1;
    it('should return "5 + Six" when input is 1,1,1,1', function(){
       let app = new Captcha(pattern,1,1,1);
       expect(app.generate()).toEqual('1 + One');
    })
  })
