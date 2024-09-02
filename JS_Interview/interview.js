console.log('hello new world')
{
  // Number data types
  // == equal to  operator
  let value1 = '100';
  let value2 = 100;

  console.log(value1 == value2);

  let a = 'khushboo';
  let b = 'kanojiya';
  console.log(a == b);

  // === strict equal to operator

  let x = '100';
  let y = 200;

  console.log(x === y);

  let z = 5;
  let f = 8;

  console.log(z === f);

}
{
  // String data types
  // how to convert number to string
  //1. using toString() method
  let num = '123456';
  let str = num.toString();
  console.log(typeof str);
  console.log(str);

  //2. using string constructor 

  let num1 = 100;
  let str1 = String(num1);
  console.log(str1);
  console.log(typeof str1);
}


// operator in js
{
  /*
  1. arithametic operator
     additition
     subtraction
     multiplication 
     devision
     mudulus %
     exponenciation **
  */

  // example
  {
    let a = 2;
    let b = 3;

    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
    console.log(a ** b);
  }
}

{
  /*
  2.assignment operator
     addition 
     subtraction
     multiplication
     devision
     mudulus
  */
  let num1 = 100;
  // num1=num1+num2=300
  let num2 = 100;
  num2 += 500;
  console.log(num2);

  console.log(num1 += 200);
  console.log(num1 -= 50);
  console.log(num1 *= 3);
  console.log(num1 /= 4);
  console.log(num1 %= 9);
}

{
  /*
  3.comparison operators
    eqaul to == 
    strict eual to ===
    not equal to !=
    strict not equal to !==
    less than <
    grater than >
    less than eual to <=
    great than equal to >=
  */
  {
    let x = 30;
    let y = 50;
    console.log(x == y);
    console.log(x === y);
    console.log(x != y);
    console.log(x !== y);
    console.log(x < y);
    console.log(x <= y);
    console.log(x > y);
    console.log(x >= y);
  }
}

{
  /*
   4. logical operator
      logical and (&&)
      logical OR (||)
      logical Not(!)
    
  */

  {
    // Initialize some variables
    let isLoggedIn = true;
    let hasPremiumMembership = false;
    let userName = "John";

    // Using the && (AND) operator
    if (isLoggedIn && hasPremiumMembership) {
      console.log("Welcome to the premium content, " + userName + "!");
    } else {
      console.log("Please upgrade to access premium content.");
    }

    // Using the || (OR) operator
    if (isLoggedIn || hasPremiumMembership) {
      console.log("Welcome, " + userName + "!");
    } else {
      console.log("Please log in to continue.");
    }

    // Using the ! (NOT) operator
    if (!hasPremiumMembership) {
      console.log("You do not have access to premium content.");
    }

  }
}

{
  /*
  5. Bitwise operator
     bitwise and (&)
     bitwise or(|)
     bitwise xor(^)
     bitwise not (~)
     bitwise left shift(<<)
     bitwise right shift(>>)
     bitwise unsigned right shift(>>>)
  */
  {
    // Define two numbers
    let a = 5;   // Binary: 0101
    let b = 3;   // Binary: 0011

    // Bitwise AND (&)
    let andResult = a & b;  // Binary: 0001
    console.log("a & b =", andResult); // Output: 1

    // Bitwise OR (|)
    let orResult = a | b;   // Binary: 0111
    console.log("a | b =", orResult);  // Output: 7

    // Bitwise XOR (^)
    let xorResult = a ^ b;  // Binary: 0110
    console.log("a ^ b =", xorResult); // Output: 6

    // Bitwise NOT (~)
    let notResult = ~a;     // Binary: 1010 (inverted)
    console.log("~a =", notResult); // Output: -6

    // Left Shift (<<)
    let leftShiftResult = a << 1;  // Binary: 1010
    console.log("a << 1 =", leftShiftResult); // Output: 10

    // Right Shift (>>)
    let rightShiftResult = a >> 1; // Binary: 0010
    console.log("a >> 1 =", rightShiftResult); // Output: 2

    // Unsigned Right Shift (>>>)
    let unsignedRightShiftResult = -5 >>> 1; // Binary: 1111111111111111111111111111110 (positive)
    console.log("-5 >>> 1 =", unsignedRightShiftResult); // Output: 2147483645

  }
}

{

  /*
  6.ternary operator
  */
  // Initialize a variable with a value
  let age = 20;

  // Using the ternary operator to check if the person is an adult
  let message = (age >= 18) ? "You are an adult." : "You are a minor.";

  // Output the result
  console.log(message); // Output: "You are an adult."

}

{
  /*
  7.Type Operators
    typeof operator
    instance of operator
  */

  {
    // Using typeof to check the type of a variable
    let number = 42;
    let text = "Hello, World!";
    let isTrue = true;
    let obj = { name: "Alice", age: 30 };
    let arr = [1, 2, 3];
    let func = function () { return "I'm a function"; };

    // Check the types of variables using typeof
    console.log(typeof number); // Output: "number"
    console.log(typeof text);   // Output: "string"
    console.log(typeof isTrue); // Output: "boolean"
    console.log(typeof obj);   // Output: "object"
    console.log(typeof arr);   // Output: "object" (arrays are also objects in JavaScript)
    console.log(typeof func);  // Output: "function"

    // Using instanceof to check if an object is an instance of a specific class or constructor
    console.log(obj instanceof Object); // Output: true
    console.log(arr instanceof Array);  // Output: true
    console.log(func instanceof Function); // Output: true

    // Checking if a variable is an instance of a built-in type
    console.log(number instanceof Number); // Output: false (primitive number is not an instance of Number)
    console.log(new Number(42) instanceof Number); // Output: true (object wrapper)

  }

}

{
  //8. Nullish Coalescing Operator (??) 

  {
    // Initialize a variable with null
    let username = null;

    // Use the nullish coalescing operator to provide a default value
    let displayName = username ?? "Guest";

    // Output the result
    console.log(displayName); // Output: "Guest"

  }

}

{
  //9. Optional Chaining Operator (?.)
  {
    // Define an object with nested properties
    let user = {
      profile: {
        name: "Alice",
        age: 30
      }
    };

    // Use optional chaining to access a nested property safely
    let userName = user.profile?.name; // "Alice"
    let userCity = user.profile?.address?.city; // undefined

    // Output the results
    console.log(userName); // Output: "Alice"
    console.log(userCity); // Output: undefined
  }
}






