<template>
  <div class="body-container">
    <div class="max-width d-flex row " style="font-size:1rem">
      <div>
        <div class="d-flex justify-content-between">
          <h2 class="title">세탁검수하기</h2>
          <router-link to="/admin/confirm" class="pe-2">
            <div class="btn btn-primary btn-sm ">상세내역</div>
          </router-link>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">예약확정번호</th>
              <th scope="col">확정일자</th>
              <th scope="col">고객 전화번호</th>
              <th scope="col">고객 닉네임</th>
              <th scope="col">검수하기</th>
            </tr>
          </thead>
          <tbody>
              <tr class="item-select " v-for="(rc, index) in reservationConfirmeds " :key="index">
              <th scope="row">{{ rc.confirmId }}</th>
              <td>{{ rc.confirmDate}}</td>
              <td>{{ rc.reservation.member.memberContact }}</td>
              <td>{{ rc.reservation.member.nickname }}</td>
              <td class="d-flex justify-content-end"><button class="btn btn-primary btn-sm"
                  @click="showModal(rc.confirmId)">검수하기</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div>
        <div class="d-flex justify-content-between">
          <h2 class="h3">Laundry</h2>
          <router-link to="/admin/laundry" class="pe-2">
            <div class="btn btn-primary btn-sm">상세내역</div>
          </router-link>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">예약확정번호</th>
              <th scope="col">확정일자</th>
              <th scope="col">고객 전화번호</th>
              <th scope="col">고객 닉네임</th>
              <th scope="col">세탁완료</th>
            </tr>
          </thead>
          <tbody>
            <tr class="item-select " v-for="(data, index) in paymentRequests " :key="index">
              <td>{{ data.confirmId}}</td>
              <td>{{ data.confirmDate }}</td>
              <td>{{ data.reservation.member.memberContact }}</td>
              <td>{{ data.reservation.member.nickname }}</td>
              <td class="d-flex justify-content-end"><button class="btn btn-primary btn-sm ">세탁완료</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <AdminDetailTable  /> -->
    </div>
    <AdminModal v-show="check" class="modal" :check='check' />
  </div>
</template>

<script>
import {  ref } from 'vue'
import AdminModal from './AdminModal.vue';
import { getPaymentRequests, getReservationConfirmeds } from '@/api'

export default {
  components: {
    AdminModal
  },

  setup() {
    const reservationConfirmeds = ref({});
    const paymentRequests = ref({});
    const page = ref({
      pageNum: 1,
      amount: 5,
    })
    const reservationData = getReservationConfirmeds(page.value);
    reservationData.then((response)=>{
      reservationConfirmeds.value = response.data.reservationConfirmeds
    })
    const paymentRequestData = getPaymentRequests(page.value);
    paymentRequestData.then((response)=>{
      paymentRequests.value =response.data.paymentCompletes
      console.log(paymentRequests.value)
    })
    const check = ref(false);
    const showModal = (id) => {
      check.value = true;
      console.log(id)

    }

    return {
      showModal,
      check,
      reservationConfirmeds,
      paymentRequests
    }
  }

}
</script>

<style>
.title {
  margin-bottom: 1%;
}

.modal {
  width: 50%;
  height: 70%;

  z-index: 111;
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

.body-container {
  width: 100%;
  height: -webkit-fill-available;
}
</style>