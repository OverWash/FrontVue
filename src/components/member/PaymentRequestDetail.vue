<template>
  <div class="max-width">
    <CheckTable :id="confirmId" :totalPrice="totalPrice" v-if="showCheck" />

    <button class="btn btn-secondary btn-sm" @click="goback">돌아가기</button>
    <button class="btn btn-primary btn-sm" @click="showModal">결제하기</button>
  </div>
</template>

<script>
import router from '@/router/router'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getPrDetail } from '@/api'
import { failToast, paymentModal } from '@/sweetAlert'
import CheckTable from './CheckTable.vue'

export default {
  components: {
    CheckTable,
  },
  setup() {
    const route = useRoute()
    const prId = route.params.id
    const confirmId = ref(-1)
    const pr = ref({})
    const showCheck = ref(false)
    const totalPrice = ref(0)

    onMounted(() => {
      getPrDetail(prId)
        .then((res) => {
          console.log(res.data)
          pr.value = res.data

          confirmId.value = pr.value.confirm.confirmId
          showCheck.value = true
          totalPrice.value = pr.value.prPrice
        })
        .catch(() => {
          failToast('결제요청서 로딩에 실패하였습니다.')
        })
    })

    const showModal = () => {
      paymentModal(prId)
    }

    const goback = () => {
      router.go(-1)
    }

    return {
      goback,
      route,
      prId,
      pr,
      showModal,
      confirmId,
      showCheck,
      totalPrice,
    }
  },
}
</script>

<style>
</style>