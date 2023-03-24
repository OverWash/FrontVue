import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("@/pages/SignIn.vue"),
  },


  // pages/member
  {
    path: "/member/main",
    name: "member_main",
    component:() => import("@/pages/member/MainPage.vue"),
  }
  // {
  //   path: "/signup",
  //   name: "signup",
  //   component: () => import("@/pages/SignUp.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
