<template>
  <div class="col-xl-6">
    <div
      class="card shadow mb-4"
      id="requestPictureDiv"
      v-on:click="openReservationRequest"
      v-if="Rswitch === 1"
    >
      <div class="card-body" id="reservationPicture">
        <img
          class="img-fluid px-3 px-sm-4"
          src="@/assets/resources/img/booking.svg"
          style="max-width: 70%"
        />
        <h4 class="m-0 font-weight-bold text-dark float-right">+예약하기</h4>
      </div>
    </div>
    <!-- Reservation request Modal-->
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
                :min="minDate"
                :max="maxDate"
                @input="checkDate"
              />
              <hr />
              <h6><b>요청사항을 입력해 주세요(선택사항)</b></h6>
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
              :disabled="!data.collectDate"
            >
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
    <!-- Reservation request Modal-->
  </div>
</template>

<script>
import { requestReservation } from '@/api/index.js'
import { ref } from 'vue'
import Swal from "sweetalert2";
import store from '@/store/store'

export default {
  data() {
    return {
      Rswitch: 1,
      minDate: '',
      maxDate: '',
    }
  },

  methods: {
     openReservationRequest() {
      if (this.Rswitch === 1) {
        this.Rswitch = 0
        const today = new Date()
        this.minDate = today.toISOString().slice(0, 10)
        const maxDate = new Date(today)
        maxDate.setDate(maxDate.getDate() + 5)
        this.maxDate = maxDate.toISOString().slice(0, 10)
      } else {
        this.Rswitch = 1
      }
    },

    onInput(event) {
      // 오늘 날짜 구하기
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      // 입력된 날짜 구하기
      const selectedDate = new Date(event.target.value)
      selectedDate.setHours(0, 0, 0, 0)

      // 오늘 이전의 날짜인 경우 입력된 값을 삭제하고 알림 메시지 출력
      if (selectedDate < today) {
        alert('오늘 이전의 날짜는 선택할 수 없습니다.')
        event.target.value = ''
        this.data.collectDate = ''
      }
      // 오늘로부터 5일 이후의 날짜인 경우 입력된 값을 삭제하고 알림 메시지 출력
      else if (selectedDate > new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000)) {
        alert('오늘부터 5일 이후의 날짜까지만 선택할 수 있습니다.')
        event.target.value = ''
        this.data.collectDate = ''
      }
    },

  },
  setup() {
    const id = store.state.userid;
    const data = ref({
      collectDate: '',
      request: '',
    })

    const submitForm = () => {
      // 날짜를 선택하지 않은 경우 알림 메시지 출력 후 제출하지 않음
      if (data.value.collectDate === '') {
        Swal.fire({
        icon:'info',
        title:'날짜를 입력해 주세요!',
        })
        return
      }
        console.log(data.value)
        requestReservation(id, data.value)
          .then((res) => {
            console.log(res)
            Swal.fire(
                    '접수 완료',
                    '예약건이 접수되었습니다.',
                    'success'
                ).then(() => {
                    location.reload();
                  });
          })
          .catch((err) => {
            console.log(err)
          })
    }

    return {
      data,
      submitForm,
      id
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
</style>