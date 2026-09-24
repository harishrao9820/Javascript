/*
Write a program that checks if a given year is a leap year using if-else. (Hint: A year is leap if divisible by 4 but not by 100, or divisible by 400.)
*/

let n= 1990;

if(n/4==0){
    console.log(`${n} Is a leap year`);
}

else{
    console.log(`${n} is not a leap year`);
}