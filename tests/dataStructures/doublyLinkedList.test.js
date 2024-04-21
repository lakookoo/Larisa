const { Node, DoublyLinkedList } = require('../../dataStructures/doublyLinkedList')


test('Node constructor sets properties correctly', () => {
  const node = new Node(42);
  expect(node.val).toBe(42);
  expect(node.next).toBeNull();
  expect(node.prev).toBeNull();
});


test('DoublyLinkedList constructor sets properties correctly', () => {
  const dll = new DoublyLinkedList();

  expect(dll.head).toBeNull();
  expect(dll.tail).toBeNull();
  expect(dll.length).toBe(0);
});

describe('DoublyLinkedList push method', () => {
  test('pushing a value to an empty list', () => {
    const list = new DoublyLinkedList();
    list.push(10);
    expect(list.length).toBe(1);
    expect(list.head.val).toBe(10);
    expect(list.tail.val).toBe(10);
    expect(list.head.prev).toBeNull();
    expect(list.head.next).toBeNull();
    expect(list.tail.prev).toBeNull();
    expect(list.tail.next).toBeNull();
  });

  test('pushing multiple values to the list', () => {
    const list = new DoublyLinkedList();
    list.push(10);
    list.push(20);
    list.push(30);
    expect(list.length).toBe(3);
    expect(list.head.val).toBe(10);
    expect(list.tail.val).toBe(30);
    expect(list.head.prev).toBeNull();
    expect(list.head.next.val).toBe(20);
    expect(list.head.next.prev.val).toBe(10);
    expect(list.tail.prev.val).toBe(20);
    expect(list.tail.next).toBeNull();
  });

  test('popping a values from the list', () => {
    let list =  new DoublyLinkedList();
    expect(list.pop()).toBe(undefined);
    
    list.push(10);
    expect(list.pop()).toEqual({"next": null, "prev": null, "val": 10});
    list.push(10);
    list.push(20);
    list.push(30);
    list.pop();
    expect(list.length).toBe(2);
    expect(list.head.val).toBe(10);
    expect(list.tail.val).toBe(20);
    expect(list.head.prev).toBeNull();
    expect(list.head.next.val).toBe(20);
    expect(list.head.next.prev.val).toBe(10);
    expect(list.tail.prev.val).toBe(10);
    expect(list.tail.next).toBeNull();
  });

  test('shifting values from the list', () => {
    let list =  new DoublyLinkedList();
    expect(list.shift()).toBe(undefined);
    
    list.push(10);
    expect(list.shift()).toEqual({"next": null, "prev": null, "val": 10});
    list.push(10);
    list.push(20);
    list.push(30);
    list.shift();
    expect(list.length).toBe(2);
    expect(list.head.val).toBe(20);
    expect(list.tail.val).toBe(30);
    expect(list.head.prev).toBeNull();
    expect(list.head.next.val).toBe(30);
    expect(list.head.next.prev.val).toBe(20);
    expect(list.tail.prev.val).toBe(20);
    expect(list.tail.next).toBeNull();
  });

  test('adding a value to the beginning of the list', () => {
    // Scenario 1: Adding to an empty list
    let list = new DoublyLinkedList();
    list.unshift(10);
    expect(list.length).toBe(1);
    expect(list.head.val).toBe(10);
    expect(list.tail.val).toBe(10);
    expect(list.head.next).toBeNull();
    expect(list.head.prev).toBeNull();

    // Scenario 2: Adding to a non-empty list
    list.unshift(20);
    expect(list.length).toBe(2);
    expect(list.head.val).toBe(20);
    expect(list.head.next.val).toBe(10);
    expect(list.head.prev).toBeNull();
    expect(list.tail.val).toBe(10);
    expect(list.tail.prev.val).toBe(20);
    expect(list.tail.next).toBeNull();

    });
});




