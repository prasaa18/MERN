//  function square(a){
//     return a*a;
//  }

//  function sumofSquare(a,b){
//     let c1= square(a);
//     let c2=square(b);
//     return c1+c2;
//  }
// console.log( sumofSquare(1,2));


function square(a){
    return a*a;
 }
//  function cube(a){
//     return a*a*a;
//  }
 function sumofSquare(a,b ,fn){
    let c1= fn(a);
    let c2=fn(b);
    return c1+c2;
 }
console.log( sumofSquare(1,2 ,square));
console.log( sumofSquare(1,2 ,function(n){  //annonymous function
  return n*n*n;
}) );