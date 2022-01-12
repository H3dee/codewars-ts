/** 
 * One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
Examples:
"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0
*/

export const makePassword = (phrase: string): string => {
  const INTERCHANGEABLE_CHARS_DICT = {
    i: 1,
    o: 0,
    s: 5,
  };
  const separatedPhrase = phrase.split(' ');

  return separatedPhrase
    .map((word) => {
      const formattedChar: string = word[0].toLowerCase();

      return formattedChar in INTERCHANGEABLE_CHARS_DICT
        ? INTERCHANGEABLE_CHARS_DICT[formattedChar]
        : word[0];
    })
    .join('');
};


console.log(makePassword('Keep Calm and Carry On'));