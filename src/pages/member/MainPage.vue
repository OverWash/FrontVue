<template>
  <!-- Content Row -->
  <div class="MainPage">
    <div class="row">
      <!-- 세탁신청 버튼 -->
      <ReservationRequest />

      <!-- 최근예약현황 -->
      <ReservationLast :reservationList="reservationList" />

      <ReservationList :reservationList="reservationList" />

      <PaymentRequestList :prList="prList" />
    </div>
  </div>
  <!-- End Content Row -->
</template>

<script>
import { ref } from 'vue'
import { getReservationList } from '@/api/index.js'
import store from '@/store/store.js'
import ReservationRequest from '@/components/mainPage/ReservationRequest.vue'
import ReservationLast from '@/components/mainPage/ReservationLast.vue'
import ReservationList from '@/components/mainPage/ReservationList.vue'
import PaymentRequestList from '@/components/mainPage/PaymentRequestList.vue'
import { failToast } from '@/sweetAlert'


export default {
  components: {
    ReservationRequest,
    ReservationLast,
    ReservationList,
    PaymentRequestList,
  },

  setup() {
    const id = store.state.userid

    const reservationList = ref([])

    const getList = () => {
      const response = getReservationList(id, 1, 5)
      response
        .then((res) =>{
          console.log(res.data)
          reservationList.value = res.data.reservations
        })
        .catch(() => {
          failToast('데이터 로딩에 실패하였습니디.')
        })
    }
    getList();
    
    // const getReservationList = async () => {
    //   try {
    //     // const res = await axios.get(
    //     //   // 임시로 1번 멤버 불러오기
    //     //   //'http://127.0.0.1:8100/reservations/1'
    //     //   'http://127.0.0.1:8100/reservations/1'
    //     // )

    //     //reservationList.value = res.data
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }


    return {
      reservationList,
      store,
      getList
    }
  },
}
</script>

<style>
.body {
  overflow: inherit;
}

.main-page {
  padding: 20px;
}
</style>