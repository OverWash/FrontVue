import { createRouter, createWebHistory } from "vue-router";
const routes = [
  // {
  //   path: "/",
  //   name: "index",
  //   component: () => import("@/pages/HomePage.vue"),
  // },
  // {
  //   path: "/signin",
  //   name: "signin",
  //   component: () => import("@/pages/SignIn.vue"),
  // },
  // // {
  // //   path: "/signup",
  // //   name: "signup",
  // //   component: () => import("@/pages/SignUp.vue"),
  // // },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import("@/pages/LogIn.vue"),
  // },
  {
    path: '/admin',
    name: 'defaultLayout',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
        {
          path: "/home",
          name: "index",
          component: () => import("@/pages/HomePage.vue"),
        },
    
    ],
},

{
    path: '/',
    name: 'emptyLayout',
    component: () => import('@/layouts/EmptyLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Login',
        component: ()=> import('@/pages/LoginPage.vue'),
      },
      {
      path: '/register',
      name: 'Register',
      component: ()=> import('@/pages/RegisterPage.vue'),
      },
      {
        path: '/register/member',
        name: 'MemberRegister',
        component: ()=> import('@/pages/register/MemberRegister.vue'),
      },
      {
      path: '/register/crew',
      name: 'CrewRegister',
      component: ()=> import('@/pages/register/CrewRegister.vue'),
      },
    ],
},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
