<template>
  <div class="header">
    <div class="ms-4 row1">OverWash</div>
<!--    v-show='role!=="ROLE_ADMIN"'-->
    <div class="contain-item" >
      <span class="my-profile" @mouseover="mouseOn(true)"
            @mouseleave='mouseOn(false)'
        >내 정보
        <MyProfileMenu v-show="menu" :class='menu ? "d-block": null ' />
      </span>
      <span
        class="change-mode"
        :class="theme ? 'light' : 'dark'"
        @click="darkModeBtn"
        >{{ theme.content }}</span
      >
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import MyProfileMenu from '../MyProfileMenu.vue'
import store from '@/store/store'

export default {
  components: {
    MyProfileMenu,
  },
  setup() {
    const theme = ref({
      theme: 'light',
      content: '다크모드',
    })
    const menu = ref(false)
    const role = ref(store.state.role)

    const darkModeBtn = () => {
      if (theme.value.theme === 'light') {
        // document.documentElement.setAttribute('color-theme', 'dark')
        document.documentElement.setAttribute('data-bs-theme', 'dark')
        theme.value.theme = 'dark'
        theme.value.content = '라이트모드'
      } else {
        // document.documentElement.setAttribute('color-theme', 'light');
        document.documentElement.setAttribute('data-bs-theme', 'light')
        theme.value.theme = 'light'
        theme.value.content = '다크모드'
      }
    }

    const mouseOn = (value) => {
      menu.value = value
    }

    return {
      theme,
      darkModeBtn,
      mouseOn,
      menu,
      role
    }
  },
}
</script>

<style>
@import url(@/assets/css/header.css);
</style>
