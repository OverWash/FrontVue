<template>
  <div class="max-width">
    <table v-show="list.length != 0" class="table">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">예약번호</th>
          <th scope="col">예약일</th>
          <th scope="col">금액</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="item-select"
          v-for="(item, index) in list"
          :key="index"
          @click="detailPage(item.prId)"
        >
          <th scope="row">{{ item.prId }}</th>
          <td>{{ item.confirm.reservation.reservationId }}</td>
          <td>{{ item.confirm.reservation.reservationDate }}</td>
          <td>{{ item.prPrice }}</td>
        </tr>
      </tbody>
    </table>
    <div v-show="list.length == 0">결제 대기 중인 내역이 없네요.</div>

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
import { ref } from 'vue'
import { useStore } from 'vuex'
import { getPrList } from '@/api'
import { failToast } from '@/sweetAlert'
import router from '@/router/router'
export default {
  setup() {
    const store = useStore()
    const id = store.state.userid

    const list = ref({})
    const pagination = ref({})
    const currentPage = ref(1)

    const detailPage = (id) => {
      router.push({
        name: 'PaymentRequestsDetail',
        params: { id: id },
      })
    }

    const getList = (page) => {
      currentPage.value = page

      const response = getPrList(id, page, 10)
      response
        .then((res) => {
          // console.log(res.data)
          list.value = res.data.paymentRequests
          // console.log(list.value[0])
          pagination.value = res.data.paymentPaging
        })
        .catch(() => {
          failToast('결제요청서 리스트 로딩에 실패하였습니다.')
        })
    }
    getList(1)

    return {
      list,
      id,
      detailPage,
      getList,
      pagination,
      currentPage,
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