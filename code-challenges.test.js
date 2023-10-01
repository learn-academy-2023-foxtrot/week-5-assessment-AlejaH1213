// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
describe("codeFunc", () => {
    it("takes in a string and returns a string with a coded message.", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
    expect(codeFunc(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codeFunc(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codeFunc(secretCodeWord3)).toEqual("3cc3ntr1c")

    })
})
// Good Failure: ReferenceError: codeFunc is not defined
// b) Create the function that makes the test pass.

// Pseudo code:
// name: codeFunc
// input: a string
// output: a string with a coded message
// process: 
// first im going to create a function and give it a string as parameter
// im going to use .replaceAll and inside Ill make sure to account for capitalized and lower case words
// first im going to use the replace all for a inside a variable, then ill create the variable for e and reference the variable for e so I make sure that im changing all the vowels in the string and transforming the string one vowel at the time and then Ill return the last of the variables in this case codedWordO
const codeFunc = (string) => {
    let codedWordA = string.replaceAll(/a|A/g, 4)
    let codedWordE = codedWordA.replaceAll(/e|E/g, 3)
    let codedWordI = codedWordE.replaceAll(/i|I/g, 1)
    let codedWordO = codedWordI.replaceAll(/o|O/g, 0)
    return codedWordO
}
// TEST PASSED
// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
describe("arrayContainsLetter", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        
        const filterLetterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const filterLetterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(arrayContainsLetter(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(arrayContainsLetter(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    } )
})
// Good Failure: ReferenceError: arrayContainsLetter is not defined
// b) Create the function that makes the test pass.

// Pseudo code:
// name: arrayContainsLetter
// input: an array and a single letter
// output: returns an array of all the words containing that particular letter
// process:
// first im going to create the function and give it two parameters, one of array and the other of letter
// then im going to add the higher order function of .filter to the array, and then ill make sure that I include .toLowerCase() both to the value and to the letter to ensure that the function will work on capitalized words and then Ill use the include method to check if the value inside the array contains the letter and return the array with the values that contain the letter

// i think it is with filter and look at each value and if the value is the same as the letter then to keep it in the array?

const arrayContainsLetter = (array, letter) => {
    return array.filter((value) => value.toLowerCase().includes(letter.toLowerCase()))
}
// TEST PASSED
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house.", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(hand4)).toEqual(true)
    })
})
// Good failure: ReferenceError: fullHouse is not defined
// b) Create the function that makes the test pass.

// Pseudo code:
// name: fullHouse
// input: an array of 5 numbers
// output: a true or false statement
// process:
// im going to create a function that has a parameter of array
// then im going to create two variables, one for the three of the kind, and one for the double.
// inside each variable im going to use a find method and inside of it a filter method to check if the numbers are the same, and then ill put the lenght to also make sure that there are three numbers that are the same or two numbers that are the same
// if the array has three values that are the same or two values that are the same then they are going to be inside these two variables
//then im going to put an if statement that checks if the two variables that i created have values inside and if they do then it will return true and if they dont it will return false


const fullHouse = (array) => {
    const threeOfAKind = array.find((value) => array.filter((number) => number === value).length === 3)
    const double = array.find((value) => array.filter((number) => number === value).length === 2)

    if (threeOfAKind && double){
    return true
    } else {
        return false
    }
}
// TEST PASSED

