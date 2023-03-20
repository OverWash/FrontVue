<template>
  <div class="container-fluid">
    <!-- Content Row -->
    <div class="row">
      <div class="col-xl-12 mb-4">
        <!-- Project Card Example -->
        <div class="card shadow mb-4">
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <!-- <h5 class="m-0 font-weight-bold text-gray-900">${member.crewName }님, 배달 현황</h5> -->
            <h5 class="m-0 font-weight-bold text-gray-900">윤성훈 크루님, 배달 현황</h5>
            <!-- <div class="dropdown no-arrow"> 여기 주석 부분은 필요 없을듯 나중에 지움
              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                <div class="dropdown-header">Dropdown Header:</div>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div> -->
          </div>
          <div class="card-body">
            <div class="reservationList">
              <!-- <h6>배달 중 (${deliveringCnt }개)</h6> -->
              <h6>배달 중 (50개)</h6>
              <div class="progress mb-4">
                <!-- <div class="progress-bar bg-danger" role="progressbar" style="width: ${deliveringCnt * 5}%"
                  aria-valuenow="${deliveringCnt * 5}" aria-valuemin="0" aria-valuemax="100"></div>
              </div> -->
                <div class="progress-bar bg-danger" role="progressbar" style="width: 50%" aria-valuenow="50"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="reservationList">
              <!-- <h6>배달 완료 (${doneDeliverCnt }개)</h6> -->
              <h6>배달 완료 (40개)</h6>
              <div class="progress mb-4">
                <!-- <div class="progress-bar bg-warning" role="progressbar" style="width: ${doneDeliverCnt * 5}%"
                  aria-valuenow="${doneDeliverCnt * 5}" aria-valuemin="0" aria-valuemax="100"></div>
              </div> -->
                <div class="progress-bar bg-warning" role="progressbar" style="width: 40%" aria-valuenow="40"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 수거예정목록 -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h5 class="m-0 font-weight-bold text-gray-900">수거예정목록</h5>
          </div>
          <div class="card-body border-bottom-success">
            <!-- 반복문 5번 돌리기-->
            <!-- <div v-for="(collect,index) in collectList.slice(0, 5)" :key="collect.reservationId"> -->  
              <div v-for="collect in collectList" :key="collect.reservationId">
              <form @submit.prevent="collect()">
                <div class="reservationList">
                  <h4 class="middle font-weight-bold">
                    {{ collect.member.memberAddress }}
                    <span class="float-right">
                      <button class="btn btn-secondary btn-icon-split" style="line-height: 1;">
                        <span class="icon text-gray-600">
                          <i class="fas fa-arrow-right"></i>
                        </span>
                        <span class="text font-weight-bold">수거하기</span>
                      </button>
                    </span>
                  </h4>
                </div>
                <!--spring security-->
                <!-- <input type="hidden" :value="crewId" name="crewId">
                <input type="hidden" name="flag" value="main">
                <input type="hidden" :name="_csrf.parameterName" :value="_csrf.token" /> -->
              </form>
            </div>
          </div>
        </div>

        <!-- 배달예정목록 -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h5 class="m-0 font-weight-bold text-gray-900">배달예정목록</h5>
          </div>
          <div class="card-body border-bottom-success">
            <!-- 반복문 5번 돌리기-->
            <!-- <div v-for="(collect,index) in collectList.slice(0, 5)" :key="collect.reservationId"> -->  
              <div v-for="wc in wcList" :key="wc.wcId">
              <form @submit.prevent="delivery()">
                <div class="reservationList">
                  <h4 class="middle font-weight-bold">
                    {{ wc.confirm.reservation.member.memberAddress }}
                    <span class="float-right">
                      <button class="btn btn-secondary btn-icon-split" style="line-height: 1;">
                        <span class="icon text-gray-600">
                          <i class="fas fa-arrow-right"></i>
                        </span>
                        <span class="text font-weight-bold">수거하기</span>
                      </button>
                    </span>
                  </h4>
                </div>
                <!--spring security-->
                <!-- <input type="hidden" :value="crewId" name="crewId">
                <input type="hidden" name="flag" value="main">
                <input type="hidden" :name="_csrf.parameterName" :value="_csrf.token" /> -->
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- 수거예정목록 -->
    </div>
    <!-- End Content Row -->
  </div>
</template>

<script>
export default {

}
</script>

<style></style>