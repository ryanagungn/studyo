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
    
  <!-- Hero -->
  <div class="container px-5 mx-auto mt-5">
      <div class="grid grid-cols-1 my-10 bg-gray-100 md:grid-cols-2 rounded-3xl dark:bg-gray-800">  
        <div class="justify-between mx-auto my-20 text-center rounded-3xl">
          <h1 class="font-bold leading-tight text-left text-7xl">Belajar dari <br> rumah</h1>
          <p class="mt-4 mb-10 text-3xl leading-normal text-left">Bimbingan belajar online <br> terbaik dan terbesar di dunia</p>
          <a href="" class="py-3 mr-5 text-lg text-white bg-blue-800 px-7 rounded-2xl hover:bg-blue-900" >Daftar</a>
          <a href="login" class="py-3 text-lg text-white bg-gray-400 mr-96 px-7 rounded-2xl hover:bg-gray-600">Login</a>
        </div>
      
      <div class="justify-between w-4/5 mx-auto my-16 text-center">
        <img src="../assets/gambar.png"  alt="">
      </div>
      <div class="w-8 h-8 col-span-2 mx-auto mb-10 animate-bounce an">
        <a href=""><img src="../assets/down.svg" alt="down"></a>
      </div>
    </div>
  </div>

  <!-- Card  -->
  <div class="container py-24 mx-auto bg-blue-800 md:px-56 mt-28 rounded-3xl" id="card" >
      <h1 class="text-4xl font-bold text-white mb-14">Mengapa harus Study.io?</h1>
    <div class="grid grid-cols-3 gap-7">
          <div class="py-12 transition duration-150 ease-in-out transform bg-gray-100 rounded-3xl justify-beetween hover:-translate-y-1 hover:scale-110" data-replace='{ "translate-y-12": "translate-y-0" }'>
            <img class="mx-auto" src="../assets/Profile.png" alt="logo">
            <h1 class="mt-8 text-5xl font-bold text-center text-gray-800">999+</h1>
            <h1 class="mt-4 text-2xl font-thin text-center text-gray-400">Siswa terdaftar</h1>
          </div>
          <div class="py-12 text-center transition duration-150 ease-in-out transform bg-gray-100 justify-beetween rounded-3xl hover:-translate-y-1 hover:scale-110">
            <img class="mx-auto" src="../assets/Play.png" alt="logo">
            <h1 class="mt-8 text-5xl font-bold text-center text-gray-800">599+</h1>
            <h1 class="mt-4 text-2xl text-center text-gray-400">Video materi</h1>
          </div>
          <div class="py-12 text-center transition duration-150 ease-in-out transform bg-gray-100 rounded-3xl justify-beetween hover:-translate-y-1 hover:scale-110">
            <img class="mx-auto" src="../assets/Document.png" alt="logo">
            <h1 class="mt-8 text-5xl font-bold text-center text-gray-800">1999+</h1>
            <h1 class="mt-4 text-2xl text-center text-gray-400">Soal pelatihan</h1>
          </div>
        <div class="col-span-3">
            <h1 class="mx-5 mt-12 text-xl leading-relaxed text-white">Supaya persiapan maksimal, belajar beneran ngerti jadi penting banget. Pahamin materi sampai akarnya. Kalau fondasi pemahaman udah kokoh, bab-bab selanjutnya bisa lebih gampang dipahami. Jadi lebih hemat waktu deh dalam belajar.</h1>
        </div>
    </div>
  </div>

  <!-- Review -->
  <div>
    <div>
      <h1 class="text-4xl font-bold text-gray-800 mt-28">Review</h1>
    </div>
  <div class="container px-5 py-12 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div class="py-8 bg-gray-100 rounded-3xl justify-beetween " data-replace='{ "translate-y-12": "translate-y-0" }'>
            <img class="mx-auto w-60" src="../assets/ava1.png" alt="logo">
            <h1 class="mt-8 text-3xl font-bold text-center text-gray-800">Raihan Hadi</h1>
            <h1 class="mt-2 text-xl font-thin text-center text-gray-400">"Senang bisa berkesempatan untuk <br> belajar disini."</h1>
          </div>
          <div class="py-8 text-center bg-gray-100 justify-beetween rounded-3xl ">
            <img class="mx-auto w-60" src="../assets/ava2.png" alt="logo">
            <h1 class="mt-8 text-3xl font-bold text-center text-gray-800">Alif Hamzah</h1>
            <h1 class="mt-2 text-xl font-thin text-center text-gray-400">"Penjelasan sangat enak untuk didengar <br> dan banyak bank soal"</h1>

          </div>
          <div class="py-8 text-center bg-gray-100 rounded-3xl justify-beetween ">
            <img class="mx-auto w-60" src="../assets/ava3.png" alt="logo">
            <h1 class="mt-8 text-3xl font-bold text-center text-gray-800">Kadita</h1>
            <h1 class="mt-2 text-xl font-thin text-center text-gray-400">"Alhamdulillah berkat Study.io saya dapat <br> diterima di UAD"</h1>
          </div>
    </div>
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
              <a href="" target="blank"><img class="w-10 ml-9" src="../assets/fb.svg" alt="facebook"></a>
              <a href=""><img class="w-10 ml-9" src="../assets/ig.svg" alt="instagram"></a>
              <a href=""><img class="w-10 ml-9" src="../assets/twitter.svg" alt="twitter"></a>
              <a href=""><img class="w-10 ml-9" src="../assets/youtube.svg" alt=""></a>
          </div>
      </footer>
  </div>
</template>

<script>
export default {
    name: 'index',
}
</script>