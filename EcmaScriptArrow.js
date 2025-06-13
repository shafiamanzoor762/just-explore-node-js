// Arrow Function
var squareV = function (number) {
    return number * number;  //25
}
console.log("Result="+squareV(5));

var squareV = number => number * number;
console.log("Result="+squareV(3)); //25

var square = (number1, number2) => number1 * number2;
console.log("Result="+square(5,2));


var square = () => 5 * 3;
console.log("Result="+square());


