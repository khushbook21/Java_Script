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