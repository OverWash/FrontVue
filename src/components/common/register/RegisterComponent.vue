<template>
  <div class="container" style="margin-top: 12%">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <!-- <div class="col-lg-5 d-none d-lg-block bg-register-image"></div> -->
          <div class="col-lg-7" align="center">
            <div class="p-5">
              <div class="text-center">
                <h4 class="h4 text-gray-900 mb-4">
                  <strong>환영합니다!</strong>
                </h4>
                <h6 class="h6 text-gray-900 mb-4">회원 유형을 선택해 주세요</h6>
              </div>

              <!-- <form id="form" action="/register" method="post"> -->
              <button
                id="crewBtn"
                type="button"
                class="btn btn-secondary btn-user btn-block"
                style="font-size: 1.1rem; padding: 0.2rem"
                @click="onClick($event)"
              >
                크루
              </button>
              <button
                id="memberBtn"
                type="button"
                class="btn btn-secondary btn-user btn-block"
                style="font-size: 1.1rem; padding: 0.2rem"
                @click="onClick($event)"
              >
                멤버
              </button>
              <!-- <input
                  type="hidden"
                  name="${_csrf.parameterName}"
                  value="${_csrf.token}"
                /> -->
              <!-- <button type="submit"></button> -->
              <!-- </form> -->

              <hr />
              <div class="text-center">
                <router-link class="small" :to="{ name: 'Login' }"
                  >Already have an account? Login!</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import router from '@/router/router'
export default {
  methods: {
    onClick: (event) => {
      const type = event.target.id
      if (type == 'crewBtn') {
        router.push({ name: 'CrewRegister' })
      } else {
        router.push({ name: 'MemberRegister' })
      }
    },
  },
  setup() {},
}
</script>

<style>
</style>