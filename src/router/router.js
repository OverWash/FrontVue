import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/store.js'

const routes = [
  
  {
    // layout 미반영 
    path: '/',
    name: 'emptyLayout',
    component: () => import('@/layouts/EmptyLayout.vue'),
    redirect: '/login',
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/LoginPage.vue'),
        meta: { roles: [] }
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/pages/register/RegisterPage.vue'),
        meta: { roles: [] }
      },
      {
        path: '/register/member',
        name: 'MemberRegister',
        component: () => import('@/pages/register/RegisterMemberPage.vue'),
        meta: { roles: [] }
      },
      {
        path: '/register/crew',
        name: 'CrewRegister',
        component: () => import('@/pages/register/RegisterCrewPage.vue'),
        meta: { roles: [] }
      },
      {
        path: '/access-error',
        name: 'AccessError',
        component: () => import('@/pages/AccessErrorPage.vue'),
        meta: { roles: [] }
      }
    ],
  },

  {
    // layouts 반영
    path: '/',
    name: 'defaultLayout',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      // {
      //   path: '/home',
      //   name: 'index',
      //   component: () => import('@/pages/HomePage.vue'),
      // },
      {
        path: '/info/price',
        name: "PriceInfo",
        component: () => import('@/components/info/PriceInfo.vue'),
        meta: {
          roles: []  
        }
      },
      {
        path: '/info/guide',
        name: "GuideInfo",
        component: () => import('@/components/info/GuideInfo.vue'),
        meta: {
          roles: []  
        }
      },
      {
        path: '/member/main',
        name: 'MemberMain',
        component: () => import('@/pages/member/MainPage.vue'),
        meta: {
          roles: ['ROLE_MEMBER']  
        }
      },
      {
        path: '/member/reservations',
        name: 'Reservations',
        component: () => import('@/components/member/ReservationTable.vue'),
        meta: {
          roles: ['ROLE_MEMBER']  
        }
      },
      {
        path: '/member/payment-requests',
        name: 'PaymentRequests',
        component: () => import('@/components/member/PaymentRequestTable.vue'),
        meta: {
          roles: ['ROLE_MEMBER']  
        }
      },
      {
        path: '/member/payment-requests/:id',
        name: 'PaymentRequestsDetail',
        component: () => import('@/components/member/PaymentRequestDetail.vue'),
        meta: {
          roles: ['ROLE_MEMBER']  
        }
      },
      {
        path: '/member/receipts',
        name: 'Receipts',
        component: () => import('@/components/member/ReceiptTable.vue'),
        meta: {
          roles: ['ROLE_MEMBER']  
        }
      },
      {
        path: '/member/receipts/:id',
        name: 'ReceiptDetail',
        component: () => import('@/components/member/ReceiptDetail.vue'),
        meta: {
          roles: ['ROLE_MEMBER']  
        }
      },
      {
        path: '/member/info',
        name: "MemberInfo",
        component: () => import('@/pages/member/MemberInfoPage.vue'),
        meta: {
          roles: ['ROLE_MEMBER']  
        }
      },
      
      {
        path: '/admin/main',
        name: 'AdminMain',
        component: () => import('@/pages/admin/AdminMain.vue'),
        meta: {
          roles: ['ROLE_ADMIN']  
        }
      },

      {
        path: '/admin/confirm',
        name: 'AdminConfirm',
        component: () => import('@/pages/admin/AdminConfirm.vue'),
        meta: {
          roles: ['ROLE_ADMIN']  
        }
      },

      {
        path: '/admin/confirm/:id',
        name: 'AdminConfirmDetail',
        component: () => import('@/pages/admin/AdminConfirmDetail.vue'),
        meta: {
          roles: ['ROLE_ADMIN']  
        }
      },

      {
        path: '/admin/laundry',
        name: 'AdminLaundry',
        component: () => import('@/pages/admin/AdminLaundry.vue'),
        meta: {
          roles: ['ROLE_ADMIN']  
        }
      },

      {
        path: '/admin/laundry/:id',
        name: 'AdminLaundryDetail',
        component: () => import('@/pages/admin/AdminLaundryDetail'),
        meta: {
          roles: ['ROLE_ADMIN']  
        }
      },

      {
        path: '/crew/main',
        name: 'CrewMain',
        component: () => import('@/pages/crew/CrewMain.vue'),
        meta: {
          roles: ['ROLE_CREW']  
        }
      },
      {
        path: '/crew/info',
        name: "CrewInfo",
        component: () => import('@/pages/crew/CrewInfoPage.vue'),
        meta: {
          roles: ['ROLE_CREW']  
        }
      },
      {
        path: '/crew/tobeollect',
        name: 'ToBeCollect',
        component: () => import('@/pages/crew/ToBeCollect.vue'),
        meta: {
          roles: ['ROLE_CREW']  
        }
      },
      {
        path: '/crew/tobedelivery',
        name: 'ToBeDelivery',
        component: () => import('@/pages/crew/ToBeDelivery.vue'),
        meta: {
          roles: ['ROLE_CREW']  
        }
      },
      {
        path: '/crew/crewdelivering',
        name: 'CrewDelivering',
        component: () => import('@/pages/crew/CrewDelivering.vue'),
        meta: {
          roles: ['ROLE_CREW']  
        }
      },
      {
        path: '/crew/completedelivery',
        name: 'CompleteDelivery',
        component: () => import('@/pages/crew/CompleteDelivery.vue'),
        meta: {
          roles: ['ROLE_CREW']  
        }
      },
    ],
  },

]

// const routes2 = [
//   {
//     path: '/',
//     name: 'index',
//     component: () => import('@/pages/HomePage.vue'),
//   },
//   {
//     path: '/signin',
//     name: 'signin',
//     component: () => import('@/pages/SignIn.vue'),
//   },

// // pages/member
// {
//   path: "/member/main",
//   name: "member_main",
//   component:() => import("@/pages/member/MainPage.vue"),
// },
// {
//   path: "/signup",
//   name: "signup",
//   component: () => import("SignUp.vue"),
// },
// {
//   path: '/admin',
//   name: 'AdminMain',
//   component: () => import('@/pages/admin/AdminMain.vue'),
// },
// {
//   path: '/admin/confirm',
//   name: 'AdminConfirm',
//   component: () => import('@/pages/admin/AdminConfirm.vue'),
// },
// {
//   path: '/admin/confirm/:id',
//   name: 'AdminConfirmDetail',
//   component: () => import('@/pages/admin/AdminConfirmDetail.vue'),
// },
// {
//   path: '/admin/laundry',
//   name: 'AdminLaundry',
//   component: () => import('@/pages/admin/AdminLaundry.vue'),
// },
// {
//   path: '/admin/laundry/:id',
//   name: 'AdminLaundryDetail',
//   component: () => import('@/pages/admin/AdminLaundryDetail'),
// },
// {
//   path      : "/crew/main",
//   name      : "crewMain",
//   component : () => import("@/pages/crew/CrewMain.vue")
// },
// {
//   path      : "/crew/tobedelivery",
//   name      : "toBeDelivery",
//   component : () => import("@/pages/crew/ToBeDelivery.vue")
// }
// ];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  /* 권한은 로그인 시에만 부여되고 모든 서비스는 로그인한 유저에 한헤서만 접근 가능하다. */
  const role = store.state.role; 

  if (to.meta.roles != '' && !to.meta.roles.includes(role)) {   // 이동할 페이지의 권한이 현재 로그인한 유저의 권한을 포함하지 않는 경우
    console.log("router 권한 에러!!!!");
    // 권한이 없는 유저는 403 에러 페이지로 보낸다
    return next({ name: 'AccessError' });
  } else {
    return next()
  }


})

export default router
