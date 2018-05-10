
const { reliableMultiply } = require('./reliableMultiply.js');

test('reliableMultiply_8x8_returns64', () => {
  const result = reliableMultiply(8, 8);
  expect(result).toBe(64);
});

test('reliableMultiply_8x8_doesNotThrow', () => {
  for (let i = 0; i < 100; i++) {
    reliableMultiply(8, 8);
  }
});

