<template>
  <div class="side">
    <div :class="btnText === '<' ? 'show' : 'hide'">
      <div class='side-item'>
        <div class="d-flex align-items-center flex-column">
          <div class="profile-image"></div>
          <div>
            {{ info.role }}
          </div>
        </div>
        <hr class="m-4" />
        <div>
          <AdminNavBar v-if="info.role === 'ADMIN'" />
          <CrewNavBar v-else-if="info.role === 'CREW'" />
          <MemberNavBar v-else-if="info.role === 'MEMBER'" />
          <div v-else>sad</div>
        </div>
      </div>
    </div>

    <div class="toggle-btn">
      <div class="img-toggle" :btn-text=btnText @click="showToggle"></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

import { AdminNavBar, CrewNavBar, MemberNavBar } from './navbar/index.js';

export default {
  setup() {
    const btnText = ref('<');
    const info = ref({
      role: 'ADMIN'
    })
    const showToggle = () => {
      if (btnText.value === '<') {
        btnText.value = '>'

      } else {
        btnText.value = '<'

      }
    }
    return {
      info,
      btnText,
      showToggle
    }
  },
  components: {
    AdminNavBar,
    CrewNavBar,
    MemberNavBar,
  }
}
</script>

<style>
@import url('@/assets/css/navbar.css');
</style>