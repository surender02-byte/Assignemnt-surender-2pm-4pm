// Use for…in to print object keys & values.

const user={ name:"sure",age:21,city:"india"};
for(let key of user){
    console.log(key,user[key]);
}