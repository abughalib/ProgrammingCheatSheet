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

$ node learningJs.js
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

//For Loop
// Standard for loop
// Do this thing 10 times
for (var i = 0; i < 10; i++) {
  console.log(i)
}

// for/in loop
// Used to loop through objects
const friends = {'name': 'Matt', 'name':'Cody', 'name':'Anthony'}
for (friendName in friends) {
  console.log(friendName)
}

// ES6 for/of
// Used to loop over any data structure with length
const faces = "🤠🙃😎";
for (face of faces) {
  console.log(faces)
}

const bowies = ["👩‍🎤", "👨‍🎤"];
for (bowie of bowies) {
  console.log(bowie)
}
$ node learningJs.js
0
1
2
3
4
5
6
7
8
9
Cody
28
Louisville, KY
🤠🙃😎
🤠🙃😎
🤠🙃😎
👩‍🎤
👨‍🎤

//While Loop
// Like a basic for loop
var i = 0;
while (i < 10) {
  console.log('i === ' + i)
  i++;
}

// do-while loops evaluate the condition after the block is executed
var j = 0;
do {
  console.log('j === ' + j)
  j++;
} while (j > 5)
$ node learningJs.js
i === 0
i === 1
i === 2
i === 3
i === 4
i === 5
i === 6
i === 7
i === 8
i === 9
j === 0

//If/Else

if (7 % 2 === 0) {
  console.log('7 is even')
} else {
  console.log('7 is odd')
}

// You can have if without else
if (8 % 4 === 0) {
  console.log('8 is divisible by 4')
}

// Many branches
const duck = 'blue';
if (duck === 'yellow') {
  console.log('Rubber ducky')
} else if (duck === 'brown') {
  console.log('Live duck')
} else {
  console.log('Ive never seen a blue duck before.')
}
$ node learningJs.js
7 is odd
8 is divisible by 4
Ive never seen a blue duck before.

//Ternary
console.log(7 % 2 === 0 ? '7 is odd' : '7 is even')
const isBlue = true;
console.log(isBlue ? 'Ive never seen a blue duck before.' : 'Standard duck')

$node learningJs.js
7 is even //Here it so printed don't get confused.
I've never seen a blue duck before.

//Switch
// a simple switch statment
const fruit = 'banana'
switch (fruit) {
  case 'blueberry':
    console.log('blue')
    // everything after the true case executes
    // use 'break' if you aren't returning a value
    break;
  case 'banana':
    console.log('yellow')
    break;
    // multiple cases can resolve to the same branch
  case 'apple':
  case 'raspberry':
    console.log('red')
    break;
  default:
    console.log('not blue, yellow or red')
}
$ node learningJs.js
yellow

//Exception  
function logger () {
    console.log('Logging to the console...')
  }
  
  
  function logCaller () {
  
    try { // First, try to execute this code.
      logger()
    } catch (e) { // if it fails, execute this block instead.
      console.log('Error!')
    }
  }
  
  logCaller()

$node learningJs.js
Logging to the console...
  function logger () {
    console.log('Logging to the console...')
  }
  
  function logCaller () {
  
    try { // First, try to execute this code.
      log_ger() // This function doesn't exist at runtime.
    } catch (e) { // if it fails, execute this block instead.
      console.log('Error!')
    }
  }
  
  logCaller()
$node learningJs.js
Error!

  //Array
  // establish an array with a starting length
// There is no advantage to using this syntax
const arr1 = new Array(3)
arr1[0] = 'banana'
arr1[1] = 'apple'
arr1[2] = 'grapes'
console.log('arr1:', arr1) 
// => arr1: [ 'banana', 'apple', 'grapes' ]

// An array literal
const arr2 = []
//.push() is a method on the Array object
arr2.push(1)
arr2.push(2)
console.log('arr2:', arr2)
// => arr2: [ 1, 2 ]

// you can add to high indexes, though probably don't want to.
arr2[12] = 3
console.log('arr2 again:', arr2)
// => arr2 again: [ 1, 2, <10 empty items>, 3 ]

node learningJs.js
arr1: [ 'banana', 'apple', 'grapes' ]
arr2: [ 1, 2 ]
arr2 again: [ 1, 2, <10 empty items>, 3 ]
