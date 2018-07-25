// JS-02

function multiply(x,y) {
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);
ans: 2 3 error


function multiply(x,y){
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));
ans: 6 10


var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
ans: 3 7

var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);
ans: 15 10 15 10 15


for(var i=0; i<15; i+=2){
   console.log(i);
}
ans: 0 2 4 6 8 10 12 14


for(var i=0; i<3; i++){
   for(var j=0; j<2; j++){  
       console.log(i*j);
   }
}
ans: 0 0 0 1 0 2


function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<x; j++){    
          console.log(i*j);
      } 
   }
}
z = looping(3,3);
console.log(z);
ans: 0 0 0 0 1 2 0 2 4 err


function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<y; j++){    
         console.log(i*j);
      } 
   }
   return x*y;
}
z = looping(3,5);
console.log(z);
ans: 0 0 0 0 1 2 0 2 4 0 3 6 0 4 8 0 5 10 error