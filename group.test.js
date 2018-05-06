
const { Group } = require('./group.js');

test('group_isDefined', () => {
  const testGroup = new Group();
  expect(testGroup).toBeDefined();
});

test('group_addMethod_returnsUndefined', () => {
  const testGroup = new Group();
  expect(testGroup.add()).toBeUndefined();
});

test('group_hasDeleteMethod', () => {
  const testGroup = new Group();
  expect(testGroup.delete()).toBeDefined();
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

