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

    <div>
      <h1 class="mt-10 mb-10 text-4xl font-bold text-gray-800">Halo, John Dhoe!</h1>
    </div>

    <div class="container px-56 mx-auto rounded-2xl">
        <div class="grid grid-cols-3 gap-10 p-10 py-20 my-6 bg-gray-200 rounded-2xl">
            <div class="ml-20 text-left">Nama :</div>
            <div class="col-span-2 px-8 py-3 mr-20 text-left bg-white rounded-2xl">{{identitas.namaDepan}}</div>
            <div class="ml-20 text-left">Username :</div>
            <div class="col-span-2 px-8 py-3 mr-20 text-left bg-white rounded-2xl">{{identitas.username}}</div>
            <div class="ml-20 text-left">Alamat email :</div>
            <div class="col-span-2 px-8 py-3 mr-20 text-left bg-white rounded-2xl">{{identitas.email}}</div>
            <div class="ml-20 text-left">Nomor telepon :</div>
            <div class="col-span-2 px-8 py-3 mr-20 text-left bg-white rounded-2xl">{{identitas.nomorTelepon}}</div>
        </div>
    </div>

    <!--  -->
  <div class="container mx-auto mt-24 bg-fixed bg-blue-800 bg-no-repeat p-28 rounded-3xl">
    <div class="container w-3/6 p-12 mx-auto bg-white shadow-lg rounded-3xl">
      <div>
            <h1 class="mb-4 text-4xl font-bold text-left text-gray-900">Edit akun</h1>
            <div class="grid-cols-2">
              <label class="block float-left mb-5 text-left">
                <span class="text-gray-700 ">Nama depan</span>
                <input v-model="updateAccount.namaDepan" type="text" class="block px-3 py-3 mt-1 bg-gray-100 border-transparent rounded-md mr-9 w-52 focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="">
            </label>
            <label class="block float-left mb-5 mr-20 text-left">
                <span class="text-gray-700">Nama belakang</span>
                <input v-model="updateAccount.namaBelakang" type="text" class="block px-3 py-3 mt-1 bg-gray-100 border-transparent rounded-md w-52 focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="">
            </label>
            </div>
            <label class="block mb-5 text-left">
                <span class="text-gray-700 ">Username</span>
                <input v-model="updateAccount.username" type="text" class="block w-full px-3 py-3 mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="">
            </label>
            <label class="block mb-5 text-left">
                <span class="text-gray-700">Alamat email</span>
                <input v-model="updateAccount.email" type="email" class="block w-full px-3 py-3 mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="john@example.com">
              </label>
              <label class="block mb-5 text-left">
                <span class="text-gray-700">Nomor telepon</span>
                <input v-model="updateAccount.nomorTelepon" type="tel" class="block w-full px-3 py-3 mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="+62">
              </label>
            <label class="block mb-5 text-left">
                <span class="text-left text-gray-700">Kata sandi</span>
                <input v-model="updateAccount.kataSandi" type="password" class="block w-full px-3 py-3 mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="">
            </label>
            
            
            <br>
            <router-link to="/home"  class="px-8 py-5 mt-8 text-lg text-white bg-gray-300 shadow-lg rounded-2xl hover:bg-gray-400">Batal</router-link>
          <button @click="changeData()" class="px-8 py-4 mt-4 ml-8 text-lg text-white bg-blue-800 shadow-lg rounded-2xl hover:bg-blue-900">Edit</button>
      </div>
    </div>
</div>
</template>

<script>
import AuthenticationService from '../services/Auth-Service'
export default {
    data () {
        return {
            updateAccount: {
                namaDepan: '',
                namaBelakang: '',
                email: '',
                nomorTelepon: '',
                username: '',
                kataSandi: ''
            },
            identitas: {
                namaDepan: '',
                email: '',
                nomorTelepon: '',
                username: '',
            }
        }
    },
    methods: {
        async changeData(){
            const data = {
                namaDepan : this.namaDepan,
                namaBelakang : this.namaBelakang,
                email : this.email,
                nomorTelepon : this.nomorTelepon,
                username : this.username,
                kataSandi : this.kataSandi
            }
            console.log(this.updateAccount)
            const response = await AuthenticationService.changeData(this.updateAccount)
            this.$router.push('/home')
        },
        async getIdentitas(){
          const response = await AuthenticationService.getIdentitas()
          console.log(response.data)
          this.identitas.namaDepan = response.data[0].namaDepan
          this.identitas.email = response.data[0].email
          this.identitas.nomorTelepon = response.data[0].nomorTelepon
          this.identitas.username = response.data[0].username
          console.log(this.identitas.namaDepan)
        }
    },
        beforeMount(){
    	    this.getIdentitas()
        }
}
</script>