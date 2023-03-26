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

export const getReservationConfirmeds=(page)=>{

  return client({
    url:'/admin/confirmed',
    method:'post',
    data:page,
  })
}

export const getPaymentRequests=(page)=>{
  return client({
    url:'/admin/rc/list',
    method:'post',
    data:page
  })
}