<template>
  <div class="max-width">
    <h3>금액 상세내역</h3>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">품목</th>
          <th scope="col">가격</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in checklist" :key="index">
          <td>{{ item.laundry.name }}</td>
          <td>{{ item.laundry.laundryPrice.price }}</td>
        </tr>
      </tbody>
    </table>

    <button class="btn btn-secondary btn-sm" @click="goback">돌아가기</button>
    <button class="btn btn-primary btn-sm" @click="showModal">결제하기</button>
  </div>
</template>

<script>
import router from '@/router/router'
import { useRoute } from 'vue-router'
import { getPrDetail, getCheckList } from '@/api'
import { onMounted, ref } from 'vue'
import { failToast, paymentModal } from '@/sweetAlert'
export default {
  setup() {
    const route = useRoute()
    const prId = route.params.id
    const pr = ref({})
    const checklist = ref({})

    onMounted(() => {
      getPrDetail(prId)
        .then((res) => {
          console.log(res.data)
          pr.value = res.data

          callCheckAPI(pr.value.confirm.confirmId)
        })
        .catch(() => {
          failToast('결제요청서 로딩에 실패하였습니다.')
        })
    })

    const callCheckAPI = (id) => {
      getCheckList(id)
        .then((res) => {
          console.log(res.data)
          checklist.value = res.data
        })
        .catch(() => {
          failToast('검수내역 로딩에 실패하였습니다.')
        })
    }

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
      callCheckAPI,
      checklist,
      showModal,
    }
  },
}
</script>

<style>
</style>