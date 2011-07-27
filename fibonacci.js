//to find the nth number
//fibonacci identity
Fib = [1,1,1,0]
//get a number
n = +prompt("Please enter a number");
//multiply a 2x2 Matrix
function mult2x2(a,b){
  return([a[0]*b[0]+a[1]*b[2],a[0]*b[1]+a[1]*b[3],a[2]*b[0]+a[3]*b[2],a[2]*b[1]+a[3]*b[3]]);
}
function fibRecurse(M,n){
  //if n is one return the identity
  if(n==1)
    return M;
  //get the value of fib^n/2 (divide)
  var fibSoFar = fibRecurse(M,Math.floor(n/2));
  //multiply the two halves (and multiply by 1 more if not an even number) (conquer)
  fibSoFar = mult2x2(fibSoFar,fibSoFar);
  if(n%2==1)
    fibSoFar = mult2x2(fibSoFar,Fib);
  return fibSoFar;
}
document.write(n+"th number: "+fibRecurse(Fib,n)[0]+"<br>");
//to print the series
var a=0,b=1;
document.write("Fib Series to "+n+"th number:<br>0,1");
//loop through two at a time
for(var i = 2; i <= n; i+=2){
document.write(","+(a+=b));
document.write(","+(b+=a));
}
//if an odd number
if(n%2==1)
  document.write(","+(a+b));
