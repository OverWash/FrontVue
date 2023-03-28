<template>
  <div class="card shadow ">
          <div class="card-header py-3">
            <h5 class="m-0 font-weight-bold text-gray-900">배달예정목록</h5>
          </div>
          <div class="card-body border-bottom-success">
              <div v-for="wc in wcList" :key="wc.wcId">
                <div class="reservationList">
                  <h4 class="middle font-weight-bold">
                    {{ wc.confirm.reservation.member.memberAddress }}
                    <span class="float-right">
                      <button class="btn btn-secondary btn-icon-split" style="line-height: 1;" @click="doDelivery(wc.confirm.reservation.reservationId, wc.wcId)">
                        <span class="icon text-gray-600">
                          <i class="fas fa-arrow-right"></i>
                        </span>
                        <span class="text font-weight-bold">배달하기</span>
                      </button>
                    </span>
                  </h4>
                </div>
            </div>
          </div>
        </div>
</template>

<script>
  import { ref, } from 'vue';
  import { failToast, returnInfoAlert } from '@/sweetAlert';
  import router from '@/router/router'
  import {getWcList, delivery} from '@/api';
  export default {

    setup() {
    
    const wcList = ref([]);
  
      getWcList(1, 5).then((res) => {
        wcList.value = res.data.wcList;
      })
      
    const doDelivery = (rId, wcId) => {
      delivery(rId, wcId).then((res) => {
        if (res.data === 'success') {
          returnInfoAlert('배달을 진행합니다!')
          .then(()=>{
            router.go(0);
             })
        } else {
          failToast('배달에 실패했습니다. 다시 요청해주세요.');
        }
      })
      .catch(() => {
        failToast('배달에 실패했습니다. 다시 요청해주세요.');
      })
      
    }
  
		return {
      wcList,
      doDelivery
		}
	}

  }
</script>

<style>

</style>