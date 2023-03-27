import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    // 여러 컴포넌트에서 공유할 공동의 상태
    state: {
        role: "",
        userid: "",
    },
    // state를 변경할 수 있는 로직 정의 (동기적)
    mutations: {
      setRole(state, role) {
        state.role = role;
      }, 
      setUserId(state, id) {
        state.userid = id;
      }
    },
    plugins: [ createPersistedState({
        storage: window.sessionStorage // session에 저장
    }) ],
})

export default store