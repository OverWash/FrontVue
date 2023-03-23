<template>
  <div class="body-container">
    <div class="max-width d-flex row " style="font-size:1rem">
      <div>
        <div class="d-flex justify-content-between">
          <h2 class="title">세탁검수하기</h2>
          <router-link to="/admin/confirm" class="pe-2">
            <div class="btn btn-primary btn-sm ">상세내역</div>
          </router-link>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="item-select " v-for="(data, index) in dummy " :key="index">
              <th scope="row">{{ data.id }}</th>
              <td>{{ data.first }}</td>
              <td>{{ data.last }}</td>
              <td>{{ data.Handle }}</td>
              <td class="d-flex justify-content-end"><button class="btn btn-primary btn-sm"
                  @click="showModal(data.id)">검수하기</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div>
        <div class="d-flex justify-content-between">
          <h2 class="h3">Laundry</h2>
          <router-link to="/admin/laundry" class="pe-2">
            <div class="btn btn-primary btn-sm">상세내역</div>
          </router-link>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="item-select " v-for="(data, index) in dummy " :key="index">
              <th scope="row">{{ data.id }}</th>
              <td>{{ data.first }}</td>
              <td>{{ data.last }}</td>
              <td>{{ data.Handle }}</td>
              <td class="d-flex justify-content-end"><button class="btn btn-primary btn-sm ">세탁완료</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <AdminDetailTable  /> -->
    </div>
    <AdminModal v-show="check" class="modal" />
  </div>
</template>

<script>
import { ref } from 'vue';
import AdminModal from './AdminModal.vue';
export default {
  components: {
    AdminModal
  },
  setup() {
    const check = ref(false);
    const dummy = ref([
      {
        id: 1,
        first: "Confirm1",
        last: "Otto",
        Handle: "@mdo",
      },
      {
        id: 2,
        first: "Confirm2",
        last: "Thornton",
        Handle: "@fat",
      },
      {
        id: 3,
        first: "Confirm3",
        last: "Laundry",
        Handle: "@twitter",
      },
    ]);
    const showModal = (id) => {
      check.value = true;
      console.log(id);

    }
    return {
      dummy,
      showModal,
      check
    }
  }

}
</script>

<style>
.title {
  margin-bottom: 1%;
}

.modal {
  width: 50%;
  height: 70%;

  z-index: 111;
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

.body-container {
  width: 100%;
  height: -webkit-fill-available;
}
</style>