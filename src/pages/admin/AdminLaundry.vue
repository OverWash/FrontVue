<template>
  <!--  <div class="max-width">-->
  <div class='max-width'>
    <table class='table'>
      <thead>
      <tr>
        <th scope='col'>예약확정번호</th>
        <th scope='col'>확정일자</th>
        <th scope='col'>고객 전화번호</th>
        <th scope='col'>고객 닉네임</th>
        <th scope='col'>세탁완료</th>
      </tr>
      </thead>
      <tbody>
      <tr class='item-select ' v-for='(data, index) in paymentRequestData ' :key='index' >
        <td>{{ data.confirmId }}</td>
        <td>{{ data.confirmDate }}</td>
        <td>{{ data.reservation.member.memberContact }}</td>
        <td>{{ data.reservation.member.nickname }}</td>
        <td class='d-flex justify-content-md-center'>
          <button class='btn btn-primary btn-sm' @click='washingComplete(data.confirmId)'>세탁완료</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div>
      <nav aria-label='Page navigation example'>
        <ul class='pagination'>
          <li class='page-item' v-if='currentPage !== 1'>
            <a class='page-link' @click='getList(currentPage - 1)'>Previous</a>
          </li>
          <li
            class='page-item'
            v-for='page in pagination.endPage'
            :key='page'
            :class="currentPage == page ? 'active' : ''"
          >
            <a class='page-link' @click='()=> currentPage !==page && getList(page)'>{{ page }}</a>
          </li>
          <li class='page-item' v-if='currentPage < pagination.endPage'>
            <a class='page-link' @click='getList(currentPage + 1)'>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

</template>

<script>
import { ref } from 'vue'
import router from '@/router/router'
import { checkWashingComplete, getPaymentRequests } from '@/api'
import { checkConfirm, successToast } from '@/sweetAlert'

export default {


  setup() {
    const paymentRequestData = ref('')
    const page = ref({
      pageNum: 2,
      amount: 10,
    })
    const pagination = ref({})
    const currentPage = ref(1)

    const getList = (selectPage) => {
      page.value.pageNum = selectPage
        currentPage.value  = selectPage || 1
        getPaymentRequests(page.value).then((response) => {
          pagination.value = response.data.paging
          paymentRequestData.value = response.data.paymentCompletes
        })
    }
    getList()
    const washingComplete = (confirmId) => {
      checkConfirm('세탁완료', '세탁완료 처리 하시겠습니까?')
        .then((result) => {
          if (result.isConfirmed) {
            checkWashingComplete(confirmId).then((res) => {
              if (res.status === 201) {
                successToast('정상 처리되었습니다!')
                getList(currentPage.value);
              }
            })
          }
        })
    }
    const detailPage = (id) => {
      router.push(`/admin/laundry/${id}`)
    }



    return {
      paymentRequestData,
      detailPage,
      washingComplete,
      pagination,
      currentPage,
      getList,
    }
  },
}
</script>

<style></style>