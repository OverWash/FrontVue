<template>
  <div class="contain-crew">
    <!-- Content Row -->
    <div class="rowee">
      <div class="col-xl-12 ">
        <CrewDeliveryCnt />

        <!-- 수거예정목록 -->
        <CrewSimpleCollectList />

        <!-- 배달예정목록 -->
        <CrewSimpleDeliveryList />

      </div>
      <!-- 수거예정목록 -->
    </div>
    <!-- End Content Row -->
  </div>
</template>

<script>

import {CrewDeliveryCnt, CrewSimpleCollectList, CrewSimpleDeliveryList} from '@/components/crew';
export default {
  components : {
    CrewDeliveryCnt, CrewSimpleCollectList, CrewSimpleDeliveryList
  }
}
</script>

<style>
.contain-crew{
  width: 100%;
  height: 94%;
  padding-inline: 20px;
  }
.rowee{
  height: 70%;
}
</style>