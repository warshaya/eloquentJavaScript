
class Group {

  constructor () {
    this._data = [];
  }

  add (value) {
    this._data.push(value);
  }

  delete () {
    return 0;
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

