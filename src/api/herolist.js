import axios from 'axios'

export default function getHeroList () {
  const url = '/api/getheroList'

  const data = []

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
