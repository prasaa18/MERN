

function kiratAsyncFunction(){
    let p= new Promise(function(resolve){
        //do some async logic like readfile or setInterval
        setInterval(function(){
          resolve("hie there")
        },1000)

    });
     return p;
}


async function main(){

    // kiratAsyncFunction().then(function(value){
    //     console.log(value);
    // })
    const value= await kiratAsyncFunction();
    console.log("hir there1")
    console.log(value);  
}
main();
console.log("hi ouraide main");