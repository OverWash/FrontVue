// <<<<<<< HEAD
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/admin',
    name: 'defaultLayout',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'index',
        component: () => import('@/pages/HomePage.vue'),
      },

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

      {
        path: '/crew/main',
        name: 'crewMain',
        component: () => import('@/pages/crew/CrewMain.vue'),
      },

      {
        path: '/crew/tobedelivery',
        name: 'toBeDelivery',
        component: () => import('@/pages/crew/ToBeDelivery.vue'),
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
        component: () => import('@/pages/LoginPage.vue'),
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/pages/RegisterPage.vue'),
      },
      {
        path: '/register/member',
        name: 'MemberRegister',
        component: () => import('@/pages/register/MemberRegister.vue'),
      },
      {
        path: '/register/crew',
        name: 'CrewRegister',
        component: () => import('@/pages/register/CrewRegister.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
