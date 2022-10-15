// 1. 
let challenge = "30 Days of JavaScript";
// 2.
console.log(challenge);
// 3. 
console.log(challenge.length)
// 4.
console.log(challenge.toUpperCase())
// 5.
console.log(challenge.toLowerCase())
// 6.
console.log(challenge.substring(0, 1))
// 7.
console.log(challenge.substring(3, 21))
// 8.
console.log(challenge.includes("Script"))
// 9.
let str = "Script".split("")
console.log(str)
// 10.
console.log(challenge.split(" "))
// 11.
let string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let array = string.split(',')
console.log(array)
// 12.
let newChallenge = challenge.replace("JavaScript", "Python")
console.log(newChallenge)
// 13.
console.log(challenge.charAt(15))
// 14.
console.log(challenge.charCodeAt("J"))
// 15.
console.log(challenge.indexOf('a'))
// 16.
console.log(challenge.lastIndexOf('a'))
// 17.
console.log("IndexOf: ", "You cannot end a sentence with because because because is a conjunction".indexOf('because'))
// 18.
console.log("LastIndexOf: ", "You cannot end a sentence with because because because is a conjunction".lastIndexOf('because'))
// 19.
console.log("Search: ", "You cannot end a sentence with because because because is a conjunction".search('because'))
// 20.
console.log(challenge.trim(' '))
// 21.
console.log(challenge.startsWith("30"))
// 22.
console.log(challenge.endsWith("JavaScript"))
// 23.
console.log(challenge.match('a'))
// 24.
console.log("30 Days Of " + "JavaScript")
// 25.
console.log(challenge.repeat())