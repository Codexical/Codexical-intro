import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Codexical",
    component: () => import("../views/mainView.vue"),
    meta: {
      title: "Codexical",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/contactUs.vue"),
    meta: {
      title: "ContactUs",
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("../views/notFound.vue"),
    meta: {
      title: "404",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router;
