<template>
  <div class='max-width-item'>
    <div class='d-flex justify-content-between  mb-2'>
      <div class='h3 d-inline'>확정번호 : {{ confirmed.confirmId }}</div>
      <div class='h3 d-inline'>확정일자 : {{ confirmed.confirmDate }}</div>
    </div>
    <hr />
    <div class='d-flex flex-row justify-content-around mt-5 check-detail'>
      <div class='flex-grow-1'>
        <div class='d-flex flex-row justify-content-between' v-for='(laundry,index) in laundryList' :key='index'
             @click='addList(laundry)'>
          <span>{{ laundry.name }}</span>
          <span>{{ laundry.laundryPrice.price }}원</span>
        </div>
      </div>
      <div class='vr ml-3 mr-3' />
      <div class='flex-fill overflow-scroll'>
      <div v-for='(laundry,index) in addLaundryList' :key='index' @click='removeLaundry(index)'>
        <span>{{ laundry.name }}</span>
        <span>{{ laundry.laundryPrice.price }}원</span>
        <div/>
      </div>
      </div>
    </div>
<!--    <div v-else></div>-->
  </div>
</template>

<script>


import { useRoute } from 'vue-router'
import { checkConfirmDetail, getPriceList } from '@/api'
import { ref } from 'vue'

export default {


  setup() {

    const route = useRoute()
    const id = route.params.id
    const confirmed = ref('')
    const laundryList = ref([])
    const page = ref(1)
    const addLaundryList = ref([])

    checkConfirmDetail(id).then((res) => {
      confirmed.value = res.data
    })
    getPriceList(page.value, 10).then((res) => {
      laundryList.value = res.data.laundries
    })
    const addList = (laundry) => {
      addLaundryList.value.push(laundry)
    }

    const removeLaundry = (index) => {
      addLaundryList.value.splice(index, 1)
    }
    return {
      confirmed,
      laundryList,
      addLaundryList,
      addList,
      removeLaundry,
    }
  },
}
</script>

<style>
.max-width-item {
  width: 100%;
  height: 100%;
}

.check-detail {
  height: 80vh;
}
</style>