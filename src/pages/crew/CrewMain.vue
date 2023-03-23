<template>
  <div class="contain-crew">
    <!-- Content Row -->
    <div class="rowee">
      <div class="col-xl-12 ">
        <!-- Project Card Example -->
        <div class="card shadow ">
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
              <div class="progress ">
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
              <div class="progress ">
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
        <div class="card shadow ">
          <div class="card-header py-3">
            <h5 class="m-0 font-weight-bold text-gray-900">수거예정목록</h5>
          </div>
          <div class="card-body border-bottom-success">
            <!-- 반복문 5번 돌리기-->
            <!-- <div v-for="(collect,index) in collectList.slice(0, 5)" :key="collect.reservationId"> -->  
              <div v-for="collect in collectList.slice(0,5)" :key="collect.reservationId">
              <form @submit.prevent="collect(key)">
                <div class="reservationList">
                  <div class="middle font-weight-bold d-flex column justify-content-between ">
                    <div class="h4">
                    {{ collect.member.memberAddress }}
                    </div>
                    <div class="float-right">
                      <button class="btn btn-secondary btn-icon-split" style="line-height: 1;">
                        <span class="icon text-gray-600">
                          <i class="fas fa-arrow-right"></i>
                        </span>
                        <span class="text font-weight-bold">수거하기</span>
                      </button>
                    </div>
                  </div>
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
        <div class="card shadow ">
          <div class="card-header py-3">
            <h5 class="m-0 font-weight-bold text-gray-900">배달예정목록</h5>
          </div>
          <div class="card-body border-bottom-success">
            <!-- 반복문 5번 돌리기-->
            <!-- <div v-for="(collect,index) in collectList.slice(0, 5)" :key="collect.reservationId"> -->  
              <div v-for="wc in wcList.slice(0,5)" :key="wc.wcId">
              <form @submit.prevent="delivery(wc)">
                <div class="reservationList">
                  <h4 class="middle font-weight-bold">
                    {{ wc.confirm.reservation.member.memberAddress }}
                    <span class="float-right">
                      <button class="btn btn-secondary btn-icon-split" style="line-height: 1;">
                        <span class="icon text-gray-600">
                          <i class="fas fa-arrow-right"></i>
                        </span>
                        <span class="text font-weight-bold">배달하기</span>
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
// import axios from 'axios';
import { ref } from 'vue';
export default {

	setup() {
    
    const member = ref({
      "memberAddress" : "서울특별시 송파구 경찰병원역",
      "memberContact": "010-1111-2222",
      "nickname": "닉네임"
    });

    const collectList = ref([
      {
        "reservationId" : 1,
        "member" : member
      },
      {
        "reservationId" : 2,
        "member" : member
      },
      {
        "reservationId" : 3,
        "member" : member
      },
      {
        "reservationId" : 4,
        "member" : member
      },
      {
        "reservationId" : 5,
        "member" : member
      },
      {
        "reservationId" : 6,
        "member" : member
      },
      {
        "reservationId" : 7,
        "member" : member
      },
    ]);

    const reservation = ref({
      "member": member,
      "reservationStatus": '세탁완료',

    });

    const reservationConfirmed = ref({
      "reservation": reservation
    });

    const wcList = ref([
      {
        "wcId": 1,
        "wcDate": "23-03-28",
        "confirm": reservationConfirmed
      },
      {
        "wcId": 2,
        "wcDate": "23-03-27",
        "confirm": reservationConfirmed
      },
      {
        "wcId": 3,
        "wcDate": "23-03-26",
        "confirm": reservationConfirmed
      },
      {
        "wcId": 4,
        "wcDate": "23-03-26",
        "confirm": reservationConfirmed
      },
      {
        "wcId": 5,
        "wcDate": "23-03-26",
        "confirm": reservationConfirmed
      },
      {
        "wcId": 6,
        "wcDate": "23-03-26",
        "confirm": reservationConfirmed
      },
      {
        "wcId": 7,
        "wcDate": "23-03-26",
        "confirm": reservationConfirmed
      },
    ]);





		// const collect = async (reservationId) => { //member(로그인한 계정).crewId, security header? ,,, flag?
		// 	const flag = 'main';
		// 	alert('수거를 진행합니다.');

		// 	try {
		// 		await axios.post(`crew//collect/${reservationId}`, {
    //       "flag" : flag
    //     })
    //     // .then((data) => {
          
    //     // });
		// 	}catch(err) {
		// 		console.log(err);
    //             //에러 메시지 처리
		// 	}
		// }

		// const delivery = async (wc) => { //member(로그인한 계정).crewId, security header?
			
		// 	const reservationId = wc.confirm.reservation.reservationId;
		// 	const wcId = wc.wcId;
		// 	const flag = 'main';
		// 	alert('배달을 진행합니다.');

		// 	try {
		// 		await axios.post(`/crew/delivery/${reservationId}`,{
    //       "id" : wcId,
    //       "flag" : flag,
    //     })
    //     // .then((data)=>{

    //     // });
		// 	}catch(err) {
		// 		console.log(err);
		// 		// 에러 메시지 처리
		// 	}
		// }


		return {
			// collect,
			// delivery,
      collectList,
      member,
      reservation,
      reservationConfirmed,
      wcList
		}
	}
}
</script>

<style>
.contain-crew{
  width: 100%;
  height: 94%;
  padding-inline: 20px;
  }
.rowee{
  height: 70%;
}
</style>