
const { PGroup } = require('./pgroup.js');

test('pgroup exists', () => {
  const testgroup = new PGroup();
  expect(testgroup).toBeDefined();
});

