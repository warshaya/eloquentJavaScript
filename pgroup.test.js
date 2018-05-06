
const { PGroup } = require('./pgroup.js');

test('pgroup exists', () => {
  const testgroup = new PGroup();
  expect(testgroup).toBeDefined();
});

test('add_element_oldGroupDoesNotHaveTheElement', () => {
  const testgroup = new PGroup();
  const testgroup2 = testgroup.add(1);
  const result = testgroup.has(1);
  expect(result).toBe(false);
});

test('delete_element_removesTheElement', () => {
  const testgroup = new PGroup();
  testgroup.add(1);
  testgroup.delete(1);
  const result = testgroup.has(1);
  expect(result).toBe(false);
});

test('add_element_returnsANewGroupwithElement', () => {
  const testgroup = new PGroup();
  const testgroup2 = testgroup.add(1);
  expect(testgroup2.has(1)).toBe(true);
});

