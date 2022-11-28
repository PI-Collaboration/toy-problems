/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 var mergeTwoLists = function(l1, l2) {
    let mergedHead = new ListNode();
    let crt = mergedHead;


    while(l1 && l2) {
        if (l1.val > l2.val) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }
        crt = crt.next; 
    }
            crt.next = l1 || l2;
        
        return mergedHead.next;
};


class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const createLinkedList1 = () => {
    let node1 = new ListNode(1);
    let node2 = new ListNode(2);
    let node3 = new ListNode(4);
    node1.next = node2;
    node2.next = node3;

    let list = new LinkedList();
    list.head = node1;
    return list;
}

const createLinkedList2 = () => {
    let node1 = new ListNode(1);
    let node2 = new ListNode(3);
    let node3 = new ListNode(4);
    node1.next = node2;
    node2.next = node3;

    let list = new LinkedList();
    list.head = node1;
    return list
}

let l1 = createLinkedList1();
let l2 = createLinkedList2();
//console.log("lsit 1", l1)
//console.log("lsit 2", JSON.stringify(l2,null, 2))
console.log('result', JSON.stringify(mergeTwoLists(l1.head, l2.head), null, 4));