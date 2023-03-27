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
        name: '예약 현황',
      },
      {
        id: 3,
        name: '결제요청목록',
      },
      {
        id: 4,
        name: '영수증 목록',
      },
      {
        id: 5,
        name: '가격 안내',
      },
      {
        id: 6,
        name: '이용 안내',
      },
    ]

    const checkBtn = ref(1)

    const onClick = (id) => {
      checkBtn.value = id
      switch (id) {
        case 1:
          router.push({ name: 'MemberMain' })
          break
        case 2:
          router.push({ name: 'Reservations' })
          break
        case 3:
          router.push({ name: 'PaymentRequests' })
          break
        case 4:
          router.push({ name: 'Receipts' })
          break
        case 5:
          router.push({ name: 'PriceInfo' })
          break
        case 6:
          router.push({ name: 'GuideInfo' })
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

