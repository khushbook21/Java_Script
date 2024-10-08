{
  // string basic
  let myName = 'khushboo';
  console.log("Hello", myName, 'Welcome to the coding chalange');
}
{
  // strings method.
  // 1. length method
  let password = 'khushboo28fab_1997 .'
  console.log(password.length);
  let character = 'abcdefghijklmnopqrstuvwxyz';
  console.log('the length of the given character is', character.length);

  // 2. toUpperCase() method
  let upperchar = 'abcdefghijklmnopqrstuvwxyz';
  console.log('The upper case characters are', upperchar.toUpperCase());

  // 3. toLowerCase() method
  let a = 'KHUSHBOO KANOJIYA'
  console.log(a.toLocaleLowerCase());

  // 4. charAt() method
  let name = 'sakshi kanojiya';
  console.log(name.charAt(0));

  // 5. indexOf() method
  let sentance = 'I love to teach coding';
  console.log(sentance.indexOf('love'));
  console.log(sentance.length);

  // 6. lastIndexOf() method
  let sentence2 = 'I love my workign profession';
  console.log('last index of method printing');
  console.log(sentence2.length);
  console.log(sentence2.lastIndexOf("profession"));

  // 7. includes() method.
  let text = 'The quick brown fox jumps over the lazy dog.';
  console.log(text.includes('fox'));
  console.log(text.includes('cat'));

  // 8. startWith() method.
  let report = 'report_2020.pdf';
  console.log(report.startsWith('report'));
  console.log(report.startsWith('file'));

  // 9. endswith() method.
  let report1 = 'report_2020.pdf';
  console.log(report1.endsWith('report'));
  console.log(report1.endsWith('pdf'));

  // 10. slice() method
  let url = "https://www.example.com";
  let domain = url.slice(8);
  console.log(domain);

  // 11. substring() method
  let example = 'javascript is awesome!';
  console.log(example.substring(0, 11));

  // 12. substr() method
  let sentence4 = "Learning JavaScript is fun!";
  console.log(sentence4.substr(9, 10));

  // 13. replace() method
  let replaceText = 'I love coding';
  console.log(replaceText);
  let correctMessage = replaceText.replace('coding', 'cooking');
  console.log(correctMessage);

  // 14. replaceAll() method
  let announcement = "Apples are great. I love apples!";
  let newAnnouncement = announcement.replaceAll("apples", "oranges");
  console.log(newAnnouncement);

  // 15. split() method
  let groceryList = "apples, bananas, oranges, grapes";
  let items = groceryList.split(",");
  console.log(items);

  // 16. trim() method
  let userInput = "   hello world   ";
  console.log(userInput.trim());

  // 17. trimStart() and trimEnd() method
  let text1 = "   Hello!   ";
  console.log(text1.trimStart());
  console.log(text1.trimEnd());

  // 18. concat() method
  let a1 = 'khushboo';
  let a2 = 'kanojiya';
  console.log(a1.concat(a2));
  let fullName = a1.concat(" ", a2);
  console.log(fullName);

  // 19. padStart() and padEnd() method
  let orderNumber = '123';
  console.log(orderNumber.padStart(6, '0'));
  console.log(orderNumber.padEnd(6, '0'));

  // 20. repeat() method
  let repeatetext = 'khushboo ';
  console.log(repeatetext.repeat(5));

  // 21. match() methood
  let sentence = "The rain in Spain stays mainly in the plain.";
  let matches = sentence.match(/ain/g);
  console.log(matches);

  // 22. search() method
  let sentence1 = "Where is the cat ?";
  console.log(sentence1.search("cat"));

  // 23. localeCompare() method
  let a3 = "apple";
  let b = "banana";
  console.log(a3.localeCompare(b));

  // 24. toString() method
  let num = 100;
  console.log(num.toString());

}
