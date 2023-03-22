<template>
  <AdminDetailTable :dummy="dummy" :name='confirm' />
</template>

<script>
import AdminDetailTable from '@/components/admin/AdminDetailTable.vue';
import { ref } from 'vue';

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
    return {
      dummy,
      confirm

    };
  },
  components: { AdminDetailTable }
}
</script>

<style></style>