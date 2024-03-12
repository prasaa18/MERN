const fs= require('fs');


function kiratReadFile(){
    console.log("inside kirat");
    return new Promise(function(resolve){
        console.log("inside promise");
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("before resolved");
            resolve(data);

        });
    })
}

function onDone(data){
    console.log(data);
}

//kiratReadFile().then(onDone);

var a= kiratReadFile();
console.log(a);
a.then(onDone);


//outside the function 

var d =new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo"); 
    },1000)
 
});

function ondone(){
    console.log(d);
}
console.log(d);
d.then(onDone);


//promise async  wrk together
let p= new Promise(function(resolve){
    resolve("hi theere");
});
p.then(function(){
    console.log(p);
})
