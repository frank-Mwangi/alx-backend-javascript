export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMesage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(size) {
    if (typeof size !== 'number') {
      throw new Error('Type of size must be number');
    }
    this._sqft = size;
  }
}
