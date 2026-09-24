/*
JS Code to find factorial of a number 1+1*2*3...*n
*/

let num=10, fact=1, i=1;
let name="Harish";


while(i<=num){
    fact=fact*i;
    i=i+1;
}

console.log(`the factorial of ${num} is : ${fact}`);
console.log(`Program created by ${name}`);

