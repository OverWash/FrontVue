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

export const getPriceList = () => {
  return client({
    url: 'info/price',
    method: 'get'
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

export const getCheckList = (id) => {
  return client({
    url: `/check/${id}`,
    method: 'get',
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

export const getCrewName = () => {
  return client({
    url    : '/crew/crew-name',
    method : 'get'
  })
}

export const getInProcessDeliveryCnt = () => {
  return client({
    url    : '/crew/in-process-cnt',
    method : 'get'
  })

}

export const getCompletedDeliveryCnt = () => {
  return client({
    url    : '/crew/completed-cnt',
    method : 'get'
  })
}

export const getPickupList = (page, amount) => {
  return client({
    url : '/delivery/pickup-list',
    method : 'post',
    data : {
      'pageNum' : page,
      'amount' : amount
    }
  })
}

export const getWcList = (page, amount) => {
  return client({
    url    : '/delivery/to-be',
    method : 'post',
    data   : {
      'pageNum' : page,
      'amount' : amount
    }
  })
}

export const collect = (rid) => {
  return client({
    url    : `/delivery/collect/${rid}`,
    method : 'post'
  })
}

export const delivery = (rid, wcId) => {
  return client({
    url : `/delivery/process/${rid}/${wcId}`,
    method : 'post'
  })
}

export const getDeliveringList = (page, amount) => {
  return client({
    url    : `/delivery/in-process`,
    method : 'post',
    data   : {
      'pageNum' : page,
      'amount' : amount
    }
  })
}

export const completeDelivery = (rid, deliveryid) => {
  return client({
    url    : `/delivery/completed/${rid}/${deliveryid}`,
    method : 'post'
  })
}

export const getCompleteDelivery = (page, amount) => {
  return client({
    url    : `/delivery/completed`,
    method : 'post',
    data   : {
      'pageNum' : page,
      'amount' : amount
    }
  })
}

export const getCrewInfo = () => {
  return client({
    url    : '/crew/modify',
    method : 'get'
  })
}

export const checkPwCrew = (email, checkPassword) => {
  return client({
    url    : '/crew/checkpw',
    method : 'post',
    data   : {
      "email" : email,
      "password" : checkPassword
    }
  })
}

export const modifyInfoCrew = (info) => {
  console.log(info)
	return client({
		url : 'crew/modify',
		method : 'patch',
		data : info
			
	})
}

export const removeInfoCrew = () => {
	return client({
		url : 'crew/remove',
		method : 'patch'
	})
}

export const getMemberInfo = () => {
  return client({
    url    : '/member/modify',
    method : 'get'
  })
}

export const checkPwMember = (email, checkPassword) => {
  return client({
    url    : '/member/checkpw',
    method : 'post',
    data   : {
      "email" : email,
      "password" : checkPassword
    }
  })
}

export const modifyInfoMember = (info) => {
	return client({
		url : 'member/modify',
		method : 'patch',
		data : info
			
	})
}

export const removeInfoMember = () => {
	return client({
		url : 'member/remove',
		method : 'patch'
	})
}

