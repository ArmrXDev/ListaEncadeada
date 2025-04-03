function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.root = null;
  this.tail = null;

  this.add = (data) => {
    const NewNode = new Node(data);
    if (!this.root) {
      this.root = NewNode;
      this.tail = NewNode;
    } else {
      this.tail.next = NewNode;
      this.tail = this.tail.next;
    }
  };
  this.print = (separator = " -> ") => {
    let temp = this.root;
    let result = [];
    while (temp) {
      result.push(temp.data);
      temp = temp.next;
    }
    return result.join(separator);
  };
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(33);
list.add(4);
console.log(list.print());
