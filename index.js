'use strict';

/**
* this is the data that makes up a town. a list of connecting roads
*/
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

/**
* Given an array of edges, buildGraph creates a map object that,
* for each node, stores an array of connected nodes.
*/
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

/**
* This creates a village state.  It has current position of the robot,
* as well as any remaining packages to deliver, and their destination addresses.
*
* If the robot moves to a spot, he will deliver the packages that go there.
*/
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

const roadGraph = buildGraph(roads);

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

/**
* This has the robot take a step, move packages, and deliver them.
*/
function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      return turn;  // return the number instead of stopping.
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

/**
* A dumb robot moves in a random direction
*/
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

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
// → Moved to Marketplace
// → Moved to Town Hall
// → …
// → Done in 63 turns

console.log('=====++++===+++++=====++++++===+==+++=+++++++=+++++++===++++=++++++++=+');
console.log('=====++++===+++++=====++++++===+==+++=+++++++=+++++++===++++=++++++++=+');

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}


runRobot(VillageState.random(), routeRobot, []);

console.log('=====++++===+++++=====++++++===+==+++=+++++++=+++++++===++++=++++++++=+');
console.log('=====++++===+++++=====++++++===+==+++=+++++++=+++++++===++++=++++++++=+');



function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

runRobot(VillageState.random(),
                  goalOrientedRobot, []);


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

compareRobots(routeRobot, [], goalOrientedRobot, [], goalOrientedRobotImproved, []);


function findRouteImproved(graph, from, to, villageState) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      else if (ContainsParcel(place, VillageState)) {
        work.push({at: place, route: route.concat(place)});
      }
      else if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}


function ContainsParcel (place, VillageState) {
  if (VillageState.parcels.some(p => p.at == place)) {
    return true;
  } else {
    return false;
  }
}

function goalOrientedRobotImproved({place, parcels}, route) {
  let village = new VillageState(place, parcels);
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRouteImproved(roadGraph, place, parcel.place, village);
    } else {
      route = findRouteImproved(roadGraph, place, parcel.address, village);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

