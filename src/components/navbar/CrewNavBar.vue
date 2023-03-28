<template>
  <div class="m-4">
    <div>메뉴</div>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li
        class="nav-link mt-3 side-item-btn"
        v-for="(dum, index) in dummy"
        :key="index"
        :class="checkBtn === dum.id ? 'active' : null"
        @click="onClick(dum.id)"
      >
        {{ dum.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import router from '@/router/router'
import { ref } from 'vue'

export default {
  setup() {
    const dummy = [
      {
        id: 1,
        name: 'Home',
      },
      {
        id: 2,
        name: '수거가능목록',
      },
      {
        id: 3,
        name: '배달가능목록',
      },
      {
        id: 4,
        name: '배달중인목록',
      },
      {
        id: 5,
        name: '배달완료목록',
      }
    ]

    const checkBtn = ref(1)

    const onClick = (id) => {
      checkBtn.value = id
      switch (id) {
        case 1:
          router.push({ name: 'CrewMain' })
          break
        case 2:
          router.push({ name: 'ToBeCollect' })
          break
        case 3:
          router.push({ name: 'ToBeDelivery' })
          break
        case 4:
          router.push({ name: 'CrewDelivering' })
          break
        case 5:
          router.push({ name: 'CompleteDelivery' })
          break
      }
    }

    return {
      checkBtn,
      dummy,
      onClick,
    }
  },
}
</script>
<style >
@import url('@/assets/css/navbar.css');
</style>

