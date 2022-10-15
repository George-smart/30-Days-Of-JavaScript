// 1.
// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another")
// 2.
console.log('"Love is not patronizing and charity isn\'t about pity, it is love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead"')
// 3.
console.log(typeof parseInt('10'))
// 4.
console.log(parseFloat(Math.round('9.8')))
// 5.
console.log("python".includes("on"))
console.log("jargon".includes("on"))
// 6.
console.log("I hope this course is not full of jargon".search("jargon"))
// 7. Random numbers
console.log(Math.floor(Math.random() * 100))
// 8. Random btw 50 and 100
console.log("Random 50 - 100", Math.floor(Math.random() * (100 - 50) + 50))
// 9.
console.log("Random 0 - 255", Math.floor(Math.random() * 255))
// 10.
let randomName = "JavaScript"
let randNum = Math.floor(Math.random() * randomName.length) + 1
let splitStr = randomName.split('')
console.log(splitStr[randNum])
// 11.
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
// 12.
let str = "You cannot end a sentence with because because because is a conjunction"
let begin = str.indexOf("because")
let end = str.lastIndexOf("e") + 1
let strCut = str.substring(begin, end);
console.log(strCut);

// Level 3.

// 1. 
let sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let pattern = /love/gi
console.log(sentence.match(pattern).length)
// 2.
let pattern2 = /because/gi
console.log(str.match(pattern2).length)



