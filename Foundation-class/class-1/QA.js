// const m=["harkirat","esha" ,"priya"];
// const ge=["male","male","female"]
// for(let i=0;i<m.length;i++){
//     if(ge[i]=="male"){
//         console.log(m[i]);
//     }
// }


// const user1={
//     firstname: "harkirat",
//     geneder:"male"
// }
// console.log(user1["firstname"]);

const alluser =[{
     firstName:"harkirat",
     gender:"male",
     metaData:{
        age:21,
        address:"js"
     }
},
{
    firstName:"priya",
    gender:"female"
},
{
    firstName:"pa",
    gender:"male"
}
]

for(let i=0; i<alluser.length; i++){
    if(alluser[i] ["gender"]=="male"){
        console.log(alluser[i].firstName);
    }
}