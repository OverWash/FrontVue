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
import { ref } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import MainContainer from "@/components/MainContainer.vue";
import MainNavBar from "@/components/MainNavBar.vue";


export default {

  components: {
    MainHeader,
    MainFooter,
    MainContainer,
    MainNavBar,
  
  },
  setup() {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    const inputValue = ref("");
    return {
      inputValue,
    };
  },
};
</script>

<style>
@import url(@/assets/css/app.css);
</style>
