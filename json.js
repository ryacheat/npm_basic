const obj={
    name:"rachit",
    contact:"1234567890",
    address:"sifal"

}
console.log(obj)
console.log(typeof obj)

//convert to JSON
const myObj = JSON.stringify(obj);
console.log(myObj)
console.log(typeof myObj)

//convert back to object
const myArr = JSON.parse(myObj);
console.log(myArr)
console.log(typeof myArr)