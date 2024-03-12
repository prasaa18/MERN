// function getLength(str) {
//     console.log("Original String:", str);
//     console.log("Length:", str.length);
//   }
//   getLength("Hello World");

function cutIt(str, startIndex, endIndex){
    let newStr="";
    for(let i=0; i<str.length; i++){
        if(i>=startIndex && i<endIndex){
          newStr =newStr+str[i];
        }
    }
    return newStr;
}
const value="harkirat singh"
let ans= value.slice(2,5);
console.log(ans);


let ans2= cutIt(value,2 ,5);
console.log(ans2);