import client from './client'

export const login = (data) => {
  return client({
    url: '/login',
    method: 'post',
    data: data,
  })
}

export const test = () => {
  client().then((res) => {
    console.log(res)
  })

  return client({
    url: 'test',
    method: 'get',
  })
}
