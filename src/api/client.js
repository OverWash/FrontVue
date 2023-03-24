import axios from 'axios'

const client = axios.create()
client.defaults.baseURL = '/'

client.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log(error)
  }
)

export default client
