<template>
  <div class="max-width">
    <CheckTable :id="confirmId" v-if="showCheck" />
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
    const receipt = ref({})

    const showCheck = ref(false)

    // 영수증 하나 가져오기 테스트
    onMounted(() => {
      getReceiptDetail(rId)
        .then((res) => {
          receipt.value = res.data
          //   console.log(receipt.value)

          confirmId.value = receipt.value.pr.confirm.confirmId
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
      receipt,
      showCheck,
      goback,
    }
  },
}
</script>

<style>
</style>