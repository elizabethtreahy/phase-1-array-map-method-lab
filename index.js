const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  return tutorials.map((book) => {
    const bookWords = book.split(" ");
    const capitalizedBookWords = bookWords.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const finalArray = capitalizedBookWords.join(" ");
    return finalArray;
  });
};


// function removeWhiteSpaceAndCapitalize(element) { 
//   let completeString = ""
//   const spaceSeparatedArray = element.split(" ") 
//   const capitalizedSplitArray = spaceSeparatedArray.map((character) => character.charAt(0).toUpperCase() + character.slice(1))
//   completeString = capitalizedSplitArray.join(" ")
//   return completeString
// }
// titleCased(tutorials)









// const titleCased = (inputArray) => {
//   const outputArray = newArray(inputArray)
//   return outputArray;
// }

// function newArray(valueString) {
//   const completedStringArray = valueString.map(element => {
//     removeWhiteSpaceAndCapitalize(element)
//   })
//   return splitArray
// }

// function removeWhiteSpaceAndCapitalize(element) { // 'what is JSON'
//   let completeString = ""
//   const spaceSeparatedArray = element.split("\s") //['what', 'is', 'JSON']
//   const capitalizedSplitArray = spaceSeparatedArray.map((character) => character.charAt(0).toUpperCase() + character.slice(1)) //['What', 'Is', 'JSON']
//   capitalizedSplitArray.map((value) => {completeString = `${completeSring} ${value}`}) // 'What Is JSON'
//   return completeString
// }

// // .map



// titleCased(tutorials)
















// function capitalize(tutorials, string) {
//   return tutorials.map((character) => character.charAt(0) + character.slice(1));
// }


// function capitalize(word) {
//   return word
//     .split('')
//     .map((letter, index) => index ? letter.toLowerCase() : letter.toUpperCase(),)
//     .join('');
// }

// function getFirstLetters(str) {
//   const firstLetters = str
//     .split(' ')
//     .map(word => word[0])
//     .join('');

//   return firstLetters;
// }