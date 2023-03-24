<template>
  <div class="col-xl-6" 
    v-on:click="openReservationRequest"
    id="reservationPicture"
    :style="reservationPictureSwitch"
  >
    <div class="card shadow mb-4">
      <div class="card-body">
        <img
          class="img-fluid px-3 px-sm-4 mt-3 mb-4"
          src="@/assets/logo.png"
          style="max-width: 61%"
        />
        <h4 class="m-0 font-weight-bold text-dark">+예약하기</h4>
      </div>
    </div>
  </div>

  <!-- Reservation request Modal-->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <form
          id="requestForm"
          class="user"
          action="/reservation/request"
          method="POST"
          onsubmit="requestSubmitBtn()"
        >
          <div class="col-sm-12 mb-4">
            <!-- 수거 날짜 선택 -->
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  수거일을 선택하세요
                </h6>
              </div>
              <div class="card-body">
                <input
                  type="date"
                  id="collectDate"
                  name="collectDate"
                  value="2023-01-01"
                  min="2018-01-01"
                  max="2023-12-31"
                />
              </div>
            </div>
            <!-- End 수거 날짜 선택 -->

            <!-- 요청사항 입력 -->
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  요청사항을 입력해 주세요
                </h6>
              </div>
              <div class="card-body">
                <div class="input-group">
                  <input
                    type="text"
                    id="request"
                    name="request"
                    class="form-control bg-light border-0 large"
                    placeholder="요청사항을 입력하세요"
                  />
                </div>
              </div>
            </div>

            <!-- a 태그 누르면 form 리턴해서 전송  -->
            <div class="my-2"></div>
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
          </div>
          <input
            type="hidden"
            name="${_csrf.parameterName}"
            value="${_csrf.token}"
          />
        </form>
      </div>
    </div>
  </div>
  <!-- Reservation request Modal-->
</template>

<script>
import swal from "sweetalert";
export default {
  data() {
    return {};
  },
  methods: {
    modalclick() {
      swal("예약을 신청합니다", "요청사항을 입력해 주세요:", {
        content: "input",
      }).then((value) => {
        swal(`You typed: ${value}`);
      });
    },
    openReservationRequest(){

    }
  },
};
</script>

<style>
</style>