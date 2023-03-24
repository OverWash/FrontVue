<template>
  <div class="max-width">
    <router-link class="member-main-page" :to="{ name: 'member_main' }">To Member Main</router-link>
    <h1>HomePages</h1>
    <div class="d-flex column col-md-6">
      <div class="form-label h2 me-2 ">id:</div>

      <input type="text" v-model="email" class="form-control">
    </div>
    <br />
    <div class="d-flex column col-md-6">
      <div class="form-label h2 me-2 col-6">Password :</div>
      <input type="password" v-model="pwd" class="form-control">
    </div>

    <button @click="loginBtn">로그인</button>
  </div>
</template>

<script>
import client from '@/api/client';
import { login } from '@/api/index.js';
import { ref } from 'vue';
import VueCookie from 'vue-cookie';
import { useRouter } from 'vue-router';

export default {
  components: {},
  setup() {
    const router = useRouter();
    const email = ref('');
    const pwd = ref('');

    const loginBtn = () => {
      const data = {
        "email": email.value,
        "password": pwd.value,
      }
      const response = login(data);
      response.then((res) => {
        const token = VueCookie.get('token');
        console.log(token);
        client.defaults.headers.common['Authorization'] = `Bearer ${token}`
        if (res.headers.role === 'ROLE_ADMIN') {
          router.push('/admin')
        }
      })

    }

    return {
      email,
      pwd,
      loginBtn
    }
  }
};
</script>

<style>
@import url("@/assets/css/body.css");
</style>
