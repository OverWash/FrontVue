<template>
  <div class="max-width">
    <table v-show="dummy.length !== 0" class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr class="item-select " v-for="(data, index) in dummy " :key="index" @click="detailPage(data.id)">
          <th scope="row">{{ data.id }}</th>
          <td>{{ data.first }}</td>
          <td>{{ data.last }}</td>
          <td>{{ data.Handle }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import router from '@/router/router';
export default {
  props: {
    dummy: {
      type: Array,
      require: false
    },
    name: {
      type: String,
      require: true,
    },
    responseData :{
      type:Object,
      require:true,
    }

  },

  setup(props) {
    const detailPage = (id) => {
      const path = props.name === 'confirm' ? `/admin/confirm/${id}` : `/admin/laundry/${id}`;
      router.push({
        path: path,
      })
    }
    return {
      detailPage
    }
  }

}
</script>

<style>
.item-select:hover {
  cursor: pointer;
  background-color: var(--bs-primary);
  /* border: 2px solid gray; */

}
</style>