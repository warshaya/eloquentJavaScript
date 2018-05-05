
const { buildGraph } = require('./buildGraph.js');
const { roads } = require('./roads.js');
const { roadGraph } = require('./roadGraph.js');

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

module.exports = { VillageState };

