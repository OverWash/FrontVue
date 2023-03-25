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
          <td>{{ item.price }}</td>
          <td v-if="item.type == 'c'">의류</td>
          <td v-else-if="item.type == 's'">신발</td>
          <td v-else-if="item.type == 'b'">침구류</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { getPriceList } from '@/api/index.js'
export default {
  setup() {
    const list = ref({})

    onMounted(() => {
      const response = getPriceList()
      response.then((res) => {
        list.value = res.data
      })
    })

    return {
      list,
    }
  },
}
</script>

<style>
</style>