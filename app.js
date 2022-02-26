// for(let i=0; i<10; i++){}
// for(const friend of friends){} array
// for(const friend in friends){} object
// using a object  
const bottols={
    name:'tiktok-bottol',
    color:'red',
    price:222,
}
for(const bottol in bottols){
    // console.log(bottol,bottols[bottol])
}
// boject.keys using acces object
const keys=Object.keys(bottols);
for(const key of keys){
    // console.log(key,bottols[key])
}
// entries usnig a object
const bottolValu=Object.entries(bottols)
for(const [key,value] of bottolValu){
    console.log(key,value)
}
// console.log(bottolValu)

// using array
const friends=['sakib','rakib','sanu']
for(const friend of friends){
    // console.log(friend)
}