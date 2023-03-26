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
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" v-if="currentPage != 1">
            <a class="page-link" @click="getList(currentPage - 1)">Previous</a>
          </li>
          <li
            class="page-item"
            v-for="page in pagination.endPage"
            :key="page"
            :class="currentPage == page ? 'active' : ''"
          >
            <a class="page-link" @click="getList(page)">{{ page }}</a>
          </li>
          <li class="page-item" v-if="currentPage < pagination.endPage">
            <a class="page-link" @click="getList(currentPage + 1)">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
// import router from '@/router/router'
import { ref } from 'vue'
import { getReservationList } from '@/api/index.js'
import { useStore } from 'vuex'
import { showRequest, failToast } from '@/sweetAlert'
export default {
  setup() {
    const store = useStore()

    const list = ref({})
    const pagination = ref({})
    const currentPage = ref(1)
    const id = store.state.userid

    const getList = async (page) => {
      currentPage.value = page

      try {
        const response = await getReservationList(id, page, 10)
        response.then((res) => {
          console.log(res.data)
          list.value = res.data.reservations
          pagination.value = res.data.reservationPaging
        })
      } catch (err) {
        failToast('데이터 로딩에 실패했습니다.')
      }
    }
    getList(1)

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
      currentPage,
      pagination,
      getList,
      id,
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