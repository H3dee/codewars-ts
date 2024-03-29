/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

Courtesy of projecteuler.net
 */

export class Challenge {
  private static multiplicators: number[] = [];

  static solution(number: number): number {
    if (number < 0) {
        return 0;
    };


    for (let i = 0; i < number; i++) {
      if (i % 5 === 0 || i % 3 === 0) {
        this.multiplicators.push(i);
      }
    }

    console.log(this.multiplicators);

    const sumOfMultiplicators = this.multiplicators.reduce(
      (acc, multiplicator) => acc + multiplicator,
      0,
    );

    return sumOfMultiplicators;
  }
}

console.log(Challenge.solution(101));
