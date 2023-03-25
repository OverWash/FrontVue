<template>
  <div class="card shadow" style="position: relative; z-index: 2">
    <div class="card-body">
      <div class="MemberReservationList">
        <div class="container-fluid">
          <!-- Page Heading -->
          <h3 class="h3 mb-2 text-gray-800 font-weight-bold">예약 현황</h3>
          <p class="mb-4">님의 예약 목록입니다.</p>
          <p class="mb-4">
            예약 상태로 진행 상황을 실시간으로 확인하실 수 있습니다.
          </p>
          <hr />
          <h6 class="mb-4 text-xs font-weight-bold">
            *주문접수 상태의 예약건은 요청사항 수정과 삭제가 가능합니다.
          </h6>

          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">예약 목록</h6>
            </div>
            <div class="card-body">
              <table
                id="reservationTable"
                class="table table-striped table-bordered"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>수거일</th>
                    <th>예약일</th>
                    <th>예약 상태</th>
                    <th>요청 사항</th>
                  </tr>
                </thead>
                <tbody>
                  <!--v-for-->
                  <tr
                    v-for="reservation in reservationList"
                    :key="reservation.reservationId"
                  >
                    <td id="getResId${status.index}">
                      {{reservation.reservationId}}
                    </td>
                    <td>
                      {{reservation.collectDate}}
                    </td>
                    <td>
                      {{reservation.reservationDate}}
                    </td>
                    <td>
                      {{reservation.reservationStatus}}
                    </td>
                    <td class="checkInput">
                      <button
                        class="btn btn-dark detailBtn"
                        id="detailBtn${status.index}"
                        onclick="getDetail(${status.index})"
                        value="${reservationList.request}"
                      >
                        상세보기
                      </button>
                    </td>
                  </tr><!--v-for-->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props :{
    reservationList:{
      type:Array,
    },
  },
}
</script>

<style>
</style>