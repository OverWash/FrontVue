<template>
  <div class="col-xl-6">
    <!-- <Transition name="fade"> -->
      <div
        class="card shadow mb-4"
        v-on:click="openReservationRequest"
        v-if="Rswitch === 1"
      >
        <div class="card-body" id="reservationPicture">
          <img
            class="img-fluid px-3 px-sm-4"
            src="@/assets/logo.png"
            style="max-width: 61%"
          />
          <h4 class="m-0 font-weight-bold text-dark">+예약하기</h4>
        </div>
      </div>
    <!-- </Transition> -->
    <!-- Reservation request Modal-->
    <div>
        <div class="card shadow mb-4" v-if="Rswitch === 0">
          <form
            id="requestForm"
            class="user"
            action="/reservation/request"
            method="POST"
            onsubmit="requestSubmitBtn()"
          >
            <div class="col-sm-12 mb-4" style="margin-top: 1rem">
              <!-- 수거 날짜 선택 -->
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    예약접수
                  </div>
                </div>
                <div class="card-body">
                  <h6><b>희망 수거 날짜를 입력해 주세요</b></h6>
                  <input
                    type="date"
                    id="collectDate"
                    name="collectDate"
                    value="2023-01-01"
                    min="2018-01-01"
                    max="2023-12-31"
                  />
                  <hr />
                  <h6><b>요청사항을 입력해 주세요</b></h6>
                  <input
                    type="text"
                    id="request"
                    name="request"
                    class="form-control bg-light border-0 large"
                    placeholder="요청사항을 입력하세요"
                  />
                </div>
              </div>
              <div id="buttonRow">
                <a
                  href="#"
                  onclick="return chk_form()"
                  class="btn btn-primary btn-icon-split btn-sm"
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
            <input
              type="hidden"
              name="${_csrf.parameterName}"
              value="${_csrf.token}"
            />
          </form>
        </div>
    </div>
    <!-- Reservation request Modal-->
  </div>
</template>

<script>
import 'animate.css'
export default {
  data() {
    return {
      Rswitch: 1,
    }
  },
  methods: {

    openReservationRequest() {
      if (this.Rswitch === 1) {
        this.Rswitch = 0
      } else {
        this.Rswitch = 1
      }
    },
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
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>