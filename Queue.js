class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0 ;
  }
  //O(1) constant time
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    //make the new code the last item on the queue
    this.last = node;
    this.length ++;
  }
  //O(1) constant time
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    this.length --;
    return node.value;
    
  }
}

function main() {
  let starTrekQ = new Queue();

  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhura");
  starTrekQ.enqueue("Sulu");
  starTrekQ.enqueue("Checkov");
  //console.log(starTrekQ);
  peek(starTrekQ);
  isEmpty(starTrekQ);
  display(starTrekQ);
}

main();

//Implement a peek() function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.
//Implement a isEmpty() function outside the Queue class that allows you to check if the queue is empty or not
//Implement a display() function outside of the Queue class that lets you display what's in the queue.

//peek
function peek(queue) {
  if (!queue.first) {
    return null;
  }
  console.log(queue.first.value);
  return;
}

//isEmpty
function isEmpty(queue) {
  if (queue.first === null) {
    console.log(true);
    return;
  } else {
    console.log(false);
    return;
  }
}

//display

function display(queue) {
  let currQueue = queue.first;
  if (currQueue === null) {
    return;
  }
  while (currQueue !== null) {
    console.log(currQueue.value);
    currQueue = currQueue.next;
  }
}

// Q9. Square dance pairing
//As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line.
//F Jane
//M Frank
//M John
//M Sherlock
//F Madonna
//M David
//M Christopher
//F Beyonce

//Female dancer is Jane, and the male dancer is Frank
//Female dancer is Madonna, and the male dancer is John
//Female dancer is Beyonce, and the male dancer is Sherlock
//There are 2 male dancers waiting to dance

const female = new Queue();
const male = new Queue();


function dancePairng(people) {

  people.forEach((person) => {
    if (person[0] === "F") {
      female.enqueue(person.split(' ')[1]);
    } else {
      male.enqueue(person.split(' ')[1]);
    }
    if (male.first && female.first) {
      let maleDancer = male.dequeue();
      let femaleDancer = female.dequeue();
      console.log(
        `Female dancer is ${femaleDancer}, and the male dancer is ${maleDancer}`
      );
    }
  });
  if (male.length > 0) {
    console.log(`There are ${male.length} male dancer waiting to dance.`);
  } else if (female.length > 0) {
    console.log(`There are ${female.length} male dancer waiting to dance.`);
  }
}

console.log(
  dancePairng([
    "F Jane",
    "M Frank",
    "M John",
    "M Sherlock",
    "F Madonna",
    "M David",
    "M Christopher",
    "F Beyonce",
  ])
);

console.log(
  dancePairng([
    "F Jane",
    "M Frank",
    "M John",
    "M Sherlock",
    "F Madonna",
    "M David",
    "M Christopher",
    "F Beyonce",
    "F Jenny",
    "F Helen",
    "F Anna",
  ])
);
// Q10 The Ophidian Bank

// Write a representation of this queue; 25% of the time (random), a customer's paperwork isn't quite right, and it's back to the end of the queue.

function ophidianBank(queue){
  while(queue.first){
    let person = queue.dequeue();
    if(Math.random() <= 1/4){
      queue.enqueue(person);
      console.log(`${person}'s paperwork isn't quite right, and back to the end of the queue`);
    }
    else{
      console.log(`${person}'s paperwork is right`);
    }
  }
}

let testQueue = new Queue();
testQueue.enqueue('Moon');
testQueue.enqueue('James');
testQueue.enqueue('Tim');

ophidianBank(testQueue);