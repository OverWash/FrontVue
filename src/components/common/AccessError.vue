<template>
  <div class="custom-error">
    <div class="container-fluid">
      <!-- 404 Error Text -->
      <div class="text-center">
        <div class="error mx-auto" data-text="403">403</div>
        <p class="lead text-gray-800 mb-5">접근 권한이 없습니다.</p>
        <a href="#" @click="goback">&larr; 돌아가기</a>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router/router.js'
export default {
  setup() {
    const goback = () => {
      router.go(-1)
    }

    return {
      goback,
    }
  },
}
</script>

<style>
.custom-error {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>