<template>
  <div
    class="modal fade"
    id="logoutModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">로그아웃</h5>
          <button
            class="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
            v-b-modal.modal-1
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">정말 로그아웃할까요?</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">
            취소
          </button>
          <form action="/logout" method="post">
            <input type="submit" class="btn btn-primary" value="로그아웃" />
            <input
              type="hidden"
              name="${_csrf.parameterName}"
              value="${_csrf.token}"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>