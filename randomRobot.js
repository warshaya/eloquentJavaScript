
const { randomPick } = require('./randomPick.js');
const { roadGraph } = require('./roadGraph.js');

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

module.exports = { randomRobot };

