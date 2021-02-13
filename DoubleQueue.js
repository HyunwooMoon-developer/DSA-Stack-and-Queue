/* eslint-disable no-unused-vars */
class _Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }

class doubleQueue{
    constructor(){
        this.first = null;
        this.last  = null;
    }

    enqueue(data){
        const node = new _Node(data);
        if(this.first === null){
            this.first = node;
        }
        if(this.last){
            this.last.next = node;
        }
        node.prev = this.last;
        this.last = node;
    }
    dequeue(){
        if(this.first === null){
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        if(node.next === null){
            this.last = null;
        }
        else{
            node.prev = null;
        }
        return node.value;

    }
}

function main(){
    let starTrekQ = new doubleQueue();

    starTrekQ.enqueue("Kirk");
    starTrekQ.enqueue("Spock");
    starTrekQ.enqueue("Uhura");
    starTrekQ.enqueue("Sulu");
    starTrekQ.enqueue("Checkov");
    console.log(starTrekQ)
    starTrekQ.dequeue();
    console.log(starTrekQ);
}

main();