import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://business-service-appreciative-tiger-vi.cfapps.io`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
