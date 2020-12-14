/**
 * The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
 */
var checkExam = function (correctAnswers, studentAnswers) {
    var score = studentAnswers.reduce(function (accum, answer, i) {
        if (!answer)
            return accum;
        if (answer !== correctAnswers[i])
            return (accum -= 1);
        if (answer === correctAnswers[i])
            return (accum += 4);
    }, 0);
    return score < 0 ? 0 : score;
};
console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']));
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']));
console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']));
console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']));
