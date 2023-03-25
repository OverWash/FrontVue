<template>
  <div class="max-width">
    <table v-show="list.length != 0" class="table">
      <thead>
        <tr>
          <th scope="col">예약 번호</th>
          <th scope="col">예약일</th>
          <th scope="col">수거(예정)일</th>
          <th scope="col">예약상태</th>
          <th scope="col">요청사항</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, index) in list" :key="index">
          <th scope="row">{{ r.reservationId }}</th>
          <td>{{ r.reservationDate }}</td>
          <td>{{ r.collectDate }}</td>
          <td>{{ r.reservationStatus }}</td>
          <td class="d-flex justify-content-center">
            <button
              class="btn btn-primary btn-sm"
              @click="showModal(r.request)"
            >
              상세보기
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import router from '@/router/router'
import { onMounted, ref } from 'vue'
import { getReservationList } from '@/api/index.js'
import { useStore } from 'vuex'
import { showRequest } from '@/sweetAlert'
export default {
  setup() {
    const list = ref({})

    const store = useStore()
    onMounted(() => {
      const id = store.state.userid
      const response = getReservationList(id)
      response.then((res) => {
        console.log(res.data)
        list.value = res.data
      })
    })

    const showModal = (data) => {
      showRequest(data)
    }

    // const detailPage = (id) => {
    //   const path =
    //     props.name === 'confirm'
    //       ? `/admin/confirm/${id}`
    //       : `/admin/laundry/${id}`
    //   router.push({
    //     path: path,
    //   })
    // }
    return {
      // detailPage,
      list,
      showModal,
    }
  },
}
</script>

<style>
.item-select:hover {
  cursor: pointer;
  background-color: var(--bs-primary);
  /* border: 2px solid gray; */
}
</style>