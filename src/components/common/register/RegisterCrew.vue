<template>
  <div class="container" style="margin-top: 12%">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h4 class="h4 text-gray-900 mb-4">
                  <strong>크루 회원가입</strong>
                </h4>
              </div>
              <form
                id="form"
                class="user"
                action="/register/crew"
                method="post"
                accept-charset="UTF-8"
                @submit.prevent="onSubmit"
              >
                <!-- user info (email, password) -->
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="email"
                      class="form-control form-control-user"
                      id="email"
                      name="email"
                      placeholder="이메일 주소"
                      required="required"
                      v-model="user.email"
                    />
                  </div>

                  <div class="col-sm-6">
                    <button
                      type="button"
                      class="btn btn-secondary btn-user btn-block"
                      id="emailCheckBtn"
                      name="emailCheckBtn"
                      @click="onClick($event)"
                    >
                      중복체크
                    </button>
                  </div>

                  <div v-if="emailChecked" class="text-center small">
                    <div v-if="emailPossible">생성 가능한 아이디입니다.</div>
                    <div v-else>이미 존재하는 아이디입니다.</div>
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-user"
                    id="password"
                    name="password"
                    placeholder="비밀번호"
                    required="required"
                    v-model="user.password"
                  />
                </div>

                <!-- crew info -->
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crewName"
                    name="crewName"
                    placeholder="이름"
                    required="required"
                    v-model="crew.crewName"
                  />
                </div>

                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="tel"
                      class="form-control form-control-user"
                      id="contact"
                      name="crewContact"
                      placeholder="연락처(숫자만 입력)"
                      required="required"
                      v-model="crew.crewContact"
                    />
                  </div>

                  <!-- 연락처 중복체크 -->
                  <div class="col-sm-6">
                    <button
                      type="button"
                      class="btn btn-secondary btn-user btn-block"
                      id="contactCheckBtn"
                      name="contactCheckBtn"
                      @click="onClick($event)"
                    >
                      중복체크
                    </button>
                  </div>

                  <div v-if="contactChecked" class="text-center small">
                    <div v-if="contactPossible">등록 가능한 연락처입니다.</div>
                    <div v-else>이미 존재하는 연락처입니다.</div>
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="date"
                    class="form-control form-control-user"
                    id="crewBirth"
                    name="crewBirth"
                    placeholder="생년월일"
                    required="required"
                    v-model="crew.crewBirth"
                  />
                </div>

                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="carType"
                      name="carType"
                      placeholder="차종(ex. 모닝)"
                      required="required"
                      v-model="crew.carType"
                    />
                  </div>

                  <div class="col-sm-6">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="carNumber"
                      name="carNumber"
                      placeholder="차량 번호"
                      required="required"
                      v-model="crew.carNumber"
                    />
                  </div>
                </div>

                <button
                  id="submitBtn"
                  type="submit"
                  class="btn btn-primary btn-user btn-block"
                >
                  Register Account
                </button>
              </form>

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
</template>

<script>
import { reactive, ref } from 'vue'
import router from '@/router/router'
import { checkContact, checkEmail, registerCrew } from '@/api/index.js'
import { infoAlert, successToast } from '@/sweetAlert'

export default {
  setup() {
    const emailChecked = ref(false)
    const emailPossible = ref(false)
    const contactChecked = ref(false)
    const contactPossible = ref(false)
    const data = ref({})
    const user = reactive({
      email: '',
      password: '',
      role: 'ROLE_CREW',
    })
    const crew = reactive({
      crewBirth: '',
      crewContact: '',
      crewName: '',
      carType: '',
      carNumber: '',
    })

    const onClick = (event) => {
      const id = event.target.id

      switch (id) {
        case 'emailCheckBtn':
          checkDuplicate('email')
          break
        case 'contactCheckBtn':
          checkDuplicate('contact')
          break
      }
    }

    const checkDuplicate = async (type) => {
      switch (type) {
        case 'email':
          {
            if (user.email == '') {
              infoAlert('이메일을 입력해 주세요!')
              return
            }

            emailChecked.value = true

            const response = checkEmail(user.email)
            response.then((res) => {
              if (res.data == 'possible') {
                emailPossible.value = true
              } else {
                emailPossible.value = false
              }
            })
          }
          break
        case 'contact':
          {
            if (crew.crewContact == '') {
              infoAlert('연락처를 입력해 주세요!')
              return
            }

            contactChecked.value = true
            const response = checkContact('crew', crew.crewContact)
            response.then((res) => {
              if (res.data == 'possible') {
                contactPossible.value = true
              } else {
                contactPossible.value = false
              }
            })
          }
          break
      }
    }

    const onSubmit = () => {
      if (!emailPossible.value) {
        infoAlert('이메일 중복 검사를 완료해 주세요')
      }
      if (!contactPossible.value) {
        infoAlert('연락처 중복 검사를 완료해 주세요')
      }
      if (emailPossible.value && contactPossible.value) {
        const wrapper = {
          user: user,
          crew: crew,
        }
        const response = registerCrew(wrapper)
        response.then((res) => {
          if (res.status == 201) successToast('회원가입이 완료되었습니다!')
          router.push('/login')
        })
      }
    }

    return {
      emailChecked,
      emailPossible,
      contactChecked,
      contactPossible,
      data,
      onClick,
      checkDuplicate,
      onSubmit,
      user,
      crew,
    }
  },
}
</script>

<style></style>