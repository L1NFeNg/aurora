import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("@/views/Welcome.vue"),
  },
  {
    path: "/todolist",
    name: "todolist",
    component: () => import("@/views/todolist/Todolist.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => import("@/views/FormTest.vue"),
  },
  {
    path: "/deb-thr",
    name: "deb-thr",
    component: () => import("@/views/UtilsTest.vue"),
  },
  {
    path: "/sticky-header",
    name: "sticky-header",
    component: () => import("@/views/StickyHeaderTest.vue"),
  },
  {
    path: "/center-test",
    name: "center-test",
    component: () => import("@/views/CenterTest.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;