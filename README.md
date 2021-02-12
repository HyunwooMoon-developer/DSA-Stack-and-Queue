# Working with stacks and queues

Two of the most commonly used data structures in web development are stacks and queues. 

## Stack

A stack is a data structure similar to a list with access restricted to only 1 end. It stores elements in a LIFO (Last In // First Out) order.
Stacks are usually thought of as vertical data structures, unlike lists and arrays which are horizontal. Hence the 1st and the only directly accessible item on the stack is referred to as "top" of the stack.

stack has 2 primary functions

push(): places data onto the top of a stack
pop(): removes data from the top of the stack

## Queue

A queue is a data structure that models a FIFO (First In // First Out) operation.
A queue is a type of list where data is inserted at the end and is removed from the front. Queues are used to store data in the order in which they occur, as opposed to a stack, in which the last piece of data entered is the 1st element used for processing.

The main functions of a queue include:

enqueue(data): adds data to a queue (insertion)
dequeue(): removes the oldest data added to a queue (deletion)

###  Javascript arrays also provide the shift() method that can be used to implement the dequeue operation in a queue.