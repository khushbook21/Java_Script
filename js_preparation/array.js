// arrays in js
{
  let student = ['khushboo', 'sayli', 'needhi', 'tara', 'zara'];
  console.log(student);
  console.log(student[0]);
  console.log(student[1]);
  console.log(student[2]);
  console.log(student[3]);
  student[0] = 'happy';
  console.log(student);
}

// java-script all methods in details
{
  // 1. map method
  let prices = [100, 200, 300, 400, 500];
  console.log(prices);
  let discountedprices = prices.map(prices => prices * 0.9);
  console.log(discountedprices);

  // 2. filter method
  let ages = [10, 20, 18, 30, 35, 88, 12, 9, 16, 55];
  console.log(ages);
  let adults = ages.filter(ages => ages >= 18);
  console.log(adults);

  // 3. reduce method
  let cart = [100, 200, 300, 400, 500];
  console.log(cart);
  console.log('the 0th index element is', cart[0]);
  let totalprice = cart.reduce((sum, itemprice) => sum + itemprice, 0);
  console.log('the totale price of the item in shoping cart is', totalprice);

  // 4. forEach method
  let students = ['shetal', 'sakshi', 'nitesh', 'khushboo'];
  console.log('the student names are', students)
  students.forEach(students => console.log('using forEach method priting name of each student present in the list!! ', students));

  // 5. find index method
  let carPrices = [1200, 13000, 14000, 500, 50000];
  console.log(carPrices);
  let expensivecar = carPrices.find(price => price > 500);
  console.log('the expensive car price is', expensivecar);

  // 6. push method
  let todoList = ['shpping', 'cleaning houses', 'make dinner'];
  console.log(todoList);
  todoList.push('buy some coffes');
  console.log(todoList);

  // 7. pop method
  let bookstoread = ['book1', 'book2', 'book3', 'book4', 'book5'];
  console.log('before removing book', bookstoread);
  let lastbook = bookstoread.pop();
  console.log('after removing the books', lastbook);
  console.log(bookstoread);

  // 8. slice method
  let names = ["Alice", "Bob", "Charlie", "David"];
  let firstTwoNames = names.slice(0, 2);
  console.log(firstTwoNames);

  // 9. cancat method
  let fruits1 = ['apple', 'banana', 'peru', 'anaar'];
  let fruites2 = ['pappaya', 'kana', 'naspati', 'painapple', 'dryfruites'];
  let allfruits = fruits1.concat(fruites2);
  console.log(allfruits);

  // 10. includes methods
  let task = ['paybiils', 'shoping', 'buy some home remedues'];
  console.log(task);
  let haspaybiils = task.includes('paybiils');
  console.log(haspaybiils);

  // 11. indexOf method
  let cities = ["New York", "Los Angeles", "Chicago"];
  let index = cities.indexOf("Chicago");
  console.log(index);

  // 12. unshift method
  let number = [1, 2, 3, 4, 5];
  console.log('before new array', number)
  number.unshift('print new array', 0);
  console.log(number);

  // 13. shift method
  let number2 = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log('before new array', number2)
  number.shift('print new array', 0);
  console.log(number2);

  // 14. splice method
  let arr = [1, 2, 3, 4];
  arr.splice(1, 2); // [1, 4], removes 2 elements starting from index 1
  console.log(arr);

  // 15. join method
  let arr1 = [1, 2, 3, 4, 5];
  let joined = arr1.join('-');
  console.log(joined)

  // 16. reverse method
  let arr3 = [1, 2, 3, 4, 5];
  let reverse = arr3.reverse();
  console.log(reverse);

  // 17. sort method
  let arr4 = [3, 1, 2];
  arr4.sort();
  console.log(arr4);

  // 18. some method
  let arr5 = [1, 2, 3];
  let hasEven = arr5.some(x => x % 2 === 0);
  console.log(hasEven)

  // 19. every method
  let arr6 = [1, 2, 3];
  let allEven = arr6.every(x => x % 2 === 0);
  console.log(allEven);

  // 20. fill method
  let arr7 = [1, 2, 3, 4];
  arr7.fill(0, 1, 3);
  console.log(arr7);

} 