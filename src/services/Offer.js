import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://offers-service-fluent-crocodile-nv.cfapps.io`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
