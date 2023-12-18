function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}
isPalindrome("racecar");

/* 
declare a const reversedWord and assign it to the word argument split into an array, reversed, and joined back into a string
return the word argument strictly equal to the reversedWord
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
