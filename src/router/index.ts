/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Index from "../pages/Index.vue";
import Contract from "../pages/Contract.vue";
import Main from "../layouts/Main.vue";

// Composables
// import { createRouter, createWebHistory } from 'vue-router/auto'
// import { setupLayouts } from 'virtual:generated-layouts'
//
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   extendRoutes: setupLayouts,
// })

const routes: RouteRecordRaw[] = [
  {
      path: '',
      component: Main,
      children: [
          {
              path: '',
              component: Index,
              name: 'Index'
          },
          {
              path: '/contract/:id',
              props: true,
              component: Contract,
              name: 'Contract'
          }
      ]
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
