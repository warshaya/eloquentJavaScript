
class Group {

  constructor () {
    this._data = [];
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

