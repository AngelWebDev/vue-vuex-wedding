import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://offers-service-brash-wombat-fl.cfapps.io`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
