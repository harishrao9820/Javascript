/*

JS Program to find simple Intrest for given amount of loan
*/

let princpal=500000,term=5;
let rate=12.50;
let si=0;

si=(princpal*term*rate)/100;

console.log("The simple Interst for the loan "+ princpal + " with interst  "+ rate + " for " + term +" years is :"+ si);
