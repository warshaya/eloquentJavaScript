
const { box, withBoxUnlocked } = require('./lockbox.js');

test('withBoxUnlocked_unlocksBoxWhenRunning_doesNotThrowLockedError', () => {
debugger;
  let testBox = new box();
  withBoxUnlocked(function() {
    testBox.content.push("gold piece");
  }, testBox);
});

test('withBoxUnlocked_pushAGoldPiece_BoxContainsGoldPiece', () => {
  let testBox = new box();
debugger;
  withBoxUnlocked(function() {
    testBox.content.push("gold piece");
  }, testBox);
  const result = testBox._content;
  expect(result).toBe(["gold piece"]);
});

