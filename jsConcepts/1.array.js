// 1. Write code to get an array of names from given array of users
// 2. get back only active users
// 3.Sort users by age decending


const users = [
    {
        id:1,
        name:'Jack',
        isActive:true,
        age:20
    },
    {
        id:2,
        name:'John',
        isActive:true,
        age:18

    },
    {
        id:3,
        name:'Mike',
        isActive:false,
        age:30

    },
]

// 1.
// const names = users.map(user=>user.name)
// console.log(names);
// const names = []
// users.forEach(user => {
// names.push(user.name)
// })

// names = [];
// for(let i=0; i<users.length;i++){
//     names.push(users[i].name)
// }
// console.log(names);



// 2.
// const activeNames = users.filter(user=>user.isActive).map(user=>user.name)
// console.log(activeNames);


// 3.
// In JS if u want to sort, use sort functions only
// sort takes a callback function with two parameters and loops through the array and compares them

users.sort((user1,user2) => (user1.age > user2.age) ? -1 : 1)
console.log(users);
