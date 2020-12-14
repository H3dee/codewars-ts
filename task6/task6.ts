/**Task: Sorting of array filled with class names
 * Description: Need to sort input array by frequency of occurence
 * Example: ['header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'] ->
 *          ['link', 'menu-item', 'menu', 'header', 'footer']
 */

interface className {
  name: string
  amount: number
}

function findDuplicates<T>(arr: T[], needle: T): number {
  return arr.reduce((acc, item) => (item === needle ? ++acc : acc), 0)
}

function minimize(): string[]
function minimize(list: string[]): string[]

function minimize(list?: string[]): string[] {
  const frequency: Set<className> = new Set()

  list.forEach((currentClass, _, arr) =>
    frequency.add({
      name: currentClass,
      amount: findDuplicates(arr, currentClass),
    })
  )

  return [...frequency]
    .sort((a, b) => b.amount - a.amount)
    .map((item) => item.name)
    .filter((item, i, arr) => item !== arr[i - 1])
}

const classes: string[] = [
  'header',
  'menu',
  'menu-item',
  'menu-item',
  'menu-item',
  'footer',
  'menu',
  'link',
  'link',
  'link',
  'link',
]

console.log(minimize(classes));
