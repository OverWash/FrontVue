<template>
  <div class="max-width">
    <CheckTable :id="confirmId" :totalPrice="totalPrice" v-if="showCheck" />
    <div>
      <h4>영수증 No. {{ receipt.receiptId }}</h4>

      <table class="table table-bordered">
        <tbody class="text-left">
          <tr>
            <th>예약일</th>
            <td>{{ reservationDate }}</td>
          </tr>
          <tr>
            <th>예약 확정일</th>
            <td>{{ confirmDate }}</td>
          </tr>
          <tr>
            <th>담당 크루 연락처</th>
            <td>{{ crewContact }}</td>
          </tr>
          <tr>
            <th>결제수단</th>
            <td>{{ receipt.paymentMethod }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="btn btn-secondary btn-sm" @click="goback">돌아가기</button>
  </div>
</template>

<script>
import router from '@/router/router'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getReceiptDetail } from '@/api/index.js'
import { failToast } from '@/sweetAlert'
import CheckTable from './CheckTable.vue'

export default {
  components: {
    CheckTable,
  },
  setup() {
    const route = useRoute()
    const rId = route.params.id
    const confirmId = ref(-1)
    const totalPrice = ref(0)
    const receipt = ref({})
    const showCheck = ref(false)
    const confirmDate = ref('')
    const reservationDate = ref('')
    const crewContact = ref('')

    onMounted(() => {
      getReceiptDetail(rId)
        .then((res) => {
          receipt.value = res.data
          // console.log(receipt.value)

          confirmDate.value = receipt.value.pr.confirm.confirmDate
          reservationDate.value =
            receipt.value.pr.confirm.reservation.reservationDate
          crewContact.value = receipt.value.pr.confirm.crew.crewContact

          confirmId.value = receipt.value.pr.confirm.confirmId
          totalPrice.value = receipt.value.pr.prPrice
          showCheck.value = true
        })
        .catch(() => {
          failToast('영수증 로딩에 실패하였습니다.')
        })
    })

    const goback = () => {
      router.go(-1)
    }

    return {
      rId,
      confirmId,
      totalPrice,
      receipt,
      showCheck,
      goback,
      confirmDate,
      reservationDate,
      crewContact,
    }
  },
}
</script>

<style>
.item-padding {
  padding-left: 10% !important;
}
</style>