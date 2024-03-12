// function calci(a,b,type){
//     if(type=="sum"){
//         const val=sum(a,b);
//         return val;
//     }
//     if(type=="minus"){
//         const val=sub(a,b);
//         return val;
//     }
// }

// function sum(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }

// const val=calci(2,4,"minus");
// console.log(val);
//call back function

function calci(a,b,funcN){
  const val=funcN(a,b);
  return val;
}

function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

const val=calci(2,4,sum);
console.log(val);