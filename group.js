
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

  [Symbol.iterator] () {
    return new GroupIterator(this);
  }

}

class GroupIterator {

  constructor (group) {
    this.group = group;
    this.index = 0;
  }

  next () {
    if (this.index == this.group._data.length) {
      return {done: true};
    } else {
      let value = this.group._data[this.index];
      this.index++;
      return {value, done: false};
    }
  }

}

module.exports = { Group };

