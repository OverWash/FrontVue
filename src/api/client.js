import axios from 'axios'
import swal from 'sweetalert2'
import store from '@/store/store'

const client = axios.create()
client.defaults.baseURL = '/'

const token = store.state.token
client.defaults.headers.common['Authorization'] = `Bearer ${token}`

client.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status == 401) {
      swal.fire({
        title: '로그인 실패',
        text: '입력 정보가 잘못되었습니다.',
        icon: 'info',
      })
    }
    return Promise.reject(error);
  }
)

export default client
