// Combine two arrays using concat() or spread syntax [...a, ...b].

let a = [1,2,3,4,5,6,7,8];
let b = [9,10,11,12,13,14,15];

let result = a.concat(b,[16,17,18,19,20]);
console.log(result);

let results = [...a,...b];
console.log(result);
