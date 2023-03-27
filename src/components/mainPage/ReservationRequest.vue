<template>
  <div class="col-xl-6">
    <!-- <Transition name="fade" mode="out-in"> -->
    <div
      class="card shadow mb-4"
      id="requestPictureDiv"
      v-on:click="openReservationRequest"
      v-if="Rswitch === 1"
    >
      <div class="card-body" id="reservationPicture">
        <img
          class="img-fluid px-3 px-sm-4"
          src="@/assets/logo.png"
          style="max-width: 60%"
        />
        <h4 class="m-0 font-weight-bold text-dark">+예약하기</h4>
      </div>
    </div>
    <!-- </Transition> -->
    <!-- Reservation request Modal-->
    <!-- <Transition name="fade" mode="out-in"> -->
    <div class="card shadow mb-4" v-if="Rswitch === 0" id="requestFormDiv">
      <form @submit.prevent="submitForm">
        <div class="col-sm-12 mb-4" style="margin-top: 1rem">
          <!-- 수거 날짜 선택 -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <div class="h5 mb-0 font-weight-bold text-gray-800">예약접수</div>
            </div>
            <div class="card-body">
              <h6><b>희망 수거 날짜를 입력해 주세요</b></h6>
              <input
                type="date"
                id="collectDate"
                name="collectDate"

                v-model="data.collectDate"
                @input="onInput"
              />
              <hr />
              <h6><b>요청사항을 입력해 주세요</b></h6>
              <input
                type="text"
                id="request"
                name="request"
                class="form-control bg-light border-0 large"
                placeholder="요청사항을 입력하세요"
                v-model="data.request"
              />
            </div>
          </div>
          <div id="buttonRow">
            <a
              href="#"
              @click="submitForm"
              class="btn btn-primary btn-icon-split btn-sm"
              
            >
            <!-- :disabled="!isDateSelected" -->
              <span class="icon text-white-60">
                <i class="fas fa-check"></i>
              </span>
              <span class="text">신청하기</span>
            </a>
            <a
              href="#"
              v-on:click="openReservationRequest"
              class="btn btn-secondary btn-icon-split btn-sm"
            >
              <span class="icon text-white-60">
                <i class="fas fa-trash"></i>
              </span>
              <span class="text">취소하기</span>
            </a>
          </div>
        </div>
      </form>
    </div>
    <!-- </Transition> -->
    <!-- Reservation request Modal-->
  </div>
</template>

<script>
import 'animate.css'
// import axios from 'axios'
import { requestReservation } from '@/api/index.js'
import { ref } from 'vue'

// const instance = axios.create({
//   xsrfCookieName: 'csrftoken', // CSRF 토큰이 저장된 쿠키의 이름
//   xsrfHeaderName: 'X-CSRFToken', // CSRF 토큰이 포함될 요청 헤더의 이름
// })

export default {
  data() {
    return {
      Rswitch: 1,
      formData: {
        collectDate: null,
        request: '',
      },
    }
  },
  // computed: {
  //   isDateSelected() {
  //     return (
  //       this.formData.collectDate !== null &&
  //       this.formData.collectDate !== '' &&
  //       this.formData.collectDate !== undefined
  //     )
  //   },
  //   minDate() {
  //     const today = new Date()
  //     const dd = String(today.getDate()).padStart(2, '0')
  //     const mm = String(today.getMonth() + 1).padStart(2, '0')
  //     const yyyy = today.getFullYear()
  //     return yyyy + '-' + mm + '-' + dd
  //   },
  //   maxDate() {
  //     const today = new Date()
  //     today.setDate(today.getDate() + 5)
  //     const dd = String(today.getDate()).padStart(2, '0')
  //     const mm = String(today.getMonth() + 1).padStart(2, '0')
  //     const yyyy = today.getFullYear()
  //     return yyyy + '-' + mm + '-' + dd
  //   },
  // },
  methods: {
    // onInput() {
    //   const date = new Date(this.formData.collectDate)
    //   date.setHours(0, 0, 0, 0)
    //   this.formData.collectDate = date
    //     .toISOString()
    //     .slice(0, 19)
    //     .replace('T', ' ')
    //   document.getElementById('collectDate').value = this.formData.collectDate
    // },
    openReservationRequest() {
      if (this.Rswitch === 1) {
        this.Rswitch = 0
      } else {
        this.Rswitch = 1
      }
    },

    // submitForm() {

    // },
  },
  setup() {
    const data = ref({
      collectDate: '',
      request: '',
    })

    const submitForm = () => {
      // if (this.isDateSelected) {
        // instance
        //   .post('http://127.0.0.1:8100/reservations/1', this.formData)
        //   .then((response) => {
        //     console.log(response.data)
        //     alert('예약 성공!')
        //     location.reload()
        //   })
        //   .catch((error) => {
        //     console.log(error.response.data)
        //   })
        console.log(data.value)
        requestReservation(data.value)
          .then((res) => {
            console.log(res)
            alert('예약 성공!')
            location.reload()
          })
          .catch((err) => {
            console.log(err)
          })
      // } else {
      //   alert('날짜를 선택하세요!')
      // }
    }

    return {
      data,
      submitForm
    }
  },
}
</script>

<style>
#buttonRow {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>