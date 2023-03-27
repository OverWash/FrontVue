<template>
  <AdminMainComponent />
</template>

<script>
import AdminMainComponent from '@/components/admin/AdminMainComponent.vue'
import { getReservationConfirmeds, getPaymentRequests } from '@/api'
import { ref } from 'vue'

export default {
  components: {
    AdminMainComponent,
  },
  setup() {
    const page = ref({
      pageNum: 1,
      amount: 10,
    })
    const reservationData = getReservationConfirmeds(page.value);
    reservationData.then((data)=>{
      console.log(data);
    })
    const paymentRequests = getPaymentRequests(page.value);
    paymentRequests.then((data)=>{
      console.log(data)
    })
    return {
      reservationData,
      paymentRequests
    }
  },
}
</script>

<style></style>