
const { Group } = require('./group.js');

class PGroup {

  constructor () {
    this.group = new Group();
  }

  add (element) {
    this.group.add(element);
  }

  has (element) {
    return this.group.has(element);
  }

  delete (element) {
    this.group.delete(element);
  }

}

module.exports = { PGroup };

