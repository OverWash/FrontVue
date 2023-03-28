<template>
  <div class='max-width-item'>
    <div class='d-flex justify-content-between  mb-2'>
      <div class='h3 d-inline'>확정번호 : {{ confirmed.confirmId }}</div>
      <div class='h3 d-inline'>확정일자 : {{ confirmed.confirmDate }}</div>
      <div>
        <span class='btn btn-primary mr-4' @click='checkConfirmBtn'>검수하기</span>
        <router-link to='/admin/confirm'>
        <span class='btn btn-primary'>
          취소하기
        </span>
        </router-link>
      </div>
    </div>
    <hr />
    <div class='d-flex flex-row justify-content-around mt-5 check-detail '>
      <table class='table table-hover'>
        <thead>
        <tr>
          <td>의류정보</td>
          <td>가격</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for='(laundry,index) in laundryList' :key='index'
            @click='addList(laundry)'>
          <td>{{ laundry.name }}</td>
          <td>{{ laundry.laundryPrice.price }}원</td>
        </tr>
        </tbody>
        <PageComponent @getList='getList' :pagination='pagination' :currentPage='currentPage' />
      </table>
      <div class='vr ml-3 mr-3' />
      <table class='table table-hover '>
        <thead>
        <tr>
          <td>의류정보</td>
          <td>가격</td>
        </tr>
        </thead>
        <tbody class='table-b-table-default '>
        <tr v-for='(laundry,index) in addLaundryList' :key='index' @click='removeLaundry(index)'>
          <td>{{ laundry.name }}</td>
          <td>{{ laundry.laundryPrice.price }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--    <div v-else></div>-->
  </div>
</template>

<script>


import { useRoute } from 'vue-router'
import { checkConfirmDetail, checkConfrimInsert, getPriceList } from '@/api'
import { ref } from 'vue'
import PageComponent from '@/components/PageComponent.vue'
import { returnInfoAlert } from '@/sweetAlert'
import router from '@/router/router'

export default {
  components: { PageComponent },


  setup() {

    const route = useRoute()
    const id = route.params.id
    const confirmed = ref('')
    const laundryList = ref([])
    const currentPage = ref(1)
    const addLaundryList = ref([])
    const pagination = ref({})
    checkConfirmDetail(id).then((res) => {
      confirmed.value = res.data
    })
    const getList = (page) => {
      currentPage.value = page || 1
      getPriceList(currentPage.value, 10).then((res) => {

        laundryList.value = res.data.laundries
        pagination.value = res.data.laundryPaging
      })
    }
    getList()
    const addList = (laundry) => {
      addLaundryList.value.push(laundry)
    }

    const removeLaundry = (index) => {
      addLaundryList.value.splice(index, 1)
    }

    const checkConfirmBtn =()=>{

      (addLaundryList.value.length !==0) &&
      checkConfrimInsert(confirmed.value.confirmId,addLaundryList.value)
        .then((res)=>{
          returnInfoAlert(`검수가 완료되었습니다.\n 총 금액 :${res.data.prPrice}`)
          router.push("/admin/confirm")
      })
    }
    return {
      confirmed,
      laundryList,
      addLaundryList,
      addList,
      removeLaundry,
      pagination,
      getList,
      currentPage,
      checkConfirmBtn
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

.select-item-list {
  width: 100%;

  justify-content: space-between;
}
</style>