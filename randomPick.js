
/**
* A dumb robot moves in a random direction
*/
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

module.exports = { randomPick };

