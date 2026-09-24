/*
JS Code to find sum of series 1+2+3+.............+n
*/

let n=10,sum=0,i;

for(i=1; i<=n; i++){
    sum=sum+i;
}
console.log(`Sum of series of ${n} is :${sum}`);
