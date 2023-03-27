<template>
  <div class="max-width">
    <table v-show="list.length != 0" class="table">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">예약번호</th>
          <th scope="col">금액</th>
          <th scope="col">결제수단</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="item-select"
          v-for="(item, index) in list"
          :key="index"
          @click="detailPage(item.receiptId)"
        >
          <th scope="row">{{ item.receiptId }}</th>
          <td>{{ item.pr.confirm.reservation.reservationId }}</td>
          <td>{{ item.pr.prPrice }}</td>
          <td>{{ item.paymentMethod }}</td>
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
import store from '@/store/store'
import { getReceiptList } from '@/api'
import { onMounted, ref } from 'vue'
import { failToast } from '@/sweetAlert'
import router from '@/router/router'

export default {
  setup() {
    const id = store.state.userid
    const list = ref({})
    const pagination = ref({})
    const currentPage = ref(1)

    onMounted(() => {
      getList(1)
    })

    const detailPage = (id) => {
      router.push({
        name: 'ReceiptDetail',
        params: { id: id },
      })
    }

    const getList = (page) => {
      currentPage.value = page

      getReceiptList(id, page, 10)
        .then((res) => {
          list.value = res.data.receipts
          pagination.value = res.data.receiptPaging
        })
        .catch(() => {
          failToast('영수증 리스트 로딩에 실패하였습니다.')
        })
    }

    return {
      list,
      id,
      pagination,
      currentPage,
      getList,
      detailPage,
    }
  },
}
</script>

<style>
</style>