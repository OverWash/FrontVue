<template>
  <div>
  <AdminDetailTable :dummy="dummy" :name='confirm' :formatterData='formatterData' />

  </div>
</template>

<script>
import AdminDetailTable from '@/components/admin/AdminDetailTable.vue';
import { ref, watchEffect } from 'vue'
import { getReservationConfirmeds } from '@/api'
import { dataRefactor } from '@/pages/admin/dataRefactor'

export default {
  setup() {
    const confirm = 'confirm';
    const dummy = ref([
      {
        id: 1,
        first: "Confirm1",
        last: "Otto",
        Handle: "@mdo",
      },
      {
        id: 2,
        first: "Confirm2",
        last: "Thornton",
        Handle: "@fat",
      },
      {
        id: 3,
        first: "Confirm3",
        last: "Laundry",
        Handle: "@twitter",
      },
    ]);
    const page = ref({
      pageNum : 1,
      amount : 10,
    })
    const responseData = ref();
    const confirmList = getReservationConfirmeds(page.value);
     confirmList.then(async (response)=>{
       console.log(response.data)
       responseData.value = await response.data;
    })
    const formatterData = ref();
    watchEffect(()=>{
      formatterData.value = dataRefactor(1,responseData);
    })


    return {
      dummy,
      confirm,
      page,
      formatterData

    };
  },
  components: { AdminDetailTable }
}
</script>

<style></style>