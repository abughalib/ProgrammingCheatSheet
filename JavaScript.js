// print to the console with console.log
console.log('Hello, world!')

$ node hello-world.js
Hello, world!


// Strings
var a = 'Hello'
var b = "World"
console.log(a)
console.log(b)
// You can concatenate them with + operator.
console.log(a + " " + b)

// Numbers
console.log(1 + 3)
console.log(2 + 2.2)

// Booleans
console.log(true && false)
console.log(!true)
console.log(3 > 2)

// Empty Values
// null and undefined
// mostly interchangable in JS
console.log(null)
console.log(undefined)

$ node jsbyexample.js
Hello
World
Hello World
4
4.2
false
false
true
null
undefined

// variables are declared with 'var', 'let' and 'const
var a = 'a'
console.log(a)

// change vars without a declaration
a = 'aa'
console.log(a)

// let and const were added in ES6, and should be used over var
const b = 'b'
let c = 'c'
console.log(b)
console.log(c)

// 'const' means constant, and cannot be changed
// This would throw an error:
// b = 'bb'
// TypeError: Assignment to constant variable.

// use let when you know you'll change a variable
c = 'cc'
console.log(c)

// slight shortcut for multiple vars
let d = 'd', e = 'e'
console.log(d)
console.log(e)
$ node hello-world.js
a
aa
b
c
cc
d
e

