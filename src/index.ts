import { LinkedList } from './data-structures/LinkedList/index';
(function () {
    const linkedList = new LinkedList();

    linkedList.insertFirst(1);
    linkedList.insertFirst(2);
    linkedList.insertFirst(3);
    linkedList.insertFirst(4);
    linkedList.insertFirst(5);
    linkedList.insertFirst(6);
    linkedList.insertFirst(7);

    linkedList.deleteFirst()
    linkedList.deleteLast()

    console.log("find :", linkedList.search(4))

    console.log('size : ', linkedList.size())
    console.log(linkedList.traverse())


})()