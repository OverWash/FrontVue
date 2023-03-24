<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9" style="margin-top: 20%">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h3 class="h3 text-gray-900 mb-4">
                      <strong>OverWash</strong>
                    </h3>
                  </div>

                  <!-- <h5 class="h5 text-gray-900 mb-4">
                    <c:out value="${error}" />
                  </h5>
                  <h5 class="h5 text-gray-900 mb-4">
                    <c:out value="${logout}" />
                  </h5> -->

                  <!-- Login Form -->
                  <form class="user" action="/login" method="post">
                    <div class="form-group">
                      <input
                        type="text"
                        name="email"
                        class="form-control form-control-user"
                        id="email"
                        placeholder="Email"
                        required="required"
                        v-model="user.email"
                      />
                    </div>

                    <div class="form-group">
                      <input
                        type="password"
                        name="password"
                        class="form-control form-control-user"
                        id="password"
                        placeholder="Password"
                        required="required"
                        v-model="user.password"
                      />
                    </div>

                    <!--  security remember-me -->
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck"
                        />
                        <label class="custom-control-label" for="customCheck"
                          >Remember Me</label
                        >
                      </div>
                    </div>

                    <!-- CSRF 토큰으로 domain 직접 입력 판별
										<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />  -->

                    <button
                      type="submit"
                      class="btn btn-secondary btn-user btn-block"
                      style="font-size: 1.2rem; padding: 0.2rem"
                      @click.prevent="loginBtn"
                    >
                      Login
                    </button>

                    <p></p>
                  </form>
                  <!-- Login Form -->
                  <hr />
                  <div class="text-center">
                    <router-link class="small" :to="{ name: 'Register' }"
                      >Create an Account!</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- Nested Row within Card Body -->
          </div>
        </div>
      </div>
    </div>
    <!-- Outer Row -->
  </div>
</template>

<script>
import client from '@/api/client'
import { login } from '@/api/index.js'
import VueCookie from 'vue-cookie'
import { ref } from 'vue'
import { useStore } from 'vuex'
import router from '@/router/router.js'
export default {
  setup() {
    const user = ref({
      email: '',
      password: '',
    })

    const store = useStore()

    const setRole = (role) => {
      store.commit('setRole', role)
    }

    const movePage = (role) => {
      switch (role) {
        case 'ROLE_ADMIN':
          router.push({ name: 'AdminMain' })
          break
        case 'ROLE_MEMBER':
          router.push({ name: 'MemberMain' })
          break
        case 'ROLE_CREW':
          router.push({ name: 'CrewMain' })
          break
      }
    }

    const loginBtn = () => {
      const response = login(user.value)
      response.then((res) => {
        const token = VueCookie.get('token')
        client.defaults.headers.common['Authorization'] = `Bearer ${token}`

        // 권한을 vuex state 에 저장
        const role = res.headers.role
        setRole(role)

        movePage(role)
      })
    }

    return {
      user,
      loginBtn,
      setRole,
    }
  },
}
</script>

<style>
</style>