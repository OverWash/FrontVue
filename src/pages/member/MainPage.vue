<template>
  <!-- Content Row -->
  <div class="main-page">
    <div class="row">
      <!-- 세탁신청 버튼 -->
      <ReservationRequest />

      <!-- 최근예약현황 -->
      <ReservationLast :reservationList="reservationList" />

      <ReservationList :reservationList="reservationList" />

      <PaymentRequestList :prList="prList"/>
    </div>
  </div>
  <!-- End Content Row -->
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import ReservationRequest from "@/components/ReservationRequest.vue";
import ReservationLast from "@/components/ReservationLast.vue";
import ReservationList from "@/components/ReservationList.vue";
import PaymentRequestList from "@/components/PaymentRequestList.vue";
//import { useRouter } from 'vue-router';

export default {
  components: {
    ReservationRequest,
    ReservationLast,
    ReservationList,
    PaymentRequestList,
  },

  setup() {
    const reservationList = ref([]);
    const prList = ref([]);

    const getReservationList = async () => {
      try {
        const res = await axios.get(
          "/reservations/getList/1"
        );
        reservationList.value = res.data;
      } catch (err) {
        console.log(err);
      }
    };

    const getPrList = async () => {
      try {
        const res = await axios.get(
          "/reservations/getPrList/1"
        );
        prList.value = res.data;
      } catch (err) {
        console.log(err);
      }
    };

    getReservationList();
    getPrList();

    return {
      reservationList,
      prList,
      getReservationList,
      getPrList
    };
  },
};
</script>

<style>
.body {
  overflow: inherit;
}

.main-page {
  padding: 100px;
}
</style>