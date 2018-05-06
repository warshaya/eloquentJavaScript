
class Group {

  constructor () {
    this._data = [];
  }

  static from (inputArray) {
    const group = new Group();
    for (let entry of inputArray) {
      group.add(entry);
    }
    return group;
  }

  add (value) {
    if (this._data.indexOf(value) == -1) {
      this._data.push(value);
    }
  }

  delete (value) {
    const index = this._data.indexOf(value);
    if (index > -1) {
      this._data.splice(index, 1);
    }
  }

  has (value) {
    if (this._data.indexOf(value) > -1) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = { Group };

