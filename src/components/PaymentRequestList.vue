<template>
  <div class="col-xl-12 mb-4">
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h5 class="m-0 font-weight-bold text-primary">결제요청내역</h5>
      </div>
      <div class="card-body">
        <!--v-for-->
        <div v-for="pr in prList" :key="pr.prId" id="paymentRequestList">
          <span class="middle font-weight-bold"
            ><strong
              >no.{{ pr.confirm.reservation.reservationId }}</strong
            ></span
          >
          <span class="small font-weight-bold"
            >수거날짜 : {{ pr.confirm.confirmDate }}</span
          >
          <span class="middle font-weight-bold">금액 : {{ pr.prPrice }}</span>
          <!-- 결제버튼 -->
          <span class="float-right">
            <a
              onclick="#"
              class="btn btn-light btn-icon-split"
              style="line-height: 1"
            >
              <span class="icon text-gray-600">
                <i class="fas fa-arrow-right"> </i
              ></span>
              <span class="text font-weight-bold">결제하기</span>
            </a>
          </span>
          <!-- 결제버튼 -->
        </div>
        <!--v-for-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prList: {
      type: Array,
    },
  },
};
</script>

<style>
#paymentRequestList {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
</style>