/* Palindrome Checker */
/* 
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2. 
*/

function palindrome(str) {
    let p1 = 0;
    let p2 = str.length-1;
    let notAlphaNum = /[^a-zA-Z0-9]/;
    //console.log(notAlphaNum.test(str[p1]));
    while(p1 < p2){
      // skip not letters
      if (notAlphaNum.test(str[p1])){
        p1++;
      }
      else if (notAlphaNum.test(str[p2])){
        p2--;
      }
      else{
        if (str[p1].toLowerCase() != str[p2].toLowerCase()){
          return false;
        }
        p1++;
        p2--;
      }
    }
    return true;
  }
  
  console.log(palindrome("1 eye for of 1 eye."));