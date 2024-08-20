console.log('hello array')
// different types of array how to create it
//1.Creating an Array using Array Literal
{
  let name1 = [];
  console.log(name1);

  let name = ['khsuhboo', 'nitesh', 'sheetal', 'sakshi'];
  console.log(name);
}

//2. Creating an Array using JavaScript new Keyword (Array Constructor)
{
  let courses = new Array('html', 'css', 'js', 'jquery');
  console.log(courses);
}

//Basic Operations on JavaScript Arrays
//1. Accessing Elements of an Array
{
  let courses = ['html', 'css', 'react', 'angular'];
  console.log(courses[0]);
  console.log(courses[1]);

}

//2. Accessing the First Element of an Array
{
  let courses = new Array('html', 'css', 'js', 'jquery');
  let firstItem = courses[0];
  console.log('first item is : ', firstItem);

}

//3. Accessing the Last Element of an Array

{
  let courses = ['html', 'css', 'react', 'angular'];
  let lastItem = courses[courses.length - 1];
  console.log('last item', lastItem)

}

// 4. Modifying the Array Elements
{
  let courses = ['html', 'css', 'react', 'angular'];
  console.log(courses);

  courses[1] = 'bootstrape';
  console.log(courses);
}

//5. Adding Elements to the Array

{
  let courses = ['html', 'css', 'react', 'angular'];
  courses.push('node.js');
  courses.unshift('web developement');
  console.log(courses);
}

//6. Removing Elements from an Array
{
  // Creating an Array and Initializing with Values
  let courses = ["HTML", "CSS", "Javascript", "React", "Node.js"];
  console.log("Original Array: " + courses);

  // Removes and returns the last element
  let lastElement = courses.pop();
  console.log("After Removing the last elements: " + courses);

  // Removes and returns the first element
  let firstElement = courses.shift();
  console.log("After Removing the First elements: " + courses);

  // Removes 2 elements starting from index 1
  courses.splice(1, 2);
  console.log("After Removing 2 elements starting from index 1: " + courses);
}

//7.Array Length
{
  let courses = ["HTML", "CSS", "Javascript", "React", "Node.js"];

  let len = courses.length;
  console.log("The length of the Array is:" + len);
}

//8. Increase and Decrease the Array Length
{
  let courses = ["HTML", "CSS", "Javascript", "React", "Node.js"];
  courses.length = 7;
  console.log('Array after increase the length: ', courses);

  courses.length = 2;
  console.log('Array after decrease the length: ', courses)

}

//9. Iterating Through Array Elements
{
  // Creating an Array and Initializing with Values
  let courses = ["HTML", "CSS", "JavaScript", "React"];

  // Iterating through for loop
  for (let i = 0; i < courses.length; i++) {
    console.log(courses[i])
  }

  // Creating an Array and Initializing with Values
  let courses2 = ["HTML", "CSS", "JavaScript", "React"];

  // Iterating through forEach loop
  courses2.forEach(function myfunc(elements) {
    console.log(elements);
  });
}

//10. Array Concatenation
{
  // Creating an Array and Initializing with Values
  let courses = ["HTML", "CSS", "JavaScript", "React"];
  let otherCourses = ["Node.js", "Expess.js"];

  // Concatenate both arrays
  let concateArray = courses.concat(otherCourses);

  console.log("Concatenated Array: ", concateArray);
}

//11. Conversion of an Array to String
{
  // Creating an Array and Initializing with Values
  let courses = ["HTML", "CSS", "JavaScript", "React"];

  // Convert array ot String
  console.log(courses.toString());
}

//12. Check the Type of an Arrays
{
  let courses = ["HTML", "CSS", "JavaScript", "React"];

  // Check type of array
  console.log(typeof courses);

  let a = 'khushboo';
  console.log(typeof a);
}