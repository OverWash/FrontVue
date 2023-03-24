<template>
  <div class="max-width">
    <AdminDetailTable :dummy="dummy" />
  </div>
</template>

<script>
// import router from '@/router/router';
import { ref } from 'vue';
import AdminDetailTable from '@/components/admin/AdminDetailTable.vue'
export default {
  components: {
    AdminDetailTable
  },
  setup() {
    const dummy = ref(
      [
        {
          id: 1,
          first: 'Laundry1',
          last: 'Otto',
          Handle: '@mdo',
        },
        {
          id: 2,
          first: 'Laundry2',
          last: 'Thornton',
          Handle: '@fat',
        },
        {
          id: 3,
          first: 'Laundry3',
          last: 'Smith',
          Handle: '@twitter',
        },
      ]
    )
    // const detailPage = (id) => {
    //   router.push(`/admin/laundry/${id}`)
    // }

    return {
      dummy,
      // detailPage
    }
  }
}
</script>

<style></style>