<template>
  <div class="card shadow ">
          <div class="card-header py-3">
            <h5 class="m-0 font-weight-bold text-gray-900">수거예정목록</h5>
          </div>
          <div class="card-body border-bottom-success">
              <div v-for="collect in collectList" :key="collect.reservationId">
                <div class="reservationList">
                  <div class="middle font-weight-bold d-flex column justify-content-between ">
                    <div class="h4">
                    {{ collect.member.memberAddress }}
                    </div>
                    <div class="float-right">
                      <button class="btn btn-secondary btn-icon-split" style="line-height: 1;" @click="DoCollect(collect.reservationId)">
                        <span class="icon text-gray-600">
                          <i class="fas fa-arrow-right"></i>
                        </span>
                        <span class="text font-weight-bold">수거하기</span>
                      </button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
</template>

<script>
  import { ref,  } from 'vue';
  import { failToast, returnInfoAlert } from '@/sweetAlert';
  import {getPickupList, collect} from '@/api';
  import router from '@/router/router'
  export default {
    setup () {
      const collectList = ref([]);

      getPickupList(1, 5).then((res) => {
        collectList.value = res.data.collectList;
      })
    
      const DoCollect = (rId) => {
      collect(rId).then((res) => {
        if (res.data === 'success') {
          returnInfoAlert('수거를 진행합니다!')
          .then(()=>{
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
      DoCollect,
    }
  }
}
</script>

<style>

</style>