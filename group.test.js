
const { Group } = require('./group.js');

test('group_isDefined', () => {
  const testGroup = new Group();
  expect(testGroup).toBeDefined();
});

test('group_addMethod_returnsUndefined', () => {
  const testGroup = new Group();
  expect(testGroup.add()).toBeUndefined();
});

test('group_deleteMethod_returnsUndefined', () => {
  const testGroup = new Group();
  expect(testGroup.delete()).toBeUndefined();
});

test('group_hasHasMethod', () => {
  const testGroup = new Group();
  expect(testGroup.has()).toBeDefined();
});

test('group_newGroup_isEmpty', () => {
  const testGroup = new Group();
  const result = testGroup.has(0);
  expect(result).toBe(false);
});

test('add_numberToGroup_groupHasNumber', () => {
  const testGroup = new Group();
  testGroup.add(0);
  const result = testGroup.has(0);
  expect(result).toBe(true);
});

test('delete_removesValueFromGroup', () => {
  const testGroup = new Group();
  testGroup.add(0);
  testGroup.delete(0);
  const result = testGroup.has(0);
  expect(result).toBe(false);
});

test('add_addElementTwice_OnlyKeepsOneCopy', () => {
  const testGroup = new Group();
  testGroup.add(1);
  testGroup.add(1);
  testGroup.delete(1);
  const result = testGroup.has(1);
  expect(result).toBe(false);
});

test('from_array_groupHasElement', () => {
  const testGroup = Group.from([1, 2, 3]);
  expect(testGroup.has(1)).toBe(true);
  expect(testGroup.has(2)).toBe(true);
  expect(testGroup.has(3)).toBe(true);
  expect(testGroup.has(4)).toBe(false);
});

test('group_isIterable', () => {
  const testGroup = Group.from([1, 2, 3]);
  for (let entry of testGroup) {
    let temp = entry;
  }
});

