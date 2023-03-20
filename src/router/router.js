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
  // {
  //   path: "/signup",
  //   name: "signup",
  //   component: () => import("@/pages/SignUp.vue"),
  // },
  {
    path      : "/crew/main",
    name      : "crewMain",
    component : () => import("@/pages/crew/CrewMain.vue")
  },
  {
    path      : "/crew/tobedelivery",
    name      : "toBeDelivery",
    component : () => import("@/pages/crew/ToBeDelivery.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;