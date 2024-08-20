console.log('hello string please be easy to learn')

// Declaration of a String
//1. Using Single Quotes

{
  let str = 'my name is khushboo kanojiya';
  console.log(str);
}

//2. Using Double Quotes
{
  let str = "Create String with Double Quote";
  console.log(str);
}
//3. String Constructor
{
  let str = new String('Create String with String Constructor');
  console.log(str);
}

//4. Using Template Literals (String Interpolation)
{
  let str = 'Template Litral String';
  let newStr = `String created using ${str}`;
  console.log(newStr);
}

//5. Empty String
{
  let str1 = '';
  let str2 = "";
  console.log("Empty String with Single Quotes: " + str1);
  console.log("Empty String with Double Quotes: " + str2);
}

//6. Multiline Strings (ES6 and later)
{
  let str = `
    This is a
    multiline
    string`;

  console.log(str);
}

//Basic Operations on JavaScript 
// 1. Finding the length of a String
{
  let str = "khushboo kanojiya";
  let len = str.length;
  console.log("string length: " + len);
}

// 2. String Concatenation
{
  let str1 = 'khushbookanojiya';
  let str2 = 'niteshkanojiya';
  let newstr = str1 + str2;
  console.log(newstr);

}
// 3. Escape Characters
{
  const str1 = "\'GfG\' is a learning portal";
  const str2 = "\"GfG\" is a learning portal";
  const str3 = "\\GfG\\ is a learning portal";

  console.log(str1);
  console.log(str2);
  console.log(str3);
}

// 4. Breaking Long Strings
{
  const str = "'GeeksforGeeks' is \
  a learning portal";
  console.log(str);
}

// 5. Find Substring of a String
{
  let str = 'JavaScript Tutorial';
  let substr = str.substring(0, 10);
  console.log(substr);

}

// 6. Convert String to Uppercase and Lowercase
{
  let str = 'JavaScript';

  let upperCase = str.toUpperCase();

  let lowerCase = str.toLowerCase();

  console.log(upperCase);
  console.log(lowerCase);
}

//8. String Replace in JavaScript
{
  let str = 'Learn HTML at GfG';
  let newStr = str.replace('HTML', 'JavaScript');
  console.log(newStr);
}

//9. Trimming Whitespace from String
{
  let str = '    Learn JavaScript     ';
  let newStr = str.trim();
  console.log(newStr);
}
//10. Access Characters from String
{
  let str = 'Learn JavaScript';

  let charAtIndex = str[6];

  console.log(charAtIndex);

  charAtIndex = str.charAt(6);

  console.log(charAtIndex);
}

// 11. String Comparison in JavaScript
{
  let str1 = "John";
  let str2 = new String("John");

  console.log(str1 == str2);
  console.log(str1.localeCompare(str2));
}

// 12. Passing JavaScript String as Objects
{
  const str = new String("GeeksforGeeks");

  console.log(str);
}