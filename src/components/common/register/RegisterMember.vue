<template>
  <div class="container" style="margin-top: 20%">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h4 class="h4 text-gray-900 mb-4">
                  <strong>멤버 회원가입</strong>
                </h4>
              </div>
              <form
                id="form"
                class="user"
                action="/register/member"
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
                      name="email"
                      placeholder="이메일 주소"
                      required="required"
                      v-model="user.email"
                    />
                  </div>

                  <!-- 이메일 중복체크 -->
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

                  <div v-if="emailChecked">
                    <div class="text-center" v-if="emailPossible">
                      생성 가능한 아이디입니다.
                    </div>
                    <div class="text-center" v-else>
                      이미 존재하는 아이디입니다.
                    </div>
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

                <!-- member info -->
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="nickname"
                    name="nickname"
                    placeholder="닉네임"
                    required="required"
                    v-model="member.nickname"
                  />
                </div>

                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="tel"
                      class="form-control form-control-user"
                      id="contact"
                      name="memberContact"
                      placeholder="연락처(숫자만 입력)"
                      required="required"
                      v-model="member.memberContact"
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

                  <div v-if="contactChecked">
                    <div class="text-center" v-if="contactPossible">
                      등록 가능한 연락처입니다.
                    </div>
                    <div class="text-center" v-else>
                      이미 존재하는 연락처입니다.
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="memberAddress"
                    name="memberAddress"
                    placeholder="주소 (ex. 서울특별시 ○○구 ○○동)"
                    required="required"
                    v-model="member.memberAddress"
                  />
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
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router/router'
import { checkContact, checkEmail } from '@/api/index.js'
import swal from 'sweetalert2'

export default {
  setup() {
    const emailChecked = ref(false)
    const emailPossible = ref(false)
    const contactChecked = ref(false)
    const contactPossible = ref(false)
    const contact = ref('')
    const data = ref({})
    const user = reactive({
      email: '',
      password: '',
      role: 'ROLE_MEMBER',
    })
    const member = reactive({
      memberAddress: '',
      memberContact: '',
      nickname: '',
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
            // 아무것도 입력 안 했을 경우
            if (user.email == '') {
              sweetAlert('이메일을 입력해 주세요!')
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
            if (member.memberContact == '') {
              sweetAlert('연락처를 입력해 주세요!')
              return
            }

            contactChecked.value = true

            const response = checkContact('member', member.memberContact)
            response.then((res) => {
              if (res.data == 'possible') {
                contactPossible.value = true
              } else {
                contactPossible.value = false
              }
            })

            // const res = await axios.get(
            //   `http://localhost:3000/member?memberContact=${param}`
            // )
            // data.value = res.data[0]
            // if (data.value) {
            //   contactPossible.value = false
            // } else {
            //   contactPossible.value = true
            // }
          }
          break
      }
    }

    const onSubmit = () => {
      if (!emailPossible.value) {
        notify('이메일 중복 검사를 완료해 주세요')
      }
      if (!contactPossible.value) {
        notify('연락처 중복 검사를 완료해 주세요')
      }
      if (emailPossible.value && contactPossible.value) {
        notify('모두 입력 완료')
        axios
          .post(`http://localhost:3000/users`, user)
          .then((res) => {
            if (res.status == 201) notify('회원가입이 완료되었습니다!')
            router.push('/login')
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }

    const sweetAlert = (text) => {
      swal.fire({
        title: '알림',
        text: text,
        icon: 'info',
      })
    }

    // sweetalert로 변경하기 -> 사용 안 할 경우 후에 지우기
    const notify = (msg) => {
      toast.info(msg, {
        autoClose: 2000,
      }) // ToastOptions
    }

    return {
      emailChecked,
      emailPossible,
      contactChecked,
      contactPossible,
      contact,
      data,
      onClick,
      checkDuplicate,
      onSubmit,
      notify,
      user,
      member,
      sweetAlert,
    }
  },
}
</script>

<style>
</style>