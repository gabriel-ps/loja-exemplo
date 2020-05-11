export default class CreditCard {
  constructor (data) {
    this.number = ''
    this.name = ''
    this.expirationDate = ''
    this.cvv = ''
    this.type = ''

    if (data) {
      this.bind(data)
    }
  }

  bind (data) {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        this[key] = data[key]
      }
    }
  }
}
