<template>
    <div class="container-fluid">
    <!-- Page Heading -->
    <h3 class="h3 mb-2 text-gray-800 font-weight-bold">배달 중인 목록</h3>
    <p class="">{{ crewName }} 님, 배달 중인 목록 입니다. 배달을 완료해주세요.</p>
    <!-- 수거시 collect date update-->
    <!-- DataTales Example -->
    <div class="card shadow ">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">배달 중인 목록</h6>
      </div>
      <div class="card-body">
        <table id="collectTable" class="table table-striped table-bordered" style="width: 100%">
          <thead>
            <tr>
              <th>No</th>
              <th>세탁 완료 날짜</th>
              <th>예약상태</th>
              <th>배달지 주소</th>
              <th>고객 연락처</th>
              <th>고객 닉네임</th>
              <th>배달 완료</th>
            </tr>
          </thead>
          <tbody>
            <tr class="item-select" v-for="delivering in deliveringList" :key="delivering.deliveryId">
              
                <td>{{ delivering.deliveryId }}</td>
                <td>
                  {{delivering.wc.wcDate}}
                </td>
                <td>{{ delivering.status }}</td>
                <td>{{ delivering.wc.confirm.reservation.member.memberAddress }}</td>
                <td>{{ delivering.wc.confirm.reservation.member.memberContact }}</td>
                <td>{{ delivering.wc.confirm.reservation.member.nickname }}</td>
                <td>
                    <button class="btn btn-primary" @click="DoCompleteDelivery(delivering.wc.confirm.reservation.reservationId, delivering.deliveryId)">배달완료</button>
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
import {getDeliveringList, getCrewName, completeDelivery} from '@/api';
import { ref } from 'vue';
import { failToast, returnInfoAlert } from '@/sweetAlert'
import router from '@/router/router';
  export default {

    setup() {

      const deliveringList = ref([]);
      const crewName = ref('');

      const pagination = ref({});
      const currentPage = ref(1);

      getCrewName().then((res) => {
        crewName.value = res.data;
      })

      const getList =(page) => {
      currentPage.value = page;

      const response = getDeliveringList(page, 10);
      
      response.then((res) => {
        deliveringList.value = res.data.deliveringList;
        pagination.value = res.data.pageMaker;
      }).catch(() => {
        failToast('배달 중인 목록을 불러오지 못했습니다. 다시 시도해주세요.')
      })
    }
    getList(1);

    const DoCompleteDelivery = (rId, deliveryId) => {
      completeDelivery(rId, deliveryId).then((res) => {
        if (res.data == 'success') {
          returnInfoAlert('배달을 완료합니다!').then(() => {
            router.go(0);
          })
        }else {
          failToast('배달 완료를 실패했습니다. 다시 요청해주세요.');
        }
      })
      .catch(() => {
        failToast('배달 완료를 실패했습니다. 다시 요청해주세요.');
      })
    }
      return {
        deliveringList,
        crewName,
        pagination,
        currentPage,
        getList,
        DoCompleteDelivery

      }
    }


  }

</script>

<style>

</style>