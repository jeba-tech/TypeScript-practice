// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface Person {
      name: string;
      age: number;
      email: string;
    }
    
    const people: Person[] = [
      { name: "Alice", age: 25, email: "alice@example.com" },
      { name: "Bob", age: 30, email: "bob@example.com" },
      { name: "Charlie", age: 22, email: "charlie@example.com" }
    ];
    
    function findPersonByEmail(peopleArray: Person[], email: string): Person | null {
      const person = peopleArray.find(person => person.email === email);
      return person || null;
    }
    
    const searchEmail = "bob@example.com";
    const foundPerson = findPersonByEmail(people, searchEmail);
    
    if (foundPerson) {
      console.log("Found person:", foundPerson);
    } else {
      console.log("No person found with the specified email.");
    }
    