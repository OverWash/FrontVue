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
  console.log(page.value)
  return client({
    url:'/admin/rc/list',
    method:'post',
    data:page
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

export const registerMember = (data) => {
  return client({
    url: '/register/member',
    method: 'post',
    data: data,
  })
}

export const registerCrew = (data) => {
  return client({
    url: '/register/crew',
    method: 'post',
    data: data,
  })
}

export const getReservationList = (id, p, a) => {
  return client({
    url: `/reservations/${id}`,
    method: 'get',
    params: {
      page: p,
      amount: a
    }
  })
}

export const getPriceList = (p, a) => {
  return client({
    url: 'info/price',
    method: 'get',
    params: {
      page: p,
      amount: a
    }
  })
}

export const getPrList = (id, p, a) => {
  return client({
    url: `/payment/request-list/${id}`,
    method: 'get',
    params: {
      page: p,
      amount: a
    }
  })
}

export const getPrDetail = (id) => {
  return client({
    url: `/payment/request/${id}`,
    method: 'get',
  })
}

export const getCheckList = (id, p, a) => {
  return client({
    url: `/check/${id}`,
    method: 'get',
    params: {
      page: p,
      amount: a
    }
  })
}

export const createReceipt = (id, data) => {
  return client({
    url: `/payment/process/${id}`,
    method: 'post',
    data: {
      "paymentMethod": data
    },
  })
}

export const getReceiptList = (id, p, a) => {
  return client({
    url: `/payment/receipt-list/${id}`,
    method: 'get',
    params: {
      page: p,
      amount: a
    }
  })
}

export const getReceiptDetail = (id) => {
  return client({
    url: `/payment/receipt/${id}`,
    method: 'get',
  })
}

export const checkWashingComplete=(confirmId)=>{
  return client({
    url: `/admin/wc/${confirmId}/complete`,
    method:'post'

  })
}

export const checkConfirmDetail=(confirmId)=>{
  return client({
    url:`/admin/rc/${confirmId}/detail`,
    method:'get',

  })


}