function CountLetters(strings) {
/*
*
 * Given an array of strings, returns an object
 * whose keys are the number of characters in the strings
 * and the values are the number of letters with each length.
 * If the string is empty, doesn't count it.
 *
* @return {object}
*/

// 1. Initialize a return value
var CharacterCount = {};

 // 2. Loop over the input
 for (var i = 0; i < strings.length; i++) {
    var string = strings[i];
    if (string === ' ') {
       //Don't worry about it
      continue;
    }
    //var countLetters = string.length;

    else if (CharacterCount [string] === undefined) {
      CharacterCount[string] = 1;
    }
  

    // 3. Inside the loop, modify the return value

    else {
      CharacterCount[string] =+ 1;
    }
  }
// 4. Return the return value
return CharacterCount;

}

console.log(CountLetters(['aaaaaaaaaakdfjlksjf']))
console.log(CountLetters('lighthouse in the house'))
