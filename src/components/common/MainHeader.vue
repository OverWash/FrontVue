<template>
  <div class="header">
    <div class="ms-4 row1">OverWash</div>

    <div class="contain-item">
      <span class="my-profile"
        >내 정보
        <MyProfileMenu />
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
import MyProfileMenu from './MyProfileMenu.vue'

export default {
  components: {
    MyProfileMenu,
  },
  setup() {
    const theme = ref({
      theme: 'light',
      content: '다크모드',
    })
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

    return {
      theme,
      darkModeBtn,
    }
  },
}
</script>

<style>
@import url(@/assets/css/header.css);
</style>
