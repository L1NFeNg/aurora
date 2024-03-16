import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("../views/welcome.vue"),
  },
  {
    path: "/todolist",
    name: "todolist",
    component: () => import("../views/todolist.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;