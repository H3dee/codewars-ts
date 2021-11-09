/* 
_.set(object, path, value) is a handy method to updating an object without checking the property existence.

Can you create your own set()?

const obj = {
  a: {
    b: {
      c: [1,2,3]
    }
  }
}
set(obj, 'a.b.c', 'BFE')
console.log(obj.a.b.c) // "BFE"

set(obj, 'a.b.c.0', 'BFE')
console.log(obj.a.b.c[0]) // "BFE"

set(obj, 'a.b.c[1]', 'BFE')
console.log(obj.a.b.c[1]) // "BFE"

set(obj, ['a', 'b', 'c', '2'], 'BFE')
console.log(obj.a.b.c[2]) // "BFE"

set(obj, 'a.b.c[3]', 'BFE')
console.log(obj.a.b.c[3]) // "BFE"

set(obj, 'a.c.d[0]', 'BFE')
// valid digits treated as array elements
console.log(obj.a.c.d[0]) // "BFE"

set(obj, 'a.c.d.01', 'BFE')
// invalid digits treated as property string
console.log(obj.a.c.d['01']) // "BFE"

*/

const set = <T extends object>(
    object: T,
    path: string[] | string,
    value: any,
): void => {
    const convertedPath: string[] =
        typeof path === 'string' ? path.split('.') : [...path];
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (const part of path) {
        if (!object[part]) {
            if (hasDigit(part, digits)) object[part] = 0;
        } else {
            object[part] = value;
        }
    }
};

const hasDigit = (partOfPath: string, dict: string[]) =>
    partOfPath.split('').some((char) => dict.includes(char));
