<template>
  <div class="container-fluid">

<!-- Page Heading -->
<h3 class="h3 mb-2 text-gray-800 font-weight-bold">배송 가능 목록</h3>
<p class="mb-4">${username} 님, 배달하기 버튼으로 원하시는 예약의 배송을 진행해 주세요.</p>
<!-- 수거시 collect date update-->
<!-- DataTales Example -->
<div class="card shadow mb-4">
  <div class="card-header py-3">
    <h6 class="m-0 font-weight-bold text-primary">배송 예정 목록</h6>
  </div>
  <div class="card-body">
    <table id="collectTable" class="table table-striped table-bordered" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>세탁 완료 날짜</th>
          <th>예약상태</th>
          <th>배달지 주소</th>
          <th>고객 연락처</th>
          <th>고객 닉네임</th>
          <th>배달하기</th>
        </tr>
      </thead>
      <tbody>
        <div v-for="(wc,i) in wcList" :key="wc.wcId">
          <tr>
            <td>{{i+1}}</td>
            <td><fmt:formatDate pattern="yyyy-MM-dd" value="${wc.wcDate}" /></td>
            <td>{{wc.confirm.reservation.reservationStatus}}</td>
            <td>{{wc.confirm.reservation.member.memberAddress}}</td>
            <td>{{wc.confirm.reservation.member.memberContact}}</td>
            <td>{{wc.confirm.reservation.member.nickname}}</td>
            <td>
              <!-- <form action="/crew/delivery/${wc.confirm.reservation.reservationId}" method="post" onsubmit="delivery()"> -->
			  <form @submit.prevent="delivery(wc)">
                <button class="btn btn-primary">배달하기</button>
                <!-- <input type="hidden" name="wcId"   value="${wc.wcId }">
                <input type="hidden" name="crewId" value="${crewId }">
                <input type="hidden" name="flag"   value="table">
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" /> -->
              </form>
            </td>
          </tr>

        </div>
      </tbody>
    </table>
  </div>
</div>

</div>
</template>
<script>
import axios from 'axios'

export default {
	setup() {

		const delivery = async (wc) => {
			const reservationId = wc.confirm.reservation.reservationId;
			const wcId = wc.wcId;
			// crewId?
			
			alert('배달을 진행합니다.');
			
			try {
				await axios.post(`/crew/delivery/${reservationId}` + wcId)
			} catch(err) {
				console.log(err);
				// 에러메시지 처리
			}
		}


		return {
			delivery,
		}
	}
}
</script>

<style>

</style>