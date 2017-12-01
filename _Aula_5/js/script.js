console.log("hello from external script")

var number  = 0;
var number1 = 1;

console.log(typeof number);

number = "0";

console.log(typeof number);

number = true;

console.log(typeof number);

number = -11.2;

console.log(typeof number);

var myFunction = function(){
    var number = 0.1 + 1;

    console.log(number);
};

myFunction();