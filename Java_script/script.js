console.log('hello');
let a, b, c;
a = 2;
b = 3;
c = a + b;
console.log("The value of c is " + c + ".");

var value1 = 123;
let value2 = 1234;
const fixed = 33;

console.log(value1);
console.log(value2);
console.log(fixed);


operators
//1.. arrithmatic operators
//addion.
let x = 3 + 5;
console.log(x);

let y = 8 + "hellokhushboo";
console.log(y);

let z = "hello" + "khushboo";
console.log(z);

//subtraction
{
  let a = 50 - 40;
  console.log(a);

  let b = 20 - "hello";
  console.log(b);


}


//multiplication

{
  let c = 3 * 3;
  let d = -2 * 3;
  console.log(c);
  console.log(d);

  let p = Infinity * 0;
  let q = Infinity * Infinity;
  let r = 'hello' * 3;

  console.log(p);
  console.log(q);
  console.log(r);

}

//devision

{
  let x = 5 / 2
  let y = 1.0 / 2.0
  console.log(x)
  console.log(y)


  let a = 3.0 / 0
  let b = 4.0 / 0.0
  console.log(a)
  console.log(b)
  let z = 2.0 / -0.0
  console.log(z)
}

// modulus

{
  let a = 3 % 4;
  let b = -3 % 9;
  let c = 7 % -3;
  let d = 5.5 % 8;
  let e = -5 % 9;
  let f = NaN % 2

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  console.log(f);

}


// exponentiation
{
  let y = -(4 ** 2)
  let z = 2 ** 5
  let a = 3 ** 3
  let b = 3 ** 2.5
  let c = 10 ** -2
  let d = 2 ** 3 ** 2
  let e = NaN ** 2

  console.log(y)
  console.log(z)
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
  console.log(e)
}

//Increament
{
  // Postfix
  let a = 2;
  b = a++; // b = 2, a = 3

  // Prefix
  let x = 5;
  y = ++x; // x = 6, y = 6

  console.log(a)
  console.log(b)
  console.log(x)
  console.log(y)
}

// Decrement
{
  // Prefix
  let a = 2;
  b = --a;

  // Postfix
  let x = 3;
  y = x--;

  console.log(a)
  console.log(b)
  console.log(x)
  console.log(y)
}

//unary operators
{
  let a = 3;
  b = -a;

  // Unary negation operator
  // can convert non-numbers
  // into a number
  let x = "3";
  y = -x;

  console.log(a)
  console.log(b)
  console.log(x)
  console.log(y)
}

// unary plus(operator)
{
  let a = +4
  let b = +'2'
  let c = +true
  let x = +false
  let y = +null

  console.log(a)
  console.log(b)
  console.log(c)
  console.log(x)
  console.log(y)
}



//assignment operator

// addition

{
  let a = 2;
  let b = 3;
  console.log('print the value of a = ' + a);
  console.log(a = b + 1);

}

//subtraction

{
  let x = 10;
  console.log(result = x - 1);
}

//multiplication

{
  let yoo = 4;
  // Expected output 3
  console.log(foo = yoo * 1);
}

//devison

{
  let yoo = 10;
  const moo = 2;

  // Expected output 5
  console.log(yoo = yoo / moo);

  // Expected output Infinity
  console.log(yoo /= 0);
}


//remainder
{
  let yoo = 50;
  // Expected output 0
  console.log(yoo %= 10);
}

//exponentiation

{
  let yoo = 50;
  // Expected output 0
  console.log(yoo %= 10);
}

// left shift assignmnet operator
{
  let yoo = 5;

  // Expected output 20(In Binary 10100)
  console.log(yoo <<= 2);
}

// right shift operator
{
  let yoo = 5;
  // Expected Output 1(In binary 001)
  console.log(yoo >>= 2);
}

// betwise and operator
{
  let yoo = 5;

  // Expected output 0(In binary 000)
  console.log(yoo &= 2);
}

//betwise or operator
{
  let yoo = 5;
  // Expected output 7(In binary 111)
  console.log(yoo |= 2);
}

// betwise xor operator
{
  let yoo = 5;
  // Expected output 7(In binary 111)
  console.log(yoo ^= 2);

}


//comparison operators

//1 equality

{
  let val1 = 3;
  let val2 = 4;
  console.log(val1 == 3);
  console.log(val2 == 4);
  console.log(val1 == val2)

  console.log(0 == false);
  console.log(0 == null);
}

//2 inequality
{
  let val1 = 5;
  let val2 = '5';

  console.log(val1 != 6);
  console.log(val2 != '5');
  console.log(val1 != val2);
  console.log(0 != false);
  console.log(0 != null);

}

//3 strict equality
{
  // Illustration of (===) operator
  let val1 = 5;
  let val2 = '5';

  // Checking of operands
  console.log(val1 === 6);
  console.log(val2 === '5');
  console.log(val1 === val2);

  // Check against null and boolean value
  console.log(0 === false);
  console.log(0 === null);
}

//4 strict inequality
{
  // Illustration of (!==) operator
  let val1 = 5;
  let val2 = '5';

  // Checking of operands
  console.log(val1 !== 6);
  console.log(val2 !== '5');
  console.log(val1 !== val2);

  // Check against null and boolean value
  console.log(0 !== false);
  console.log(0 !== null);
}


//Ternarry operators.
{
  function gfg() {
    // JavaScript to illustrate
    // Conditional operator
    let PMarks = 40
    let result = (PMarks > 39) ?
      "Pass" : "Fail";

    console.log(result);
  }
  gfg();
}

//loops in js

{
  for (let i = 0; i < 5; i++) {
    console.log("Hello World!");
  }
}

//for loop
{
  // JavaScript program to illustrate for loop
  let x;

  // for loop begins when x = 2
  // and runs till x <= 4
  for (x = 2; x <= 4; x++) {
    console.log("Value of x: " + x);
  }
}


{
  for (let i = 0; i < 4; i++) {
    console.log(i);
  }
}

// while loop
{
  let i = 0;
  while (i < 6) {
    console.log(i);
    i++;
  }
}

// do-while loop
{
  console.log('execute while loop')
  let i = 0;
  do {
    console.log(i);
    i++;
  }
  while (i < 6);

}

// for in loop
{
  console.log('for-in loop')
  const obj = { a: 1, b: 4, c: 7 };
  for (let prop in obj) {
    console.log(prop + ':' + obj[prop]);
  }
}

// for of loop

{
  console.log('for of loop');

  const arr = [1, 2, 3, 4, 5];
  for (let val of arr) {
    console.log(val);
  }
}

// for each loop
{
  console.log('for- each loop')
  const arr = [1, 2, 3];
  arr.forEach(val => console.log(val));
}

// js map method
{
  console.log('map method in js')
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const newarr = arr.map(val => val * 2);
  console.log(newarr);
  console.log('cheking');
  console.log('cheking')

}