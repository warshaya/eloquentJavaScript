
const { PGroup } = require('./pgroup.js');

test('pgroup exists', () => {
  const testgroup = new PGroup();
  expect(testgroup).toBeDefined();
});

test('add_element_groupHasTheElement', () => {
  const testgroup = new PGroup();
  testgroup.add(1);
  const result = testgroup.has(1);
  expect(result).toBe(true);
});

