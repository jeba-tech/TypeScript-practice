// Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type ProductTuple = [string, number, number];
type ProductsArray = ProductTuple[];

function calculateTotalCost(products: ProductsArray): number {
  let totalCost = 0;
  
  for (const product of products) {
    const [productName, price, quantity] = product;
    totalCost += price * quantity;
  }
  
  return totalCost;
}

const productsa: ProductsArray = [
  ["Product A", 10, 3],
  ["Product B", 20, 2],
  ["Product C", 5, 7]
];

const totalCost = calculateTotalCost(productsa);
console.log("Total Cost:", totalCost);
