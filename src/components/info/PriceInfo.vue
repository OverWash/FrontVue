<template>
  <div class="max-width">
    <table v-show="list.length != 0" class="table">
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">가격</th>
          <th scope="col">타입</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <th scope="row">{{ item.name }}</th>
          <td>{{ item.laundryPrice.price }}</td>
          <td v-if="item.type == 'c'">의류</td>
          <td v-else-if="item.type == 's'">신발</td>
          <td v-else-if="item.type == 'b'">침구류</td>
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
import { getPriceList } from '@/api/index.js'
import { failToast } from '@/sweetAlert'
export default {
  setup() {
    const list = ref({})
    const pagination = ref({})
    const currentPage = ref(1)

    onMounted(() => {
      getList(1)
    })

    const getList = (page) => {
      currentPage.value = page

      getPriceList(page)
        .then((res) => {
          list.value = res.data.laundries
          pagination.value = res.data.laundryPaging
        })
        .catch(() => {
          failToast('가격표 로딩에 실패하였습니다.')
        })
    }

    return {
      getList,

      list,
      pagination,
      currentPage,
    }
  },
}
</script>

<style>
</style>