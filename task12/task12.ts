/**
 * In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => []string{"Hello", "hEllo", "heLlo", "helLo", "hellO"}
 */

export const wave = (word: string): string[] =>
  word
    ? word
        .split("")
        .map((item, i, arr) => {
          const subWave = [...arr];
          subWave[i] = subWave[i].toUpperCase();

          return item !== " " ? subWave.join("") : null;
        })
        .filter((subwave) => subwave)
    : [];

// console.log(wave('hello'))
// console.log(wave('codewars'))
// console.log(wave(''))
console.log(wave("two words"));
