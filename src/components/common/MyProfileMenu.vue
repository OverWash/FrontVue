<template>
  <div class="dropdown-menu shadow d-block" aria-labelledby="userDropdown">
    <button class="dropdown-item" @click="modifyBtn">
      <i class="fas fa-edit fa-sm fa-fw mr-2 text-gray-400"></i>
      정보수정
    </button>

    <button
      class="dropdown-item"
      data-toggle="modal"
      data-target="#logoutModal"
      @click="logoutBtn"
    >
      <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
      로그아웃
    </button>
  </div>
</template>

<script>
import swal from 'sweetalert2'
import { logout } from '@/api/index.js'
import router from '@/router/router'
import store from '@/store/store'
export default {
  setup() {
    const modifyBtn = () => {
      console.log(store.state.role)
      switch (store.state.role) {
        case 'ROLE_CREW':
          router.push({ name: 'CrewInfo' })
          break
        case 'ROLE_MEMBER':
          router.push({ name: 'MemberInfo' })
          break
      }
    }

    const logoutBtn = () => {
      swal
        .fire({
          title: '정말 로그아웃할까요?',
          //   text: '다시 되돌릴 수 없습니다. 신중하세요.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '로그아웃',
          cancelButtonText: '취소',
          reverseButtons: true, // 버튼 순서 거꾸로
        })
        .then((res) => {
          if (res.isConfirmed) {
            logout().then(() => {
              // state 초기화
              store.commit('setRole', '')
              store.commit('setUserId', '')
              router.push({ name: 'Login' })
            })
          }
        })
    }

    return {
      modifyBtn,
      logoutBtn,
      store,
    }
  },
}
</script>

<style>
</style>