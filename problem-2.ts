// Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

// For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.

// The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.

function arr(arr_1:number[],arr_2:number[]):number[]{

const newArr:number[]=[];
for (const num of arr_1) {
      if (arr_2.includes(num)) {
            newArr.push(num);
      }
    }

//     for (let i = 0; i < arr1.length; i++) {
//       const num = arr1[i];
//       if (arr2.includes(num)) {
//         result.push(num);
//       }
//     }
return newArr;
}
const result = arr([1, 2, 3, 4, 5],[2, 4, 6, 8])
console.log(result);
