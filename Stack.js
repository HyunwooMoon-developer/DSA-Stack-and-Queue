/* eslint-disable no-unused-vars */
//create a node containing the data and a reference to the next item

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  //O(1) constant time
  push(data) {
    //if the stack is empty, then the node will be the top of the stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    //if the stack already has something,
    //then create a new node
    //add data to the new node, and
    //have the pointer point to the top

    const node = new _Node(data, this.top);
    this.top = node;
  }
  //O(1) constant time
  pop() {
    //in order to remove the top of the stack, have to point
    //the pointer to the next item and that next item becomes the
    //top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}
function main() {
  let starTrek = new Stack();
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  peek(starTrek);
  isEmpty(starTrek);

  display(starTrek);

  //starTrek.pop();

  //console.log(starTrek);
}

// Q2 .Useful methods for a stack
//peek(): allows you to look at the top of the stack without removing it
//isEmpty(): allows you to check if the stack is empty or not
//display(): to display the stack - what is the 1st item in your stack?

//peek
function peek(stack) {
  if (!stack.top) {
    return null;
  }
  console.log(stack.top.data);
  return;
}
//isEmpty
function isEmpty(stack) {
  if (stack.top === null) {
    console.log(true);
    return;
  } else {
    console.log(false);
    return;
  }
}
//display
function display(stack) {
  let currStack = stack.top;
  if (currStack === null) {
    return;
  }
  while (currStack !== null) {
    console.log(currStack.data);
    currStack = currStack.next;
  }
}

main();

// Q3. Check for palindromes using a stack
//A palindrome is a word, phrase, or number that is spelled the same forward and backward.

function is_palindrome(s) {
  //assign our string to a new string instead, which use toLowerCase() method to lower letters and replace() method passed in 2 arguments
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  //we implement a for loop, which loops through the first half of this string and increases each iteration by one.
  for (let i = 0; i < s.length / 2; i++) {
    //whether it satisfies the condition or not, str[i] are the indexes of first half string, and str[len - i - 1] are the indexes of last ones.
    // need to – 1 because the last element of this string is str[str.length - 1] not str[str.length]
    //minus i because it will just go over the last half of this string.
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

//Q4. Matching parentheses in an expression
//Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis.

function matchParentheses(string) {
  const stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < string.length; i++) {
    //if character is an opening brace add it to a stack
    if (string[i] === "(" || string[i] === "{" || string[i] === "[") {
      stack.push(string[i]);
    }
    //if that character is a closing brace, pop from the stack, which will also reduce
    //the length of the stack each time a closing bracket is encountered
    else {
      let last = stack.pop();
      //if the popped element from the stack, which is the last opening brace doesn't match
      //the corresponding closing brace in the map, then return false
      if (string[i] !== map[last]) {
        return false;
      }
    }
  }
  //by the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
  if (stack.length !== 0) {
    return false;
  }
  return true;
}

console.log(matchParentheses("(]"));
console.log(matchParentheses("(()"));
console.log(matchParentheses("()"));
console.log(matchParentheses("(){}[]"));
console.log(matchParentheses("([{}])"));

// Matching parentheses in an expression - case 2
function matchParenthesesSecond(string) {
  let stack = [];

  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let closed = {
    "}": true,
    "]": true,
    ")": true,
  };
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (map[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (map[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(matchParenthesesSecond("(]"));
console.log(matchParenthesesSecond("(()"));
console.log(matchParenthesesSecond("()"));
console.log(matchParenthesesSecond("(){}[]"));
console.log(matchParenthesesSecond("([{}])"));

// Q5. Sort stack
//Write a program to sort a stack such that the smallest items are on the top (in ascending order).

function sort(stack) {
  if (!stack.top.next) {
    return stack;
  }
  let newStack = new Stack();

  while (stack.top) {
    let temp = stack.pop();
    while (newStack.top && newStack.top.data < temp) {
      stack.push(newStack.pop());
    }
    newStack.push(temp);
  }
  display(newStack);
  return sort;
}

let testStack = new Stack();
testStack.push(8);
testStack.push(11);
testStack.push(1);
testStack.push(200);
sort(testStack);
