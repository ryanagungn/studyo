import { createWebHistory, createRouter } from "vue-router";
import Index from "../components/Index.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Home from "../components/Home.vue";
import FAQ from "../components/FAQ.vue";
import Matematika from "../components/Kelas/Matematika.vue";
import Fisika from "../components/Kelas/Fisika.vue";
import Kimia from "../components/Kelas/Kimia.vue";
import Biologi from "../components/Kelas/Biologi.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/faq",
    name: "Faq",
    component: FAQ,
  },
  {
    path: "/fisika",
    name: "Fisika",
    component: Fisika,
  },
  {
    path: "/kimia",
    name: "Kimia",
    component: Kimia,
  },
  {
    path: "/biologi",
    name: "Biologi",
    component: Biologi,
  },
  {
    path: "/matematika",
    name: "Matematika",
    component: Matematika,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;