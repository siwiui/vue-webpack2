export default {
  getItem (key) {
    let value = window.localStorage.getItem(key)
    try {
      value = JSON.parse(value)
    } catch (error) {
      console.log('storage getItem ERROR', error)
    }
    return value
  },
  setItem (key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
  },
  removeItem (key) {
    window.localStorage.removeItem(key)
  },
  clear () {
    window.localStorage.clear()
  }
}
