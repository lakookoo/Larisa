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
});



