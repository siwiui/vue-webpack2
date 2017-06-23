const querystring = require('querystring')
const { URL } = require('url')
// const storage = require('./storage')
let utils = {}
utils.title = (title) => {
  title = title || 'Siwi'
  window.document.title = title
}
utils.checkSignSatus = () => {
  let isSigned = JSON.parse(window.localStorage.getItem('authUser'))
  if (isSigned && isSigned.oauthInfo.access_ttoken !== '' && isSigned.userData !== '') {
    return isSigned
  } else {
    return false
  }
}
utils.setQuery = (url, data) => {
  let query = querystring.stringify(data)
  return `${url}?${query})`
}
utils.parseQuery = (url) => {
  let myUrl = new URL(url)
  let query = myUrl.query
  return querystring.parse(query)
}
export default utils
