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
    path: "/deb&thr",
    name: "deb&thr",
    component: () => import("@/views/UtilsTest.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;