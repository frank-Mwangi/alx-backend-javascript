import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new Error('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new Error('currency must be a Currency object');
    }
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setters
  set amount(amt) {
    if (typeof amt !== 'number') {
      throw new Error('Amount must be a number');
    }
    this._amount = amt;
  }

  get amount() {
    return this._amount;
  }

  set currency(curr) {
    if (!(curr instanceof Currency)) {
      throw new Error('Enter a currency');
    }
    this._currency = curr;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new Error('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new Error('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
