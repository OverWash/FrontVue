<template>
  <div class="container-fluid">

    <!-- Content Row -->
    <div class="row">

      <div class="col-xl-12 mb-4">
        <!-- 최근 예약 내역 -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h4 class="m-0 font-weight-bold text-primary">회원 정보 수정</h4>
          </div>
          <div class="card-body">
            <div class="reservationList">
              <h4 class="middle font-weight-bold">
                이메일 <input type="text" v-model="info.user.email" class="form-control mt-2" readonly>
              </h4>
            </div>
            <div class="reservationList">
              <h4 class="middle font-weight-bold">
                비밀번호 <input type="password" v-model="info.user.password" class="form-control mt-2">
              </h4>
            </div>
            <div class="reservationList">
              <h4 class="middle font-weight-bold">
                주소 <input type="text" v-model="info.memberAddress" class="form-control mt-2">
              </h4>
            </div>
            <div class="reservationList">
              <h4 class="middle font-weight-bold">
                연락처 <input type="text" v-model="info.memberContact" class="form-control mt-2" readonly>
              </h4>
            </div>
            <div class="reservationList">
              <h4 class="middle font-weight-bold">
                닉네임 <input type="text" v-model="info.nickname" class="form-control mt-2">
              </h4>
            </div>
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
import { getMemberInfo, checkPwMember, modifyInfoMember, removeInfoMember } from '@/api';
import { failToast, returnInfoAlert } from '@/sweetAlert';
import router from '@/router/router';
export default {

  setup() {
    const info = ref({
      memberId: '',
      memberContact: '',
      memberAddress: '',
      nickname: '',
      user: {
        email: '',
        password: '',
      }
    });
    const checkPassword = ref('');
    const flag = ref('');

    const check = ref(false);

    const clickBtnM = () => {
      check.value = true;
      flag.value = 'modify';
    }

    const clickBtnR = () => {
      check.value = true;
      flag.value = 'remove';
    }

    getMemberInfo().then((res) => {
      info.value.user.email = res.data.user.email;
      info.value.memberId = res.data.memberId;
      info.value.memberContact = res.data.memberContact;
      info.value.memberAddress = res.data.memberAddress;
      info.value.nickname = res.data.nickname;
    })
    const doCheck = (checkPassword) => {

      checkPwMember(info.value.user.email, checkPassword).then((res) => {
        if (res.data === 'success') {
          if (flag.value === 'modify') {
            modifyInfoMember(info.value).then((res) => {
              if (res.data === 'success') {
                returnInfoAlert('정보를 변경하였습니다.').then(() => {
                  router.push('/member/main');
                });
              }
            }).catch(() => {
              failToast('정보 변경에 실패하였습니다. 다시 시도해주세요.');
            })
          } else if (flag.value === 'remove') {
            removeInfoMember().then((res) => {
              if (res.data === 'success') {
                returnInfoAlert('회원 탈퇴하였습니다.');
                router.push('/login');
              }
            }).catch(() => {
              failToast('회원 탈퇴에 실패하였습니다. 다시 시도해주세요.');
            })
          }
        }
      })
        .catch(() => {
          failToast('비밀번호가 일치하지 않습니다. 다시 시도해주세요.');
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