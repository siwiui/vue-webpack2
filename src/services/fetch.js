import 'whatwg-fetch'
import storage from './storage'
import { setQuery } from './utils'

function getHeaders () {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${storage.getItem('token')}`
  }
}

function _fetch (method, url, data = {}, opts = {}) {
  return new Promise((resolve, reject) => {
    let fetchRes
    if (method === 'GET') {
      fetchRes = fetch(url, {
        method,
        headers: getHeaders(),
        ...opts
      })
    } else {
      fetchRes = fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: getHeaders(),
        ...opts
      })
    }
    fetchRes.then(res => {
      if (res.status >= 200 && res.status < 300) {
        resolve(res.json())
      } else if (res.status === 401) {
        storage.setItem('token', '')
        alert('请重新登录')
        // location.assign('/oauth/to-auth')
      } else {
        res.json().then(err => reject(err.error))
      }
    })
  })
}

export const get = (url, data = {}, setting = {}) => _fetch('GET', setQuery(url, data), '', setting)
export const post = (url, data, setting = {}) => _fetch('POST', url, data, setting)
export const del = (url, data = {}, setting = {}) => _fetch('DELETE', setQuery(url, data), '', setting)
export const put = (url, data, setting = {}) => _fetch('PUT', url, data, setting)
export const patch = (url, data, setting = {}) => _fetch('PATCH', url, data, setting)
