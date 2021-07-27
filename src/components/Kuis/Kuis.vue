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
    
    <h1 class="mt-12 text-3xl font-bold">Kuis</h1>

      <!-- nomor 1 -->
      <div class="container px-5 mx-auto mt-8 rounded-3xl">
          <div class="container px-32 text-left">
            <div class="flex flex-row px-10 py-4 bg-gray-200 rounded-3xl">
              <p class="mt-4 text-2xl font-semibold">1</p>   
              <p class="mt-4 ml-4 leading-loose">Pengamatan terhadap suatu tumbuhan menunjukkan ciri-ciri berakar tunggang, tidak berbunga sejati, berbiji, berdaun, batang bercabang, bakal biji terdapat pada strobilus betina dan serbuk sari terdapat pada strobilus jantan. Tumbuhan tersebut dapat digolongkan ke dalam kelompok....</p>
            </div>
          </div>
      </div>

      <div class="mx-auto mt-4 text-left px-60 sm:px-72">
        <input class="mt-4 mr-2" type="radio" name="no1" id="a" value="a" v-model="jawaban">
        <label for="one">A. Thallophyta</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no1" id="b" value="b" v-model="jawaban">
        <label for="two">B. Mycota</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no1" id="c" value="c" v-model="jawaban">
        <label for="three">C. Algae</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no1" id="d" value="d" v-model="jawaban">
        <label for="four">D. Gymnospermae</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no1" id="e" value="e" v-model="jawaban">
        <label for="five">E. Angiospermae</label>
      </div>
    
    <!-- nomor 2 -->
      <div class="container px-5 mx-auto mt-8 rounded-3xl">
          <div class="container px-32 text-left">
            <div class="flex flex-row px-10 py-4 bg-gray-200 rounded-3xl">
              <p class="mt-4 text-2xl font-semibold">2</p>   
              <p class="mt-4 ml-4 leading-loose">Sel api adalah alat ekskresi pada hewan...</p>
            </div>
          </div>
      </div>

      <div class="mx-auto mt-4 text-left px-60 sm:px-72">
        <input class="mt-4 mr-2" type="radio" name="no2" id="a" value="a" v-model="jawaban2">
        <label for="one">A. Lumbricus</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="b" value="b" v-model="jawaban2">
        <label for="two">B. Wuchereria bancrofti</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="c" value="c" v-model="jawaban2">
        <label for="three">C. Loligo</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="d" value="d" v-model="jawaban2">
        <label for="four">D. Haemadipsa</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="e" value="e" v-model="jawaban2">
        <label for="five">E. Planaria</label>
      </div>

    <!-- nomor 3 -->
      <div class="container px-5 mx-auto mt-8 rounded-3xl">
          <div class="container px-32 text-left">
            <div class="flex flex-row px-10 py-4 bg-gray-200 rounded-3xl">
              <p class="mt-4 text-2xl font-semibold">3</p>   
              <p class="mt-4 ml-4 leading-loose">Unsur A terletak pada golongan VIA periode 3 dan memiliki massa atom relatif sebesar 32. Jumlah proton dan neutron unsur A adalah …. </p>
            </div>
          </div>
      </div>

      <div class="mx-auto mt-4 text-left px-60 sm:px-72">
        <input class="mt-4 mr-2" type="radio" name="no2" id="a" value="a" v-model="jawaban3">
        <label for="one">A. 16 dan 16</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="b" value="b" v-model="jawaban3">
        <label for="two">B. 16 dan 17</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="c" value="c" v-model="jawaban3">
        <label for="three">C. 17 dan 15</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="d" value="d" v-model="jawaban3">
        <label for="four">D. 18 dan 13</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="e" value="e" v-model="jawaban3">
        <label for="five">E. 15 dan 17</label>
      </div>

      <!-- nomor 4 -->
      <div class="container px-5 mx-auto mt-8 rounded-3xl">
          <div class="container px-32 text-left">
            <div class="flex flex-row px-10 py-4 bg-gray-200 rounded-3xl">
              <p class="mt-4 text-2xl font-semibold">4</p>   
              <p class="mt-4 ml-4 leading-loose">Seorang siswa mengencerkan sebanyak 5 mL H2SO4 pekat hingga volume nya mencapai 500 mL. Kemudian 25 mL larutan hasil pengenceran tersebut tepat dinetralkan dengan 50 mL NaOH 0,15 M. Konsentrasi asam pekat tersebut adalah ….</p>
            </div>
          </div>
      </div>

      <div class="mx-auto mt-4 text-left px-60 sm:px-72">
        <input class="mt-4 mr-2" type="radio" name="no2" id="a" value="a" v-model="jawaban3">
        <label for="one">A. 7,5 M</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="b" value="b" v-model="jawaban3">
        <label for="two">B. 12,5 M</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="c" value="c" v-model="jawaban3">
        <label for="three">C. 15 M</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="d" value="d" v-model="jawaban3">
        <label for="four">D. 17 M</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="e" value="e" v-model="jawaban3">
        <label for="five">E. 18 M</label>
      </div>

      <!-- nomor 5 -->
      <div class="container px-5 mx-auto mt-8 rounded-3xl">
          <div class="container px-32 text-left">
            <div class="flex flex-row px-10 py-4 bg-gray-200 rounded-3xl">
              <p class="mt-4 text-2xl font-semibold">5</p>   
              <p class="mt-4 ml-4 leading-loose">Seorang siswa memiliki beberapa jenis garam yang berbeda. Garam - garam tersebut dilarutkan dalam air kemudian diuji menggunakan indikator kertas lakmus. Garam yang dapat mengubah warna lakmus merah menjadi biru adalah ….</p>
            </div>
          </div>
      </div>

      <div class="mx-auto mt-4 text-left px-60 sm:px-72">
        <input class="mt-4 mr-2" type="radio" name="no2" id="a" value="a" v-model="jawaban4">
        <label for="one">A. amonium klorida</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="b" value="b" v-model="jawaban4">
        <label for="two">B. barium nitrat</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="c" value="c" v-model="jawaban4">
        <label for="three">C. natrium asetat</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="d" value="d" v-model="jawaban4">
        <label for="four">D. kalium sulfat</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="e" value="e" v-model="jawaban4">
        <label for="five">E. kalium bromida</label>
      </div>

      <!-- nomor 6 -->
      <div class="container px-5 mx-auto mt-8 rounded-3xl">
          <div class="container px-32 text-left">
            <div class="flex flex-row px-10 py-4 bg-gray-200 rounded-3xl">
              <p class="mt-4 text-2xl font-semibold">6</p>   
              <p class="mt-4 ml-4 leading-loose">Sebuah rangkaian listrik dengan sumber tegangan V memiliki kuat arus 6 A. Jika hambatan dibuat tetap, sedangkan sumber tegangan dinaikkan menjadi 2V, maka kuat arus akan menjadi…</p>
            </div>
          </div>
      </div>

      <div class="mx-auto mt-4 text-left px-60 sm:px-72">
        <input class="mt-4 mr-2" type="radio" name="no2" id="a" value="a" v-model="jawaban5">
        <label for="one">A. 12A</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="b" value="b" v-model="jawaban5">
        <label for="two">B. 3 A</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="c" value="c" v-model="jawaban5">
        <label for="three">C. 1,5 A</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="d" value="d" v-model="jawaban5">
        <label for="four">D. 24 A</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="e" value="e" v-model="jawaban5">
        <label for="five">E. Tidak berubah</label>
      </div>

      <!-- nomor 7 -->
      <div class="container px-5 mx-auto mt-8 rounded-3xl">
          <div class="container px-32 text-left">
            <div class="flex flex-row px-10 py-4 bg-gray-200 rounded-3xl">
              <p class="mt-4 text-2xl font-semibold">7</p>   
              <p class="mt-4 ml-4 leading-loose">Terdapat dua buah muatan dengan muatan masing-masing +3 µC dan -3 µC. Kedua muatan terpisah sejauh 3 cm. Besar dan jenis gaya Coulomb antara kedua muatan tersebut adalah…</p>
            </div>
          </div>
      </div>

      <div class="mx-auto mt-4 text-left px-60 sm:px-72">
        <input class="mt-4 mr-2" type="radio" name="no2" id="a" value="a" v-model="jawaban6">
        <label for="one">A. 90 N dan tolak menolak</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="b" value="b" v-model="jawaban6">
        <label for="two">B. 90 N dan tarik menarik</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="c" value="c" v-model="jawaban6">
        <label for="three">C. 2.700 N dan tolak menolak</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="d" value="d" v-model="jawaban6">
        <label for="four">D. 2.700 N dan tarik menarik</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="e" value="e" v-model="jawaban2">
        <label for="five">E. Tidak ada jawaban yang benar</label>
      </div>

      <!-- nomor 8 -->
      <div class="container px-5 mx-auto mt-8 rounded-3xl">
          <div class="container px-32 text-left">
            <div class="flex flex-row px-10 py-4 bg-gray-200 rounded-3xl">
              <p class="mt-4 text-2xl font-semibold">8</p>   
              <p class="mt-4 ml-4 leading-loose">Dua buah uang logam dilempar secara bersama-sama, banyaknya ruang sampel adalah...</p>
            </div>
          </div>
      </div>

      <div class="mx-auto mt-4 text-left px-60 sm:px-72">
        <input class="mt-4 mr-2" type="radio" name="no2" id="a" value="a" v-model="jawaban7">
        <label for="one">A. 2</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="b" value="b" v-model="jawaban7">
        <label for="two">B. 4</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="c" value="c" v-model="jawaban7">
        <label for="three">C. 6</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="d" value="d" v-model="jawaban7">
        <label for="four">D. 8</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="e" value="e" v-model="jawaban7">
        <label for="five">E. 10</label>
      </div>

      <!-- nomor 9 -->
      <div class="container px-5 mx-auto mt-8 rounded-3xl">
          <div class="container px-32 text-left">
            <div class="flex flex-row px-10 py-4 bg-gray-200 rounded-3xl">
              <p class="mt-4 text-2xl font-semibold">9</p>   
              <p class="mt-4 ml-4 leading-loose">Tiga keping uang logam dilemparkan secara bersamaan. Banyaknya ruang sampel adalah...</p>
            </div>
          </div>
      </div>

      <div class="mx-auto mt-4 text-left px-60 sm:px-72">
        <input class="mt-4 mr-2" type="radio" name="no2" id="a" value="a" v-model="jawaban8">
        <label for="one">A. 3</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="b" value="b" v-model="jawaban8">
        <label for="two">B. 6</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="c" value="c" v-model="jawaban8">
        <label for="three">C. 8</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="d" value="d" v-model="jawaban8">
        <label for="four">D. 16</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="e" value="e" v-model="jawaban8">
        <label for="five">E. 32</label>
      </div>

      <!-- nomor 10 -->
      <div class="container px-5 mx-auto mt-8 rounded-3xl">
          <div class="container px-32 text-left">
            <div class="flex flex-row px-10 py-4 bg-gray-200 rounded-3xl">
              <p class="mt-4 text-2xl font-semibold">10</p>   
              <p class="mt-4 ml-4 leading-loose">Riki memiliki sejumlah balon berwarna merah, hijau, dan putih. Peluang balon hitam yang dimiliki Riki meletus adalah...</p>
            </div>
          </div>
      </div>

      <div class="mx-auto mt-4 text-left px-60 sm:px-72">
        <input class="mt-4 mr-2" type="radio" name="no2" id="a" value="a" v-model="jawaban9">
        <label for="one">A. 0</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="b" value="b" v-model="jawaban9">
        <label for="two">B. 0,25</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="c" value="c" v-model="jawaban9">
        <label for="three">C. 0,5</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="d" value="d" v-model="jawaban9">
        <label for="four">D. 0,75</label>
        <br>
        <input class="mt-4 mr-2" type="radio" name="no2" id="e" value="e" v-model="jawaban9">
        <label for="five">E. 1,0</label>
      </div>

    <button @click="kirim" class="px-8 py-3 mt-12 text-lg text-white bg-blue-800 rounded-2xl hover:bg-blue-900">Submit</button>

    <div class="container py-6 mx-auto mt-12 bg-blue-800 rounded-2xl">
          <div class="container grid items-center grid-cols-2 px-32">
              <div class="text-left text-white ">
                Nilai anda :
              </div>
              <div class="text-2xl font-bold text-right text-white ">80</div>
          </div>
    </div>

    <!-- footer -->
  <div class="container px-5 mx-auto mt-12 mb-6">
      <footer class="flex items-center justify-between">
          <div>
          <p class="text-left">Made with Love</p>
           <p>© Study.io 2021</p>
          </div>
          <div class="flex">
              <a href="https://fb.com/frozen.rotom" target="blank"><img class="w-10 ml-9" src="/assets/fb.svg" alt="facebook"></a>
              <a href=""><img class="w-10 ml-9" src="/assets/ig.svg" alt="instagram"></a>
              <a href=""><img class="w-10 ml-9" src="/assets/twitter.svg" alt="twitter"></a>
              <a href=""><img class="w-10 ml-9" src="/assets/youtube.svg" alt=""></a>
          </div>
      </footer>
  </div>
    
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
            jawaban: [],
            mata_pelajaran: 'biologi'
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
            const response = await AuthenticationService.kirimBiologi({
              jawaban : this.jawaban
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