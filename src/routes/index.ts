import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../pages/home/index.vue") },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
