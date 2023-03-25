<template>
  <div class="col-xl-12">
    <!-- Project Card Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h5 class="m-0 font-weight-bold text-primary">예약리스트</h5>
      </div>
      <div class="card-body">
        <!--v-for-->
        <div
          v-for="(reservation, index) in reservationList.slice(0, 5)"
          :key="reservation.reservationId"
          class="reservations"
        >
          <!-- key 는 필수 -->
          <h4 class="small fon--bold">
            <span>No. {{ reservation.reservationId }}</span>
            예약날짜 :{{ reservation.reservationDate | formatDate }}
            <span class="float-right"></span>
            <span class="float-right">{{ reservation.reservationStatus }}</span>
          </h4>
          <div class="progress progress-sm mb-4">
            <div
              class="progress-bar"
              v-bind:class="[`${reservation.reservationStatus}`]"
              role="progressbar"
              v-bind:id="[`${index}`]"
              v-bind:style="{ width: '10%' }"
            ></div>
          </div>
        </div>
        <!--v-for-->
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
  data() {
    return {
      reservations: [], // 예약 리스트 데이터 배열
    }
  },
}
</script>

<style>
</style>