
const { Group } = require('./group.js');

class PGroup {

  constructor () {
    this.group = new Group();
  }

  static get empty() {
    return new PGroup();
  }

  add (element) {
    const copyOfGroup = Group.from(this.group);
    copyOfGroup.add(element);
    const newPGroup = new PGroup();
    newPGroup.group = copyOfGroup;
    return newPGroup;
  }

  has (element) {
    return this.group.has(element);
  }

  delete (element) {
    const copyOfGroup = Group.from(this.group);
    copyOfGroup.delete(element);
    const newPGroup = new PGroup();
    newPGroup.group = copyOfGroup;
    return newPGroup;
  }

}

module.exports = { PGroup };

