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
  while(currQueue !== null){
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

