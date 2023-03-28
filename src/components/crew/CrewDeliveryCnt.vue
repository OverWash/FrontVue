<template>

  <!-- Project Card Example -->
  <div class="card shadow ">
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h5 class="m-0 font-weight-bold text-gray-900">{{ crewName }} 크루님, 배달 현황</h5>
          </div>
          <div class="card-body">
            <div class="reservationList">
              <!-- <h6>배달 중 (${deliveringCnt }개)</h6> -->
              <h6>배달 중 ({{ inProcessDeliveryCnt }}개)</h6>
              <div class="progress ">
            
                <div class="progress-bar bg-danger" role="progressbar" :style="{width: inProcessDeliveryCntWidth}" :aria-valuenow="inProcessDeliveryCnt"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="reservationList">
              <h6>배달 완료 ({{ completedDeliveryCnt }}개)</h6>
              <div class="progress ">
                <div class="progress-bar bg-warning" role="progressbar" :style="{width: completedDeliveryCntWidth}" :aria-valuenow="completedDeliveryCnt"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>

</template>

<script>

  import { ref, onMounted } from 'vue';
  import {getCrewName, getInProcessDeliveryCnt, getCompletedDeliveryCnt} from '@/api';
  export default {
    setup () {
    const crewName = ref('');
    const inProcessDeliveryCnt = ref('');
    const inProcessDeliveryCntWidth =  ref('');
    const completedDeliveryCnt = ref('');
    const completedDeliveryCntWidth = ref('');

    
    onMounted(() => {
      getCrewName().then((res) => {
        crewName.value = res.data;
      })

      getInProcessDeliveryCnt().then((res) => {
        inProcessDeliveryCnt.value = res.data;
        inProcessDeliveryCntWidth.value = (res.data * 5) + '%';
      })

      getCompletedDeliveryCnt().then((res) => {
        completedDeliveryCnt.value = res.data;
        completedDeliveryCntWidth.value = (res.data * 5) + '%';
      })
    })
    
    return {
      crewName,
      inProcessDeliveryCnt,
      completedDeliveryCnt,
      inProcessDeliveryCntWidth,
      completedDeliveryCntWidth,
    }
  
  
  
  }
}
</script>

<style>

</style>