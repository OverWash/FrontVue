<template>
  <div class='body-container'>
    <div class='max-width d-flex row ' style='font-size:1rem'>
      <div>
        <div class='d-flex justify-content-between'>
          <h2 class='title'>세탁검수하기</h2>
          <router-link to='/admin/confirm' class='pe-2'>
            <div class='btn btn-primary btn-sm '>상세내역</div>
          </router-link>
        </div>

        <table class='table'>
          <thead>
          <tr>
            <th scope='col'>예약확정번호</th>
            <th scope='col'>확정일자</th>
            <th scope='col'>고객 전화번호</th>
            <th scope='col'>고객 닉네임</th>
            <th scope='col'>검수하기</th>
          </tr>
          </thead>
          <tbody>
          <tr class='item-select ' v-for='(rc, index) in reservationConfirmeds ' :key='index'>
            <th scope='row'>{{ rc.confirmId }}</th>
            <td>{{ rc.confirmDate }}</td>
            <td>{{ rc.reservation.member.memberContact }}</td>
            <td>{{ rc.reservation.member.nickname }}</td>
            <td class='d-flex justify-content-center'>
              <button class='btn btn-primary btn-sm'
                      @click='changeDetailPage(rc.confirmId)'>검수하기
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div>
        <div class='d-flex justify-content-between'>
          <h2 class='h3'>Laundry</h2>
          <router-link to='/admin/laundry' class='pe-2'>
            <div class='btn btn-primary btn-sm'>상세내역</div>
          </router-link>
        </div>
        <table class='table'>
          <thead>
          <tr>
            <th scope='col'>예약확정번호</th>
            <th scope='col'>확정일자</th>
            <th scope='col'>고객 전화번호</th>
            <th scope='col'>고객 닉네임</th>
            <th scope='col'>세탁완료</th>
          </tr>
          </thead>
          <tbody>
          <tr class='item-select ' v-for='(data, index) in paymentRequests ' :key='index'>
            <td>{{ data.confirmId }}</td>
            <td>{{ data.confirmDate }}</td>
            <td>{{ data.reservation.member.memberContact }}</td>
            <td>{{ data.reservation.member.nickname }}</td>
            <td class='d-flex justify-content-center'>
              <button class='btn btn-primary btn-sm' @click='washingComplete(data.confirmId)'>세탁완료</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- <AdminDetailTable  /> -->
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'

import { checkWashingComplete, getPaymentRequests, getReservationConfirmeds } from '@/api'
import { checkConfirm, successToast } from '@/sweetAlert'
import router from '@/router/router'

export default {
  components: {
  },

  setup() {
    const reservationConfirmeds = ref([])
    const paymentRequests = ref([])
    const page = ref({
      pageNum: 1,
      amount: 5,
    })

    getReservationConfirmeds(page.value).then((response) => {
      reservationConfirmeds.value = response.data.reservationConfirmeds
    })

    getPaymentRequests(page.value).then((response) => {
      paymentRequests.value = response.data.paymentCompletes
    })
    const check = ref(false)

    const washingComplete = (confirmId) => {
      checkConfirm('세탁완료', '세탁완료 처리 하시겠습니까?')
        .then((result) => {
          if (result.isConfirmed) {
            checkWashingComplete(confirmId).then((res) => {
              if (res.status === 201) {
                successToast('정상 처리되었습니다!')

                let data = paymentRequests.value.filter((v) =>
                  v.confirmId !== confirmId)
                paymentRequests.value = data
              }
            })
          }
        })
    }
    const changeDetailPage = (confirmId)=>{
      router.push(`/admin/confirm/${confirmId}`)
    }

    return {
      check,
      reservationConfirmeds,
      paymentRequests,
      washingComplete,
      changeDetailPage
    }
  },

}
</script>

<style>
.title {
  margin-bottom: 1%;
}

.body-container {
  width: 100%;
  height: -webkit-fill-available;
}
</style>