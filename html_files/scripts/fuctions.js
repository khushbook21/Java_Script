// js fuctions
console.log('hello functions');
// three ways to declare fuctions js
//1. fuction declaration
{
  function calcAddition(number1, number2) {
    return number1 + number2;
  }
  console.log(calcAddition(6, 9));
}
//2. fuction expression

{
  let geeksforGeeks = function (paramA, paramB) {
    return paramA - paramB;
  }
  console.log(geeksforGeeks(10, 1));
}

{
  const square = function (number) {
    return number * number;

  }
  const x = square(4);
  console.log(x);

}
// 3. Functions as Variable Values
{
  // Function to convert Fahrenheit to Celsius
  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  // Using the function to convert temperature
  let temperatureInFahrenheit = 77;
  let temperatureInCelsius = toCelsius(temperatureInFahrenheit);
  let text = "The temperature is " + temperatureInCelsius + " Celsius";
}
// Arrow fuctions
{

  const a = ['khushboo', 'sakshi', 'sheetal', 'nitesh'];

  const a2 = a.map(function (s) {
    return s.length;
  });
  console.log('normal way print', a2);

  const a3 = a.map((s) => s.length);
  console.log('using arrow fuctions ', a3);


}
