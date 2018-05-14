
const { boxMaker, withBoxUnlocked } = require('./lockbox.js');

test('withBoxUnlocked_unlocksBoxWhenRunning_doesNotThrowLockedError', () => {
  let testBox = boxMaker();
  withBoxUnlocked(function() {
    testBox.content.push("gold piece");
  }, testBox);
});

test('withBoxUnlocked_pushAGoldPiece_BoxContainsGoldPiece', () => {
  let testBox = boxMaker();
  withBoxUnlocked(function() {
    testBox.content.push("gold piece");
  }, testBox);
  const result = testBox._content;
  expect(result).toEqual(["gold piece"]);
});

test('withBoxUnlocked_errorRaised_boxIsLockedAgain', () => {
  let testBox = boxMaker();
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    }, testBox);
  } catch (e) {
    console.log("Error raised:", e);
  }
  const result = testBox.locked;
  expect(result).toBe(true);
});

