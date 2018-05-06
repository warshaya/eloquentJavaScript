
const { Group } = require('./group.js');

class PGroup {

  constructor () {
    this.group = new Group();
  }

  add (element) {
    const copyOfGroup = Group.from(this.group);
    copyOfGroup.add(element);
    return copyOfGroup;
  }

  has (element) {
    return this.group.has(element);
  }

  delete (element) {
    this.group.delete(element);
  }

}

module.exports = { PGroup };

