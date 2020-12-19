/**
 * Task: Make function which returns length of cleaned up array and mutates an original array
 * Example: [0, 0, 1, 1, 1, 2, 2, 3, 4, 4, 4, 4] ---> 5
 * Note: o(1)
 */

interface Result{
     cleanedArray: Array<number>,
     length: number
}


 function removeDuplicates(): Result
 function removeDuplicates(arr: Array<number>): Result

 function removeDuplicates(arr?: Array<number>){
     if(arr.length){
          const isUnique = (item, i, arr) => item !== arr[i - 1]
          const cleanedArray: number[] = arr.filter(isUnique)
          
          return {
               cleanedArray,
               length: cleanedArray.length
          }
     }

     return {
          cleanedArray: null,
          length: 0
     }
 }


const duplicates = [0, 0, 1, 1, 1, 2, 2, 3, 4, 4, 4, 4]

 console.log(removeDuplicates(duplicates));