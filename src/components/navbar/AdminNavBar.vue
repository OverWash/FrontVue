<template>
  <div class="m-4">
    <div>메뉴</div>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">

      <li class="nav-link mt-3 side-item-btn" v-for="( dum, index ) in dummy" :key='index'
        :class="checkBtn === dum.id ? 'active' : null" @click="onClick(dum.id)"> {{ dum.name }}</li>
    </ul>
  </div>
</template>

<script>
import router from '@/router/router';
import { ref } from 'vue';

export default {
  setup() {

    const dummy = [{
      id: 1,
      name: 'Home',
      path: ''
    },
    {
      id: 2,
      name: '검수예정목록',
      path: 'confirm'
    }, {
      id: 3,
      name: '세탁예정목록',
      path: 'laundry'

    }]

    const checkBtn = ref(1);

    const onClick = (id) => {
      checkBtn.value = id;
      if (id === 1) {
        router.push("/admin/main")
      }

      if (id === 2) {
        router.push("/admin/confirm")
      }
      if (id === 3) {
        router.push("/admin/laundry")
      }
    }

    return {
      checkBtn,
      dummy,
      onClick
    }
  }
}
</script>
<style >
@import url('@/assets/css/navbar.css');
</style>

