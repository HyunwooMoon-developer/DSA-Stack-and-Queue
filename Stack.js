//create a node containing the data and a reference to the next item

class _Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }
    //O(1) constant time
    push(data){
        //if the stack is empty, then the node will be the top of the stack
        if(this.top === null){
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
    pop(){
        //in order to remove the top of the stack, have to point
        //the pointer to the next item and that next item becomes the
        //top of the stack
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}
function main(){
let starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

//starTrek.pop();

console.log(starTrek);

}

main();