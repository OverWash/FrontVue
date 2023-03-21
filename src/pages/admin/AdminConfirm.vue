<template>
  <AdminDetailTable :dummy="dummy" />
</template>

<script>
import AdminDetailTable from '@/components/admin/AdminDetailTable.vue';
import { ref } from 'vue';

export default {
  setup() {
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
      dummy
    };
  },
  components: { AdminDetailTable }
}
</script>

<style></style>