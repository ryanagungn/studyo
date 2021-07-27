<template>
    <!-- navigation bar -->
    <div class="container sticky top-0 z-50 px-5 py-4 mx-auto bg-white">
      <nav class="flex items-center justify-between">
        <div class="w-40">
          <router-link to="/"><img src="../assets/study.png" alt="logo"></router-link>
        </div>
        <div>
          <router-link to="/login" class="text-lg text-gray-900 ml-9 hover:text-blue-800"> Kelas</router-link>
          <router-link to="/akun" class="text-lg text-gray-900 ml-9 hover:text-blue-800"> Akun</router-link>
          <router-link to="/login" class="py-3 text-lg text-white bg-blue-800 px-7 ml-9 rounded-2xl w-9 hover:bg-blue-900">Logout</router-link>
        </div>
      </nav>
    </div>

    <!-- Daftar Kelas -->
  <div>
    <div>
      <h1 class="mt-10 text-4xl font-bold text-gray-800">Daftar Kelas</h1>
    </div>
  <div class="container px-5 py-20 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-7">
          <router-link to="/biologi">
              <div class="py-12 cursor-pointer bg-mapel rounded-3xl justify-beetween hover:bg-blue-900 hover:">
                <img class="mx-auto" src="../assets/biologi.png" alt="logo">
                <h1 class="mt-8 text-2xl font-thin text-center text-white">Biologi</h1>
              </div>
          </router-link>
          <router-link to="/kimia">
              <div class="py-12 text-center cursor-pointer bg-mapel justify-beetween rounded-3xl hover:bg-blue-900 hover:">
               <img class="mx-auto" src="../assets/kimia.png" alt="logo">
               <h1 class="mt-8 text-2xl text-center text-white">Kimia</h1>
            </div>
          </router-link>
          <router-link to="/matematika">
          <div class="py-12 text-center cursor-pointer bg-mapel rounded-3xl justify-beetween hover:bg-blue-900 hover:">
            <img class="mx-auto" src="../assets/math.png" alt="logo">
            <h1 class="mt-8 text-2xl text-center text-white">Matematika</h1>
          </div>
          </router-link>
          <router-link to="/fisika">
          <div class="py-12 text-center cursor-pointer bg-mapel rounded-3xl justify-beetween hover:bg-blue-900 hover:">
            <img class="mx-auto" src="../assets/fisika.png" alt="logo">
            <h1 class="mt-8 text-2xl text-center text-white">Fisika</h1>
          </div>
          </router-link>

          <div class="container col-span-4 px-5 py-8 bg-blue-800 rounded-2xl">
            <div>
                  <router-link to="/kuis" class="px-8 py-4 text-lg text-black bg-white rounded-xl">Coba kuis</router-link>
            </div>
          </div>
    </div> 
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