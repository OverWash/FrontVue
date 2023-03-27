<template>
  <div class="main-contain">
    <MainNavBar />
    <div class="main-contain-item">
      <MainHeader />
      <MainContainer />
      <MainFooter />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import MainHeader from '@/components/common/main/MainHeader.vue'
import MainFooter from '@/components/common/main/MainFooter.vue'
import MainContainer from '@/components/common/main/MainContainer.vue'
import MainNavBar from '@/components/common/main/MainNavBar.vue'

export default {
  components: {
    MainHeader,
    MainFooter,
    MainContainer,
    MainNavBar,
  },
  setup() {
    // document.documentElement.setAttribute('color-theme', 'light')
    document.documentElement.setAttribute('data-bs-theme', 'light')
    const inputValue = ref('')
    return {
      inputValue,
    }
  },
}
</script>

<style>
@import url(@/assets/css/app.css);
</style>