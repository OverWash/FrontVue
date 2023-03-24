import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/pages/SignIn.vue'),
  },
  // {
  //   path: "/signup",
  //   name: "signup",
  //   component: () => import("SignUp.vue"),
  // },
  {
    path: '/admin',
    name: 'AdminMain',
    component: () => import('@/pages/admin/AdminMain.vue'),
  },
  {
    path: '/admin/confirm',
    name: 'AdminConfirm',
    component: () => import('@/pages/admin/AdminConfirm.vue'),
  },
  {
    path: '/admin/confirm/:id',
    name: 'AdminConfirmDetail',
    component: () => import('@/pages/admin/AdminConfirmDetail.vue'),
  },
  {
    path: '/admin/laundry',
    name: 'AdminLaundry',
    component: () => import('@/pages/admin/AdminLaundry.vue'),
  },
  {
    path: '/admin/laundry/:id',
    name: 'AdminLaundryDetail',
    component: () => import('@/pages/admin/AdminLaundryDetail'),
  },
]

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
})

export default router

