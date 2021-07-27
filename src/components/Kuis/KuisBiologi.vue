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

        <h1 class="mt-12 text-3xl font-bold">Video Biologi</h1>
        

    <div class="container px-5 mx-auto mt-12">
      <div class="grid grid-cols-2 gap-5">
          <div>
            <h1 class="text-xl font-medium text-left px-28">Materi 1 : Plantae</h1>
            <p class="px-28">
              <iframe class="mt-8 rounded-3xl" width="560" height="315" src="https://www.youtube.com/embed/waRKYO0cXjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>
          </div>
           <div>
            <h1 class="text-xl font-medium text-left px-28">Materi 2 : Animalia</h1>
            <p class="px-28">
              <iframe class="mt-8 rounded-3xl" width="560" height="315" src="https://www.youtube.com/embed/QkyGq_zxcvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>
          </div>
      </div>
    </div>

    <div class="container px-5 mx-auto mt-24">
      <div class="grid grid-cols-2">
          <div>
            <h1 class="text-xl font-medium text-left px-28">Materi 3 : Mutasi</h1>
            <p class="px-28">
              <iframe  class="mt-8 rounded-3xl" width="560" height="315" src="https://www.youtube.com/embed/OBcNgttpjsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>
          </div>
           <div>
            <h1 class="text-xl font-medium text-left px-28">Materi 4 : Evolusi</h1>
            <p class="px-28">
              <iframe  class="mt-8 rounded-3xl" width="560" height="315" src="https://www.youtube.com/embed/fGWsYylYG4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>
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
              <a href="https://fb.com/frozen.rotom" target="blank"><img class="w-10 ml-9" src="/assets/fb.svg" alt="facebook"></a>
              <a href=""><img class="w-10 ml-9" src="/assets/ig.svg" alt="instagram"></a>
              <a href=""><img class="w-10 ml-9" src="/assets/twitter.svg" alt="twitter"></a>
              <a href=""><img class="w-10 ml-9" src="/assets/youtube.svg" alt=""></a>
          </div>
      </footer>
  </div>
</template>