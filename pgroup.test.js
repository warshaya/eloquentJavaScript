
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

test('delete_element_returnsNewGroupWithoutElement', () => {
  const testgroup = new PGroup();
debugger;
  const testgroup2 = testgroup.add(1);
  const testgroup3 = testgroup2.delete(1);
  const result = testgroup3.has(1);
  expect(result).toBe(false);
});

test('add_usingSymbols_works', () => {
  const testgroup = new PGroup();
  const testgroup2 = testgroup.add(Symbol.testword);
  const result = testgroup2.has(Symbol.testword);
  expect(result).toBe(true);
});

test('add_usingStrings_works', () => {
  const testgroup = new PGroup();
  const testgroup2 = testgroup.add("test");
  const result = testgroup2.has("test");
  expect(result).toBe(true);
});

test('empty_returnsAnEmptyPGroup', () => {
  const testgroup = PGroup.empty;
  expect(testgroup).toBeDefined();
});

test('acceptanceTest', () => {
  let a = PGroup.empty.add("a");
  let ab = a.add("b");
  let b = ab.delete("a");
  
  let result1 = b.has("b");
  expect(result1).toBe(true);

  let result2 = a.has("b");
  expect(result2).toBe(false);

  let result3 = b.has("a");
  expect(result3).toBe(false);

});

