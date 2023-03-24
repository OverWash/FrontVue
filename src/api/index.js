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

export const logout = () => {
  return client({
    url: '/logout',
    method: 'post'
  })
}

export const checkEmail = (param) => {
  return client({
    url: '/check',
    method: 'get',
    params: {
      email: param
    }
  })
}

export const checkContact = (type, contact) => {
  
  return client({
    url: `/check/${type}/${contact}`,
    method: 'get',
  })
}

