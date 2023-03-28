<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" v-if="currentPage != 1">
          <a class="page-link" @click="$emit('getList',currentPage - 1)">Previous</a>
        </li>
        <li
          class="page-item"
          v-for="page in pagination.endPage"
          :key="page"
          :class="currentPage == page ? 'active' : ''"
        >
          <a class="page-link" @click="$emit('getList',page)">{{ page }}</a>
        </li>
        <li class="page-item" v-if="currentPage < pagination.endPage">
          <a class="page-link" @click="$emit('getList',currentPage + 1)">Next</a>
        </li>
      </ul>
    </nav>
</template>

<script>


export default {
  emits:['getList'],
  props:{
    currentPage:Number,
    pagination: Object
  },
  setup() {

    return {

    }
  },
}
</script>

<style lang='scss' scoped>

</style>