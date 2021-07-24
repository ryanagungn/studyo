<template>
  <router-view/>
</template>

<script>

import Index from './components/Index.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Home from './components/Home.vue'
import FAQ from './components/FAQ.vue'
import Matematika from "./components/Kelas/Matematika.vue";
import Fisika from "./components/Kelas/Fisika.vue";
import Kimia from "./components/Kelas/Kimia.vue";
import Biologi from "./components/Kelas/Biologi.vue";
import Akun from './components/Akun.vue'
import Tentang from './components/Tentang.vue'
// Materi
import MateriMatematika from "./components/Materi/MateriMatematika.vue";
import MateriFisika from "./components/Materi/MateriFisika.vue";
import MateriKimia from "./components/Materi/MateriKimia.vue";
import MateriBiologi from "./components/Materi/MateriBiologi.vue";
// Kuis
import KuisMatematika from "./components/Kuis/KuisMatematika.vue";
import KuisFisika from "./components/Kuis/KuisFisika.vue";
import KuisKimia from "./components/Kuis/KuisKimia.vue";
import KuisBiologi from "./components/Kuis/KuisBiologi.vue";



export default {
  name: 'App',
  components: {
    Index, Login, Register, Home, FAQ, Matematika, Fisika, Kimia, Biologi, Akun, Tentang, MateriMatematika, MateriFisika, MateriKimia, MateriBiologi, KuisMatematika, KuisFisika, KuisKimia, KuisBiologi,
  },
  created(){
        document.title = "Study.io : Bimbel online terpercaya"
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
