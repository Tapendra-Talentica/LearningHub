class LinkedList {
    constructor() {
      this.head = null;  // The first node in the list
    }
  
    // Create: Add a new node to the end of the list
    create(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Read: Display the entire linked list
    read() {
      if (!this.head) {
        console.log("List is empty");
        return;
      }
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  
    // Update: Update the value of a node at a specific position
    update(position, newData) {
      if (position < 0) {
        console.log("Position must be a non-negative integer");
        return;
      }
      let current = this.head;
      let index = 0;
      while (current) {
        if (index === position) {
          current.data = newData;
          return;
        }
        index++;
        current = current.next;
      }
      console.log("Position not found in the list");
    }
  
    // Delete: Remove a node at a specific position
    delete(position) {
      if (position < 0 || !this.head) {
        console.log("Invalid position or list is empty");
        return;
      }
  
      if (position === 0) {  // If we want to delete the head
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      let previous = null;
      let index = 0;
  
      while (current) {
        if (index === position) {
          previous.next = current.next;
          return;
        }
        previous = current;
        current = current.next;
        index++;
      }
  
      console.log("Position not found in the list");
    }
  }
  