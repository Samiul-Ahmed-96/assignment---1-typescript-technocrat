// Problem 1
// Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.

function processInput(input: string | number): number {
  if (typeof input === "string") {
    return input.length;
  } else if (typeof input === "number") {
    return input * input;
  }
  // This case is handled by TypeScript's type checking.
  return 0;
}

// Problem 2

// Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.

interface Address {
  city: string;
  street: string;
}

interface Person {
  address?: Address;
  phone?: string;
}

function getAddressCity(person: Person): string | undefined {
  return person.address?.city;
}

// Problem 3

// Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

function isCat(obj: any): obj is Cat {
  return obj instanceof Cat;
}

function checkIfCat(obj: any): string {
  if (isCat(obj)) {
    return "Yes, it's a cat.";
  } else {
    return "No, it's not a cat.";
  }
}

// Example usage:
const cat = new Cat();
const dog = {};

console.log(checkIfCat(cat)); // Output: Yes, it's a cat.
console.log(checkIfCat(dog)); // Output: No, it's not a cat.

// Problem 4

// You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.

// To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.

// Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions.

function sumNumbers(mixedData: (number | string)[]): number {
  let total = 0;

  for (const item of mixedData) {
    // Check if the item is a number and add it to total
    if (typeof item === "number") {
      total += item;
    }
  }

  return total;
}

// Example usage
const mixedData = [1, "two", 3, "four", 5];
console.log(sumNumbers(mixedData)); // Output: 9
