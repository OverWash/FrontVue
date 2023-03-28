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
          class="reservations"
          v-for="(reservation) in reservations"
          :key="reservation.reservationId"
        >
          <h4 class="small font-weight-bold">
            <span>No. {{ reservation.reservationId }}</span> 예약날짜 :
            {{ formattedReservationDate(reservation.reservationDate) }}
            <span class="float-right">{{ reservation.reservationStatus }}</span>
          </h4>
          <div class="progress progress-sm mb-4">
            <div
              :class="progressBarColor(reservation.reservationStatus)"
              role="progressbar"
              :style="{
                width: progressBarWidth(reservation.reservationStatus),
              }"
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
      reservations: [],
    }
  },
  created() {
    this.reservations = this.reservationList
  },
  watch: {
    reservationList(newVal) {
      this.reservations = newVal
    },
  },
  methods: {
    formattedReservationDate(reservationDate) {
      return new Date(reservationDate).toLocaleString('ko-KR', {
        timeZone: 'Asia/Seoul',
        hour12: false,
      })
    },
    progressBarWidth(reservationStatus) {
      if (reservationStatus === '예약확정') {
        return '20%'
      } else if (reservationStatus === '검수완료') {
        return '40%'
      } else if (reservationStatus === '결제완료') {
        return '50%'
      } else if (reservationStatus === '세탁완료') {
        return '75%'
      } else if (reservationStatus === '배달완료') {
        return '100%'
      } else if (reservationStatus === '예약취소') {
        return '100%'
      } else {
        return '10%'
      }
    },

    progressBarColor(reservationStatus) {
      if (reservationStatus === '결제완료') {
        return 'progress-bar bg-info'
      } else if (reservationStatus === '세탁완료') {
        return 'progress-bar bg-info'
      } else if (reservationStatus === '배달완료') {
        return 'progress-bar bg-success'
      } else if (reservationStatus === '예약취소') {
        return 'progress-bar bg-dark'
      } else {
        return 'progress-bar bg-primary'
      }
    },
  },
}
</script>

<style>
</style>
