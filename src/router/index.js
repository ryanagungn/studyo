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
import Akun from "../components/Akun.vue";
import Tentang from "../components/Tentang.vue";
// Materi
import MateriMatematika from "../components/Materi/MateriMatematika.vue";
import MateriFisika from "../components/Materi/MateriFisika.vue";
import MateriKimia from "../components/Materi/MateriKimia.vue";
import MateriBiologi from "../components/Materi/MateriBiologi.vue";
// Kuis
import KuisMatematika from "../components/Kuis/KuisMatematika.vue";
import KuisFisika from "../components/Kuis/KuisFisika.vue";
import KuisKimia from "../components/Kuis/KuisKimia.vue";
import KuisBiologi from "../components/Kuis/KuisBiologi.vue";



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
  {
    path: "/akun",
    name: "Akun",
    component: Akun,
  },
  {
    path: "/tentang",
    name: "Tentang",
    component: Tentang,
  },
  {
    path: "/materi-kimia",
    name: "MateriKimia",
    component: MateriKimia,
  },
  {
    path: "/materi-fisika",
    name: "MateriFisika",
    component: MateriFisika,
  },
  {
    path: "/materi-biologi",
    name: "MateriBiologi",
    component: MateriBiologi,
  },
  {
    path: "/materi-matematika",
    name: "MateriMatematika",
    component: MateriMatematika,
  },
  {
    path: "/kuis-Biologi",
    name: "KuisBiologi",
    component: KuisBiologi,
  },
  {
    path: "/kuis-Fisika",
    name: "KuisFisika",
    component: KuisFisika,
  },
  {
    path: "/kuis-Matematika",
    name: "KuisMatematika",
    component: KuisMatematika,
  },
  {
    path: "/kuis-Kimia",
    name: "KuisKimia",
    component: KuisKimia,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;