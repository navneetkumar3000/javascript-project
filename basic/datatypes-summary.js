// Primitive :- Stack Memory (Copy)
//All primitive types are call by value to store they use copy of memory value is change in copy not in the original memory
// 7 types of Primitive Datatypes 
// 1.String 2.Boolean 3.Number 4.null 5.undefined 6.symbol(kisi bhi value ko unique bnane ke liye) 7.BigInt

const score = 12
const score1 = 10.3
const score2 = true
const score3 = null
let score4

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id, typeof id)
console.log(anotherId)

console.log(id === anotherId)

const bigNumber = 434234324324233434
console.log(typeof bigNumber)

const bigNumber1= 434234324324233434n
console.log(typeof bigNumber1)

//if in last add n then typeof will be bigint

//Reference Type or Non-Primitive Type (Heap Memory) (Reference)
//memory me directly reference
// 1.Array 2.Objects 3.function

//Array
const arrayExample = ['Ram', 'Navneet' ]
console.log(arrayExample)

//Objects
const ObjectsExample = {
    name :'Navneet', age:18
}

console.log(ObjectsExample)

//Function
const myFunction = function() {
    "Hello World"
}
console.log(myFunction)

let userOne = {
    email:"abc@gmail.cpm", age:29
}

let userTwo = userOne
userOne.age = 12
userTwo.email = "abd@gmail.com"
console.log(userOne)
console.log(userTwo)

console.log(userOne.email)
console.log(userTwo.email)
/*
== compares only values after performing type coercion (automatic type conversion).
=== compares both value and type without conversion.
=== is safer and is the recommended operator in modern JavaScript development.
*/