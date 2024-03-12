function sum(n){
 let ans=0;
 for(let i=0; i<n; i++){
     ans+=i;
 }
 return ans;
}

function findSumtill100(){
   // console.log(sum(100));
}

setTimeout(findSumtill100,1000);  // set timeout async function when it hit 1sec wait in that time it exec the console.log stmt


console.log("hello world")


// read from file system fs.readFile

const fs=require("fs");
fs.readFile("a.txt","utf-8",function(err,data){  // async calll takes time to  read file 
    console.log(data);
})

console.log("hello im printed first bec of readfile async")

// if i add the busty logic  then even if callback resolved that measn its fetch data but below logic should exceute
// once thread is idealk then only callback resolve 

let a=0;
for(let i=0; i<10000000000; i++){
    a++;
}
//console.log(a);
console.log("hi there 2 after a")