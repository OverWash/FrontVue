//src/store/index.js

import { createStore } from "vuex";

const store = createStore({
    // 여러 컴포넌트에서 공유할 공동의 상태
    state: {
        role: "",
    },
    // state를 변경할 수 있는 로직 정의
    mutations: {
      setRole(state, role) {
        state.role = role;
      }, 
    },
    getters:{

    },
    actions:{

    }
})

export default store