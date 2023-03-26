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

      <ReservationTable :reservationList="reservationList" />
    </div>
  </div>
  <!-- End Content Row -->
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import ReservationRequest from '@/components/mainPage/ReservationRequest.vue'
import ReservationLast from '@/components/mainPage/ReservationLast.vue'
import ReservationList from '@/components/mainPage/ReservationList.vue'
import PaymentRequestList from '@/components/mainPage/PaymentRequestList.vue'
import ReservationTable from '@/components/mainPage/ReservationTable.vue'
//import { useRouter } from 'vue-router';


export default {
  components: {
    ReservationRequest,
    ReservationLast,
    ReservationList,
    PaymentRequestList,
    ReservationTable,
  },

  setup() {
    const reservationList = ref([])
    const prList = ref([])

    const getReservationList = async () => {
      try {
        const res = await axios.get(
          // 임시로 1번 멤버 불러오기
          'http://127.0.0.1:8100/reservations/1'
        )
        reservationList.value = res.data
      } catch (err) {
        console.log(err)
      }
    }

    const getPrList = async () => {
      try {
        const res = await axios.get(
          // 임시로 1번 멤버 불러오기
          'http://127.0.0.1:8100/payments/1'
        )
        prList.value = res.data
        console.log("test");
      } catch (err) {
        console.log(err)
      }
    }

    getReservationList()
    getPrList();

    return {
      reservationList,
      prList,
      getReservationList,
      getPrList
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