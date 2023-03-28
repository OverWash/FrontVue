<template>

  <div class='max-width'>
    <table class='table table-hover'>
      <thead>
      <tr>
        <th scope='col'>수거 번호</th>
        <th scope='col'>수거일자</th>
        <th scope='col'>고객 번호</th>
        <th scope='col'>고객 명</th>
        <th scope='col'>검수하기</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for='(data,index) in responseData' :key='index' @click='detailPage(data.confirmId)'>
        <td>{{ data.confirmId }}</td>
        <td>{{ data.confirmDate }}</td>
        <td>{{ data.reservation.member.memberContact }}</td>
        <td>{{ data.reservation.member.nickname }}</td>
        <td><button class='btn btn-primary btn-sm'
                    @click='changeDetailPage(data.confirmId)'>검수하기
        </button></td>
      </tr>
      </tbody>
    </table>
    <div>
      <nav aria-label='Page navigation example'>
        <ul class='pagination'>
          <li class='page-item' v-if='currentPage !== 1'>
            <a class='page-link' @click='getList(currentPage -1)'>Previous</a>
          </li>
          <li
            class='page-item'
            v-for='page in pagination.endPage'
            :key='page'
            :class="currentPage === page ? 'active' : ''"
          >
            <a class='page-link' @click='getList(page)'>{{ page }}</a>
          </li>
          <li class='page-item' v-if='currentPage < pagination.endPage'>
            <a class='page-link' @click='getList(currentPage + 1)'>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <!--  <AdminDetailTable :dummy="dummy" />-->
</template>

<script>
// import AdminDetailTable from '@/components/admin/AdminDetailTable.vue';
import { onMounted, ref } from 'vue'
import { getReservationConfirmeds } from '@/api'
import router from '@/router/router'

export default {
  setup() {
    onMounted(() => {
      getList()
    })

    const confirm = 'confirm'
    const currentPage = ref(1)
    const page = ref({
      pageNum: 1,
      amount: 10,
    })
    const pagination = ref({})
    const responseData = ref()
    const getList = (selectPage) => {
      if (currentPage.value !== selectPage) {
        currentPage.value = selectPage ? selectPage : 1
        page.value.pageNum = selectPage
        getReservationConfirmeds(page.value).then((response) => {
          console.log()
          responseData.value = response.data.reservationConfirmeds
          pagination.value = response.data.reservationConfirmedPaging
        })
      }
    }
    getList()
    const detailPage = (confirmId) => {
      router.push(`/admin/confirm/${confirmId}`)
    }
    const changeDetailPage = (confirmId)=>{
      router.push(`/admin/confirm/${confirmId}`)
    }
    return {
      confirm,
      page,
      responseData,
      pagination,
      currentPage,
      getList,
      detailPage,
      changeDetailPage
    }
  },
  // components: { AdminDetailTable }
}
</script>

<style></style>