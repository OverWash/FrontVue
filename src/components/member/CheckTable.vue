<template>
  <div>
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
import { onMounted, ref } from 'vue'
import { getCheckList } from '@/api'
import { failToast } from '@/sweetAlert'
export default {
  props: {
    id: {},
  },
  setup(props) {
    const checklist = ref({})
    const pagination = ref({})
    const currentPage = ref(1)

    onMounted(() => {
      getList(1)
    })

    const getList = (page) => {
      currentPage.value = page

      getCheckList(props.id, page, 3)
        .then((res) => {
          // console.log(res.data)
          checklist.value = res.data.checks
          pagination.value = res.data.checkPaging
        })
        .catch(() => {
          failToast('검수내역 로딩에 실패하였습니다.')
        })
    }

    return {
      checklist,
      pagination,
      currentPage,
      getList,
    }
  },
}
</script>

<style>
</style>