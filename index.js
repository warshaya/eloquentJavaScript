'use strict';

const { roads } = require('./roads');
const { buildGraph } = require('./buildGraph.js');
const { VillageState } = require('./villageState.js');
const { runRobot } = require('./runRobot.js');
const { randomPick  } = require('./randomPick.js');
const { randomRobot } = require('./randomRobot.js');
const { roadGraph } = require('./roadGraph.js');
const { routeRobot } = require('./routeRobot.js');
const { goalOrientedRobot } = require('./goalOrientedRobot.js');
const { picksUpNearbyPackagesRobot } = require('./picksUpNearbyPackagesRobot.js');

/*
let first = new VillageState(
  "Post Office",
  [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);
// → Post Office
*/

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};




runRobot(VillageState.random(), randomRobot);




console.log('=====++++===+++++=====++++++===+==+++=+++++++=+++++++===++++=++++++++=+');
console.log('=====++++===+++++=====++++++===+==+++=+++++++=+++++++===++++=++++++++=+');



runRobot(VillageState.random(), routeRobot, []);



console.log('=====++++===+++++=====++++++===+==+++=+++++++=+++++++===++++=++++++++=+');
console.log('=====++++===+++++=====++++++===+==+++=+++++++=+++++++===++++=++++++++=+');


runRobot(VillageState.random(),
                  goalOrientedRobot, []);


console.log('=====++++===+++++=====++++++===+==+++=+++++++=+++++++===++++=++++++++=+');
console.log('=====++++===+++++=====++++++===+==+++=+++++++=+++++++===++++=++++++++=+');


runRobot(VillageState.random(), picksUpNearbyPackagesRobot, []);


console.log('=====++++===+++++=====++++++===+==+++=+++++++=+++++++===++++=++++++++=+');
console.log('=====++++===+++++=====++++++===+==+++=+++++++=+++++++===++++=++++++++=+');


function compareRobots(robot1, memory1, robot2, memory2, robot3, memory3) {
  // Your code here
  let performance = {  // number of steps in each trial
    rob1: [],
    rob2: [],
    rob3: [],
  };
  for (let i = 0; i < 100; i++) {
    let trialVillage = VillageState.random();
    performance.rob1.push(runRobot(trialVillage, robot1, memory1));
    performance.rob2.push(runRobot(trialVillage, robot2, memory2));
    performance.rob3.push(runRobot(trialVillage, robot3, memory3));
  }
  console.log(robot1, " took ", performance.rob1.reduce((t, v) => t += v, 0)/100, " steps on average.");
  console.log(robot2, " took ", performance.rob2.reduce((t, v) => t += v, 0)/100, " steps on average.");
  console.log(robot3, " took ", performance.rob3.reduce((t, v) => t += v, 0)/100, " steps on average.");
}

compareRobots(routeRobot, [], goalOrientedRobot, [], picksUpNearbyPackagesRobot, []);



