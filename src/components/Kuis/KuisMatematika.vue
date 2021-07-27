<template>
    <!-- navigation bar -->
    <div class="container sticky top-0 z-50 px-5 py-4 mx-auto bg-white">
      <nav class="flex items-center justify-between">
        <div class="w-40">
          <router-link to="/"><img src="/assets/study.png" alt="logo"></router-link>
        </div>
        <div>
          <router-link to="/home" class="text-lg text-gray-900 ml-9 hover:text-blue-800"> Kelas</router-link>
          <router-link to="/akun" class="text-lg text-gray-900 ml-9 hover:text-blue-800"> Akun</router-link>
          <router-link to="/" class="py-3 text-lg text-white bg-blue-800 px-7 ml-9 rounded-2xl w-9 hover:bg-blue-900">Logout</router-link>
        </div>
      </nav>
    </div>
    
    <h1 class="mt-12 text-3xl font-bold">Soal Matematika</h1>

    <div v-for="(so, i) in this.soal" :key="i">
        <div class="container px-5 mx-auto mt-8 rounded-3xl">
          <div class="container px-32 text-left">
            <div class="flex flex-row px-10 py-4 bg-gray-200 rounded-3xl">
              <p class="mt-4 text-2xl font-semibold">{{i+1}}</p>
              
              <p class="mt-4 ml-4 leading-loose">{{so.soal}}</p>
            </div>
          </div>
      </div>

      <div class="mx-auto mt-4 text-left px-60 sm:px-72">
        <input class="mt-4 mr-2" type="radio" name="no1" id="a" value="a" v-model="picked" v-bind:attr="i">
        <label for="one">{{so.opsiA}}</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no1" id="b" value="b" v-model="picked" v-bind:attr="i">
        <label for="two">{{so.opsiB}}</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no1" id="c" value="c" v-model="picked" v-bind:attr="i">
        <label for="three">{{so.opsiC}}</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no1" id="d" value="d" v-model="picked" v-bind:attr="i">
        <label for="four">{{so.opsiD}}</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no1" id="e" value="e" v-model="picked" v-bind:attr="i">
        <label for="five">{{so.opsiE}}</label>
      </div>
    </div>

    <!-- footer -->
  <div class="container px-5 mx-auto mt-24 mb-6">
      <footer class="flex items-center justify-between">
          <div>
          <p class="text-left">Made with Love</p>
           <p>© Study.io 2021</p>
          </div>
          <div class="flex">
              <a href="https://fb.com/frozen.rotom" target="blank"><img class="w-10 ml-9" src="/assets/fb.svg" alt="facebook"></a>
              <a href=""><img class="w-10 ml-9" src="/assets/ig.svg" alt="instagram"></a>
              <a href=""><img class="w-10 ml-9" src="/assets/twitter.svg" alt="twitter"></a>
              <a href=""><img class="w-10 ml-9" src="/assets/youtube.svg" alt="youtube"></a>
          </div>
      </footer>
  </div>

  <input class="mt-4 mr-2" type="radio" name="no2" id="a" value="a" v-model="jawaban2">
  <label for="one">test</label>
  <input class="mt-4 mr-2" type="radio" name="no2" id="b" value="b" v-model="jawaban2">
  <label for="one">test</label>
  <input class="mt-4 mr-2" type="radio" name="no2" id="c" value="c" v-model="jawaban2">
  <label for="one">test</label>
    
</template>

<script>
import AuthenticationService from '../../services/Auth-Service'
export default {
    data () {
        return {
            soal : null,
            opsiA: '',
            opsiB: '',
            opsiC: '',
            opsiD: '',
            opsiE: '',
            jawaban: '',
            mata_pelajaran: 'matematika',
            i: 0
        }
    },
    methods: {
        async getSoal(){
            const response = await AuthenticationService.soal({
              mata_pelajaran : this.mata_pelajaran
            })
            //console.log(response)
            this.soal = response.data
            console.log(this.soal)
        },
        async kirim() {
            //nunggu respon seko server
            const response = await AuthenticationService.login({
            })
            this.$router.push('/home')
        },
        logout(){
            localStorage.removeItem('token')
            this.$router.push('/login')
        },
        video(){
            this.$router.push('/video')
        },
        account(){
            this.$router.push('/akun')
        }
    },
    beforeMount(){
    	this.getSoal()
    }

}
</script>