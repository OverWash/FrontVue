<template>
  <div class="m-4">
    <div>메뉴</div>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">

      <li class="nav-link mt-3 side-item-btn" v-for="( dum, index ) in dummy" :key='index'
        :class="checkBtn === dum.id ? 'active' : null" @click="onClick(dum.id)"> {{ dum.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>