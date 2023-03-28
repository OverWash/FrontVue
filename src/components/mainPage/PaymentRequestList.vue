<template>
  <div class="col-xl-12 mb-4" v-if="paySwitch === 0">
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h5 class="m-0 font-weight-bold text-primary">결제요청내역</h5>
      </div>
      <div class="card-body">
        <div v-if="prList.length === 0">아직 검수된 내역이 없습니다.</div>
        <div v-else>
          <!--v-for-->
          <div v-for="pr in prList" :key="pr.prId" id="paymentRequestList">
            <span class="middle font-weight-bold"
              ><strong
                >no.{{ pr.confirm.reservation.reservationId }}</strong
              ></span
            >
            <span class="middle font-weight-light"
              >수거날짜 : {{ pr.confirm.confirmDate }}</span
            >
            <span class="middle font-weight-bold">금액 : {{ pr.prPrice }}</span>
            <!-- 결제버튼 -->
            <span class="float-right" v-on:click="paymentSwitch(pr.prId)">
              <a class="btn btn-light btn-icon-split" style="line-height: 1">
                <span class="icon text-gray-600">
                  <i class="fas fa-arrow-right"> </i
                ></span>
                <span class="text font-weight-bold">결제하기</span>
              </a>
            </span>
            <!-- 결제버튼 -->
          </div>
        </div>
        <!--v-for-->
      </div>
    </div>
  </div>

  <!--결제수단선택-->
  <div class="col-sm-12 mb-4" v-if="paySwitch === 1">
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h5 class="m-0 font-weight-bold text-primary">
          결제 수단을 선택하세요
        </h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <input type="hidden" :value="prId" />
          <select
            name="paymentMethod"
            class="custom-select custom-select-sm form-control form-control-sm"
            style="margin-bottom: 1rem"
            v-model="selectedPaymentMethod"
          >
            <option value="문화상품권">문화상품권</option>
            <option value="모바일결제">모바일결제</option>
            <option value="신용카드">신용카드</option>
            <option value="토스">토스</option>
            <option value="PAYCO">PAYCO</option>
            <option value="KakaoPay">KakaoPay</option>
          </select>

          <span class="float-right">
            <a
              class="btn btn-primary btn-icon-split"
              style="line-height: 1; margin-right: 0.5rem"
              @click="submitForm"
            >
              <span class="icon text-white-50">
                <i class="fas fa-check"> </i
              ></span>
              <span class="text font-weight-bold">선택완료</span>
            </a>
            <a
              class="btn btn-secondary btn-icon-split"
              style="line-height: 1"
              v-on:click="paymentSwitch"
            >
              <span class="icon text-gray-600">
                <i class="fas fa-arrow-right"> </i
              ></span>
              <span class="text font-weight-bold">돌아가기</span>
            </a>
          </span>
        </form>
      </div>
    </div>
  </div>
  <!--결제수단선택-->
</template>

<script>
import { createReceipt } from '@/api/index.js'
//import { onMounted, ref } from 'vue'

export default {
  props: {
    prList: {
      type: Array,
    },
  },
  data() {
    return {
      paySwitch: 0,
      prId: 0,
      selectedPaymentMethod: '',
    }
  },
  methods: {
    paymentSwitch(prId) {
      this.prId = prId
      console.log(prId)
      if (this.paySwitch === 1) {
        this.paySwitch = 0
      } else {
        this.paySwitch = 1
      }
    },

    submitForm() {
      createReceipt(this.prId, this.selectedPaymentMethod).then((res) => {
        console.log(res)
        alert('결제를 진행합니다.')
        console.log(res)
      })
      location.reload()
    },
  },
}
</script>

<style>
#paymentRequestList {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
</style>