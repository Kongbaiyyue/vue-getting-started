import { createWebHistory, createRouter } from "vue-router";
import MyHome from "@/views/MyHome.vue";
import MyAbout from "@/views/MyAbout.vue";
import MyUser from "@/views/MyUser.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MyHome,
  },
  {
    path: "/about",
    name: "About",
    component: MyAbout,
  },
  {
    path: "/user/:name",  // <-- notice the colon
    name: "User",
    component: MyUser,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;