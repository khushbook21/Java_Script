// how to declare fuctions
{
  function showMessage() {
    let a = 20;
    let b = 30;
    console.log("the sum of a and b is", a + b);
  }
  showMessage();
  showMessage();
  showMessage();
  showMessage();
}

// locan variable in fuctions
{
  function showMessage() {
    let message = "Hello, I'm JavaScript!";
    console.log(message);
  }
  showMessage();
  // console.log(message);
}

// outer variable in fuctions
{
  let username = 'khushboo';
  function outerVariable() {
    let message = 'hello,' + username;
    console.log(message);
  }
  outerVariable();
}

// how to pass parameters in functions 
{
  function showMessage(from, text) {
    console.log(from + ":" + text);
  }
  showMessage('khushboo', 'hello what are you doing');
  showMessage('sayli', 'how r u');
}

{
  function showMessage(from, text) {
    from = '*' + from + '*';
    console.log(from + ': ' + text);
  }
  let from = "Ann";
  showMessage(from, "Hello");
  console.log(from);
}

// how to return value in the fuctions
{
  function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  let age = prompt('How old are you?', 18);
  if (checkAge(age)) {
    console.log('Access granted');
  } else {
    console.log('Access denied');
  }
}
