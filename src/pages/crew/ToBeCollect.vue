<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h3 class="h3 mb-2 text-gray-800 font-weight-bold">배송 가능 목록</h3>
    <p class="">{{ crewName }} 님, 수거하기 버튼으로 원하시는 예약의 수거를 진행해 주세요.</p>
    <!-- 수거시 collect date update-->
    <!-- DataTales Example -->
    <div class="card shadow ">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">수거 예정 목록</h6>
      </div>
      <div class="card-body">
        <table id="collectTable" class="table table-striped table-bordered" style="width: 100%">
          <thead>
            <tr>
              <th>No</th>
              <th>예약날짜</th>
              <th>예약상태</th>
              <th>배달지 주소</th>
              <th>고객 연락처</th>
              <th>고객 닉네임</th>
              <th>수거하기</th>
            </tr>
          </thead>
          <tbody>
            <tr class="item-select" v-for="collect in collectList" :key="collect.reservationId">
              
                <td>{{ collect.reservationId }}</td>
                <td>
                  {{collect.reservationDate}}
                </td>
                <td>{{ collect.reservationStatus }}</td>
                <td>{{ collect.member.memberAddress }}</td>
                <td>{{ collect.member.memberContact }}</td>
                <td>{{ collect.member.nickname }}</td>
                <td>
                    <button class="btn btn-primary" @click="doCollect(collect.reservationId)">수거하기</button>
                </td>
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
  import { getCrewName, getPickupList, collect } from '@/api';
  import { failToast, returnInfoAlert } from '@/sweetAlert';
  import router from '@/router/router';
  export default {

    setup() {

      const collectList = ref([]);
      const crewName = ref('');

      const pagination = ref({});
      const currentPage = ref(1);
      
      getCrewName().then((res) => {
        crewName.value = res.data;
      })

      const getList =(page) => {
      currentPage.value = page;

      const response = getPickupList(page, 10);
      
      response.then((res) => {
        collectList.value = res.data.collectList;
        pagination.value = res.data.pageMaker;
      }).catch(() => {
        failToast('수거 가능 목록을 불러오지 못했습니다. 다시 시도해주세요.')
      })
    }
    getList(1);

    const doCollect = (rId) => {
      collect(rId).then((res) => {
        if (res.data === 'success') {
          returnInfoAlert('수거를 진행합니다!').then(() => {
            router.go(0);
          })
        } else {
          failToast('수거에 실패했습니다. 다시 요청해주세요.');
        }
      })
      .catch(() => {
        failToast('수거에 실패했습니다. 다시 요청해주세요.');
      })
    }


      return {
        collectList,
        crewName,
        pagination,
        currentPage,
        getList,
        doCollect,
      }
    }


  }
</script>

<style>

</style>