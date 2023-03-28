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
          <th scope="col">비고</th>
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
          <td>
            <!-- <span style="margin-right:20px"></span> -->
            <button
              v-show="r.reservationStatus === '주문접수'"
              class="btn btn-dark btn-sm"
              @click="showDeleteModal(r.reservationId)"
            >
              삭제
            </button>
            <span style="margin-right:10px"></span>
            <button
              v-show="r.reservationStatus === '주문접수'"
              class="btn btn-info btn-sm"
              @click="showUpdateRequestModal(r.reservationId, r.request)"
            >
              수정
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-show="list.length == 0">영수증 내역이 없네요.</div>

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
import { onMounted, ref } from 'vue'
import { getReservationList } from '@/api/index.js'
import { showRequest, failToast, deleteModal, updateRequestModal } from '@/sweetAlert'
import store from '@/store/store'

export default {
  setup() {
    const id = store.state.userid

    const list = ref({})
    const pagination = ref({})
    const currentPage = ref(1)

    onMounted(() => {
      getList(1)
    })

    const getList = (page) => {
      currentPage.value = page

      const response = getReservationList(id, page, 10)
      response
        .then((res) => {
          // console.log(res.data)
          list.value = res.data.reservations
          pagination.value = res.data.reservationPaging
        })
        .catch(() => {
          failToast('데이터 로딩에 실패하였습니다.')
        })
    }

    const showModal = (data) => {
      showRequest(data)
    }

    const showDeleteModal = (id, reservationId) => {
      deleteModal(id, reservationId)
    }
    const showUpdateRequestModal = (reservationId, request) => {
      console.log(reservationId+" "+request)
      updateRequestModal(reservationId, request)
    }

    return {
      list,
      showModal,
      currentPage,
      pagination,
      getList,
      id,

      showDeleteModal,
      showUpdateRequestModal
    }
  },
}
</script>

<style>
</style>