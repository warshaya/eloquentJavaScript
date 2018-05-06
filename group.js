
class Group {

  constructor() {
    this._data = [];
  }

  add(value) {
    this._data.push(value);
  }

  delete() {
    return 0;
  }

  has() {
    return false;
  }

}

module.exports = { Group };

