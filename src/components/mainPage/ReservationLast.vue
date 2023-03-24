<template>
  <div class="col-xl-6">
    <div id="lastReservation">
      <div class="card shadow mb-4">
        <div
          class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
        >
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                최근 예약 내역
              </div>
              <div
                class="text-xs font-weight-bold text-primary text-uppercase mb-1"
              >
                가장 최근 예약 내역입니다
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="mt-4">
            <div v-for="reservation in reservationList.slice(0,1)"
            :key="reservation.reservationId" 
              id="lastReservation">
              <span class="float-right"><b>{{reservation.reservationStatus}}</b></span>
              <h5 class="h1 mb-2 font-weight-bold">
                No.{{ reservation.reservationId }}
              </h5>
              <h6><b>예약날짜</b> :{{reservation.reservationDate}}</h6>
              <h6><b>예약내용</b> :{{reservation.request}}</h6>
              <div class="progress mb-4">
                <div
                  class="progress-bar"
                  id="lastResStatProgressBar"
                  role="progressbar"
                  style="width: 16%"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reservationList: {
      type: Array,
    },
  },

  setup() {


    return {

    };
  },
};
</script>

<style>
</style>