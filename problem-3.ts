// You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

// Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

interface Product {
      id: number;
      name: string;
      price: number;
      category: string;
    }
    
    function filterProducts<T extends keyof Product>(
      products: Product[],
      criterion: T,
      value: Product[T]
    ): Product[] {
      return products.filter(product => product[criterion] === value);
    }
    
    const products: Product[] = [
      { id: 1, name: "Product A", price: 10, category: "Category X" },
      { id: 2, name: "Product B", price: 20, category: "Category Y" },
      { id: 3, name: "Product C", price: 30, category: "Category X" },
    ];
    
    const filteredProducts = filterProducts(products, "category", "Category X");
    console.log("Filtered Products:", filteredProducts);
    