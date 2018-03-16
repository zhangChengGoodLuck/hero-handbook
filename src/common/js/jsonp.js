import originJsonp from 'jsonp'

export default function jsonp (url, data, option) {
  let date = new Date()

  let time = date.getTime().toString()

  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data) + 't=' + time

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param (data) {
  let url = ''

  for (var k in data) {
    let value = data[k] === 'undefined' ? '' : data[k]
    url += '$' + k + '=' + encodeURIComponent(value)
  }

  return url ? url.substring(1) : ''
}
