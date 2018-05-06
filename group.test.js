
const { Group } = require('./group.js');

test('group_isDefined', () => {
  const testGroup = new Group();
  expect(testGroup).toBeDefined();
});

