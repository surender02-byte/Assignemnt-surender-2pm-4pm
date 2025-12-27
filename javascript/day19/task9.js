//Array Processing with Callbacks
//Use forEach, map, or custom callback.

let number=[1, 2, 3];
number.forEach(function (number) {
    console.log(number);
    
});

let numbers=[1, 2, 3,4];
let result= numbers.map(function (number1) {
   return number1*2;
    
}); console.log(result);