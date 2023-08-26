// Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?
// const arraNum = [1, 3, 4, 67, 8, 5]

function sum(arr: number[]): number {
      let sum = 0;
      
      for (let num of arr) {
            if (num % 2 == 0) {
                  sum += num;
            }

      }
      return sum
}
const res = sum([1, 3, 4, 67, 8, 5])
console.log(res)

// npx ts-node-dev --respawn problem-1.ts