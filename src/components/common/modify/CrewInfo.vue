<template>
  <div class="container-fluid">

    <!-- Content Row -->
    <div class="row">

      <div class="col-xl-12 mb-4">
        <!-- 최근 예약 내역 -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h4 class="m-0 font-weight-bold text-primary">크루 정보 수정</h4>
          </div>
          <div class="card-body">
            <div class="reservationList">
              <h4 class="middle font-weight-bold">
                이메일  <input type="text" v-model="info.email" class="form-control mt-2"  readonly>
              </h4>
            </div>
            <div class="reservationList">
              <h4 class="middle font-weight-bold">
                비밀번호 <input type="password" v-model="info.password" class="form-control mt-2">
              </h4>
            </div>
            <div class="reservationList">
              <h4 class="middle font-weight-bold">
                이름 <input type="text" v-model="info.crewName"  class="form-control mt-2">
              </h4>
            </div>
            <div class="reservationList">
              <h4 class="middle font-weight-bold">
                연락처 <input type="text" v-model="info.crewContact" class="form-control mt-2" readonly>
              </h4>
            </div>
            <div class="reservationList">
              <h4 class="middle font-weight-bold">
                차종 <input type="text" v-model="info.carType" class="form-control mt-2">
              </h4>
            </div>
            <div class="reservationList">
              <h4 class="middle font-weight-bold">
                차번호 <input type="text" v-model="info.carNumber"  class="form-control mt-2"  id="carNumber">
              </h4>
            </div  >
            <div class="mb-4 d-flex flex-row justify-content-around">
            <button class="btn btn-primary mr-4 flex-fill" @click="clickBtnM">수정</button>
            <button class="btn btn-primary flex-fill" @click="clickBtnR">탈퇴</button><br>
          </div>
            <input type="password" class="form-control" v-model="checkPassword" placeholder="비밀번호를 입력하세요" v-show="check">
            <button class="btn btn-primary ml-4" @click="doCheck(checkPassword)">확인</button>
          </div>
        </div>
        <!-- 최근 예약 내역 -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getCrewInfo, checkPw, modifyInfo, removeInfo } from '@/api';
import { failToast, returnInfoAlert } from '@/sweetAlert'
export default {

  setup() {
    const info = ref({
      email:'',
      password:'',
      crewName:'',
      crewContact:'',
      carType:'',
      carNumber:''
    });
    const checkPassword = ref('');
	const flag = ref('');

    const check = ref(false);

    const clickBtnM=()=>{
      check.value = true;
	  flag.value = 'modify';
    }

	const clickBtnR=()=>{
      check.value = true;
	  flag.value = 'remove';
    }

    getCrewInfo().then((res) => {
      info.value.email = res.data.user.email;
      info.value.crewName = res.data.crewName;
      info.value.crewContact = res.data.crewContact;
      info.value.carType = res.data.carType;
      info.value.carNumber = res.data.carNumber;
    })

    const doCheck = (checkPassword) => {
      
      checkPw(info.value.email, checkPassword).then((res) => {
        if (res.data === 'success') {
          if (flag.value === 'modify') {
			modifyInfo(info.value).then((res) => {
				if (res === 'success') {
					returnInfoAlert('정보를 변경하였습니다.');
				}
			}).catch(() => {
				failToast('정보 변경에 실패하였습니다. 다시 시도해주세요.');
			})
		  } else if (flag.value === 'remove') {
			removeInfo().then((res) => {
				if (res === 'success') {
					returnInfoAlert('회원 탈퇴하였습니다.');
				}
			}).catch(() => {
				failToast('회원 탈퇴에 실패하였습니다. 다시 시도해주세요.');
			})
		  }
        } else {
          failToast('비밀번호가 틀렸습니다.');
        }
      })
      .catch(() => {
        failToast('정보 변경에 실패하였습니다. 다시 시도해주세요.');
      })
    }

    return {
     info,
     clickBtnR,
	 clickBtnM,
     check,
     doCheck,
     checkPassword
    }
  }
}
</script>

<style></style>