<template>
  <div class='modal-lg modal-backdrop'>
  <h1>ModalView</h1>
  </div>
</template>

<script>
export default {

  props:{
    check:Boolean
  },
  setup(props){
    console.log(props.check)
  }
}


</script>

<style></style>