function findsum(a,b ,fnCall){
    let result = a+b;

    fnCall(result);
}



function display(data){
    console.log("result"+data);
}
function displayResult(data){
    console.log("result of resultData"+data);
}

const ans=findsum(1,2,display);
console.log(ans);