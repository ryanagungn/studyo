<template>
  <!-- navigation bar -->
    <div class="container sticky top-0 z-50 px-5 py-4 mx-auto bg-white">
      <nav class="flex items-center justify-between">
        <div class="w-40">
          <router-link to="/"><img src="../assets/study.png" alt="logo"></router-link>
        </div>
        <div>
          <router-link to="/login" class="text-lg text-gray-900 ml-9 hover:text-blue-800"> Kelas</router-link>
          <router-link to="/faq" class="text-lg text-gray-900 ml-9 hover:text-blue-800"> FAQ</router-link>
          <router-link to="/tentang" class="text-lg text-gray-900 ml-9 hover:text-blue-800"> Tentang</router-link>
          <router-link to="/register" class="py-3 text-lg text-white bg-blue-800 px-7 ml-9 rounded-2xl w-9 hover:bg-blue-900">Daftar</router-link>
        </div>
      </nav>
    </div>

    <!-- Register -->
  <div class="container mx-auto mt-24 bg-fixed bg-no-repeat p-28 rounded-3xl" :style="{'background-image':'url(https://i.ibb.co/ZctmbnV/bg.png)'}">
    <div class="container w-3/6 p-12 mx-auto bg-white shadow-lg rounded-3xl">
      <div>
            <h1 class="mb-4 text-4xl font-bold text-left text-gray-900">Register</h1>
            <div class="grid-cols-2">
              <label class="block float-left mb-5 text-left">
                <span class="text-gray-700 ">Nama depan</span>
                <input v-model="createAccount.namaDepan" type="text" class="block px-3 py-3 mt-1 bg-gray-100 border-transparent rounded-md mr-9 w-52 focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="">
            </label>
            <label class="block float-left mb-5 mr-20 text-left">
                <span class="text-gray-700">Nama belakang</span>
                <input v-model="createAccount.namaBelakang" type="text" class="block px-3 py-3 mt-1 bg-gray-100 border-transparent rounded-md w-52 focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="">
            </label>
            </div>
            <label class="block mb-5 text-left">
                <span class="text-gray-700 ">Username</span>
                <input v-model="createAccount.username" type="text" class="block w-full px-3 py-3 mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="">
            </label>
            <label class="block mb-5 text-left">
                <span class="text-gray-700">Alamat email</span>
                <input v-model="createAccount.email" type="email" class="block w-full px-3 py-3 mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="john@example.com">
              </label>
              <label class="block mb-5 text-left">
                <span class="text-gray-700">Nomor telepon</span>
                <input v-model="createAccount.nomorTelepon" type="tel" class="block w-full px-3 py-3 mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="+62">
              </label>
            <label class="block mb-5 text-left">
                <span class="text-left text-gray-700">Kata sandi</span>
                <input v-model="createAccount.kataSandi" type="password" class="block w-full px-3 py-3 mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="">
            </label>
            
            
            <br>
          <button @click="create_Account" class="px-8 py-4 mt-8 text-lg text-white bg-blue-800 shadow-lg rounded-2xl hover:bg-blue-900">Register</button>
      </div>
    </div>
    <div class="mx-auto mt-10 text-white">
      Sudah punya akun? <router-link to="/login" class="ml-1 text-yellow-200 hover:text-yellow-400">klik disini</router-link>
    </div>
  </div>

  <!-- footer -->
  <div class="container px-5 mx-auto mt-24 mb-6">
      <footer class="flex items-center justify-between">
          <div>
          <p class="text-left">test</p>
           <p>© Study.io 2021</p>
          </div>
          <div class="flex">
              <a href="https://fb.com/frozen.rotom" target="blank"><img class="w-10 ml-9" src="../assets/fb.svg" alt="facebook"></a>
              <a href=""><img class="w-10 ml-9" src="../assets/ig.svg" alt="instagram"></a>
              <a href=""><img class="w-10 ml-9" src="../assets/twitter.svg" alt="twitter"></a>
              <a href=""><img class="w-10 ml-9" src="../assets/youtube.svg" alt=""></a>
          </div>
      </footer>
  </div>
</template>

<script>
import AuthenticationService from '../services/Auth-Service'
export default {
    data () {
        return {
            akun: null,
            title: 'Akun',
            createAccount: {
                namaDepan: '',
                namaBelakang: '',
                email: '',
                nomorTelepon: '',
                username: '',
                kataSandi: ''
            },
        }
    },
    methods: {
        async create_Account(){
            //axios.post(this.url_server, this.createAccount)
            // .then(() =>{
            //     this.getBarang()
            // })
            const response = await AuthenticationService.register({
                namaDepan: this.createAccount.namaDepan,
                namaBelakang: this.createAccount.namaBelakang,
                email: this.createAccount.email,
                nomorTelepon: this.createAccount.nomorTelepon,
                username: this.createAccount.username,
                kataSandi: this.createAccount.kataSandi
            })
            this.$router.push('/login')
            .catch(err => {
                alert(err.toString())
                console.log(err)
            })
        }
    }
}
</script>
