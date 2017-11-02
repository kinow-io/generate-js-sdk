class Validate {
  static isString(str) {
    return typeof str === 'string'
  }
  static isNumber (int) {
    return typeof int === 'number'
  }
  static isBoolean (bool) {
    return typeof bool === 'boolean'
  }
  static isJson (json) {
    if (typeof json === 'object') {
      return true
    }

    try {
      JSON.parse(json)
      return true
    } catch (e) {
      return false
    }
  }
  static isEmail (email) {
  }
}

module.exports = Validate
