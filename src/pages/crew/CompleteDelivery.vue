<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h3 class="h3 mb-2 text-gray-800 font-weight-bold">배송 완료 목록</h3>
    <p class="">{{ crewName }} 님, 배달을 완료하신 목록입니다.</p>
    <!-- 수거시 collect date update-->
    <!-- DataTales Example -->
    <div class="card shadow ">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">배송 완료 목록</h6>
      </div>
      <div class="card-body">
        <table id="collectTable" class="table table-striped table-bordered" style="width: 100%">
          <thead>
            <tr>
              <th>No</th>
              <th>배달 완료 날짜</th>
              <th>배달 상태</th>
              <th>배달지 주소</th>
              <th>고객 연락처</th>
              <th>고객 닉네임</th>
              <th>크루 이름</th>
            </tr>
          </thead>
          <tbody>
            <tr class="item-select" v-for="completedDelivery in completedDeliveryList" :key="completedDelivery.deliveryId">
              
                <td>{{ completedDelivery.deliveryId }}</td>
                <td>
                  {{completedDelivery.deliveryDate}}
                </td>
                <td>{{ completedDelivery.status }}</td>
                <td>{{ completedDelivery.wc.confirm.reservation.member.memberAddress }}</td>
                <td>{{ completedDelivery.wc.confirm.reservation.member.memberContact }}</td>
                <td>{{ completedDelivery.wc.confirm.reservation.member.nickname }}</td>
                <td>{{ completedDelivery.crew.crewName }}</td>
              </tr>
          </tbody>
        </table>
      </div>
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
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { getCrewName, getCompleteDelivery } from '@/api';
  import { failToast } from '@/sweetAlert'
  export default {

    setup() {
      const completedDeliveryList = ref([]);
      const crewName = ref('');

      const pagination = ref({});
      const currentPage = ref(1);

      getCrewName().then((res) => {
        crewName.value = res.data;
      })

      const getList =(page) => {
      currentPage.value = page;

      const response = getCompleteDelivery(page, 10);
      
      response.then((res) => {
        completedDeliveryList.value = res.data.completedDeliveryList;
        pagination.value = res.data.pageMaker;
      }).catch(() => {
        failToast('배달 가능 목록을 불러오지 못했습니다. 다시 시도해주세요.')
      })
    }
    getList(1);



      return {
        completedDeliveryList,
        crewName,
        pagination,
        currentPage,
        getList,

      }
    }
  }
</script>

<style>

</style>