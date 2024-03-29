/* A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

"not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example.

NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms. */

export const spoonerize = (words: string): string => {
  const separated = words.split(' ');

  const sponerizedWords: string[] = separated.map((word, i) => {
    const charToReplace = word[0];
    const replacementChar = i > 0 ? separated[0][0] : separated[1][0];

    return word.replace(charToReplace, replacementChar);
  });

  return sponerizedWords.join(' ');
};

console.log(spoonerize('not picking'));
