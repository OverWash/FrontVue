import axios from 'axios'
import store from '@/store/store'
import { errorAlert } from '@/sweetAlert'

const client = axios.create()
client.defaults.baseURL = '/'

const token = store.state.token
client.defaults.headers.common['Authorization'] = `Bearer ${token}`
// console.log(token)

client.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const status = error.response.status;
    switch (status) {
      case 400:
        errorAlert('잘못된 문법입니다.')
        break;
      case 401:
        errorAlert('등록되지 않은 정보입니다.')
        break;
      case 403:
        errorAlert('접근 권한이 없습니다.')
        break;
      case 404:
        errorAlert('해당 요청을 찾을 수 없습니다.')
        break;
      case 500:
        errorAlert('서버 에러가 발생하였습니다.')
        break;
      case 502:
        errorAlert('Bad Gateway')
        break;
      case 502:
        errorAlert('서버가 이용 불가능한 상태입니다.')
        break;
    }

    return Promise.reject(error);
  }
)

export default client
