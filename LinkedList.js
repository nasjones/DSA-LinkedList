class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item, before) {
        let currNode = this.head;
        let prevNode = this.head;
        if (!this.head)
            return null;
        if (this.head.value === before) {
            this.head = new _Node(item, this.head)
            return
        }

        while ((currNode != null) && (currNode.value != before)) {
            prevNode = currNode
            currNode = currNode.next
        }

        if (currNode === null) {
            console.log("node not Found")
            return
        }
        let input = new _Node(item, currNode)
        prevNode.next = input
    }

    insertAfter(item, after) {
        let currNode = this.head;

        if (!this.head)
            return null;
        if (this.head.value === after) {
            this.head.next = new _Node(item, this.head.next)
            return
        }

        while ((currNode != null) && (currNode.value != after)) {
            currNode = currNode.next
        }

        if (currNode === null) {
            console.log("node not Found")
            return
        }
        let input = new _Node(item, currNode.next)
        currNode.next = input
    }

    insertAt(item, pos) {
        let currNode = this.head;

        if (!this.head)
            return null;
        if (pos === 1) {
            this.insertFirst(item)
        }
        if (pos > this.size()) {
            console.log("position out of bounds by " + (pos - this.size() - 1))
            return
        }
        if (pos = this.size() + 1) {
            this.insertLast(item)
            return
        }

        pos--
        while ((currNode != null) && (pos != 1)) {
            currNode = currNode.next
            pos--
        }

        let input = new _Node(item, currNode.next)
        currNode.next = input

    }

    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;

        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {

            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    display() {
        let currNode = this.head
        if (currNode === null)
            return "empty list"
        let out = ""
        while (currNode !== null) {
            out += currNode.value + "->"
            currNode = currNode.next
        }
        return out

    }

    size() {
        let currNode = this.head
        if (currNode === null)
            return 0
        let count = 0

        while (currNode !== null) {
            count++
            currNode = currNode.next
        }

        return count
    }

    isEmpty() {
        let currNode = this.head
        if (currNode === null)
            return true
        return false
    }

    findPrevious(item) {
        let currNode = this.head
        if (currNode === null) {
            console.log("empty")
            return
        }
        let prevNode = this.head
        while ((currNode !== null) && (currNode.value !== item)) {
            prevNode = currNode
            currNode = currNode.next
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        return prevNode
    }

    findLast() {
        let currNode = this.head
        if (currNode === null) {
            console.log("Empty list")
            return
        }

        while (currNode.next !== null) {
            currNode = currNode.next
        }
        return currNode
    }

    reverse() {
        let currNode = this.head
        if (currNode === null) {
            console.log("Empty list")
            return
        }

        let temp = []
        for (let i = 0; i < this.size(); i++) {
            temp.push(currNode.value)
            currNode = currNode.next
        }
        let out = ""
        for (let i = this.size() - 1; i >= 0; i--)
            out += temp[i] + "->"

        return out
    }

    third() {
        let currNode = this.head;

        if (!this.head)
            return null;
        if (this.size() < 4) {
            console.log("Too small")
            return
        }
        if (this.size() === 4) {
            return currNode
        }
        let count = 0
        while ((currNode != null) && (count != this.size() - 3)) {
            currNode = currNode.next
            count++
        }

        return currNode
    }

    middle() {
        let currNode = this.head;

        if (!this.head)
            return null;
        if (this.size() < 3) {
            console.log("Too small")
            return
        }
        if (this.size() === 3) {
            return currNode.next
        }

        let mid = Math.floor(this.size() / 2)
        let count = 0
        while ((currNode != null) && (count != mid)) {
            currNode = currNode.next
            count++
        }

        return currNode
    }

}

function main() {
    let SLL = new LinkedList
    SLL.insertFirst("Apollo")
    SLL.insertLast("Boomer")
    SLL.insertLast("Helo")
    SLL.insertLast("Husker")
    SLL.insertLast("Starbuck")
    SLL.insertLast("Tauhida")
    SLL.remove("Husker")

    let ELL = new LinkedList
    SLL.insertBefore("Athena", "Boomer")
    SLL.insertAfter("Hotdog", "Helo")
    SLL.insertAt("Kat", 3)
    SLL.remove("Tauhida")
    console.log(SLL.display())
    console.log(SLL.size())
    console.log(SLL.isEmpty())
    console.log(SLL.reverse())
    console.log(SLL.third())
    console.log(SLL.middle())
    console.log(ELL.isEmpty())
}
main()