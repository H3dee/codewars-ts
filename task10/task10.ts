export class Kata {
  static getCount(str: string) {
    return str.match(/a|e|i|o|u/g) ? str.match(/a|e|i|o|u/g).length : 0;
  }
}

console.log(Kata.getCount("abracadabra"));
