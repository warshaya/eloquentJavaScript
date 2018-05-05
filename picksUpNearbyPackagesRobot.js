
const { VillageState } = require('./villageState.js');
const { roadGraph } = require('./roadGraph.js');
const { goalOrientedRobot, findRoute } = require('./goalOrientedRobot.js');

function ContainsParcel (place, villageState) {
  if (villageState.parcels.some(p => p.place == place)) {
    return true;
  } else {
    return false;
  }
}

function findParcel(state) {
  for (let nearbyPlace of roadGraph[state.place]) {
    if (ContainsParcel(nearbyPlace, state)) {
      return state.parcels.filter(w => w.place = nearbyPlace)[0];
    }
  }
  return state.parcels[0];
}

function picksUpNearbyPackagesRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = findParcel({place, parcels});
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

module.exports = { picksUpNearbyPackagesRobot };

