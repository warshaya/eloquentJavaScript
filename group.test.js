
const { Group } = require('./group.js');

test('group_isDefined', () => {
  const testGroup = new Group();
  expect(testGroup).toBeDefined();
});

test('group_hasAddMethod', () => {
  const testGroup = new Group();
  expect(testGroup.add()).toBeDefined();
});

