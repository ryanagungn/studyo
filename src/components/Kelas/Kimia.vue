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

    <div class="container grid grid-cols-2 gap-3 py-8 mx-auto mt-12 bg-gray-100 rounded-3xl">
            <div>
                <div class="container py-12 mx-auto my-auto">
                    <iframe class="mx-auto rounded-3xl" width="560" height="315" src="https://www.youtube.com/embed/WAE3-XPclE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> 
           </div>
           <div class="container px-8 mx-auto my-auto text-left">
                <div>
                    <h1 class="text-4xl font-bold leading-loose text-gray-800">Kelas Kimia</h1>
                </div>
                <div class="pr-32 mt-2 text-base leading-relaxed">
                    Kimia adalah cabang dari ilmu fisik yang mempelajari tentang susunan, struktur, sifat, dan perubahan materi. Ilmu kimia meliputi topik-topik seperti sifat-sifat atom, cara atom membentuk ikatan kimia untuk menghasilkan senyawa kimia, interaksi zat-zat melalui gaya antarmolekul yang menghasilkan sifat-sifat umum dari materi, dan interaksi antar zat melalui reaksi kimia untuk membentuk zat-zat yang berbeda.
                </div>
                <div class="mt-12">
                    <a href="./materi-kimia" class="px-8 py-4 mt-8 text-lg text-white bg-blue-800 shadow-lg rounded-2xl hover:bg-blue-900">Tonton Materi</a>
                    <a href="./kuis-kimia" class="px-8 py-4 mt-8 ml-4 text-lg text-white bg-yellow-300 shadow-lg rounded-2xl hover:bg-yellow-400">Kuis</a>

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
              <a href="" target="blank"><img class="w-10 ml-9" src="/assets/fb.svg" alt="facebook"></a>
              <a href=""><img class="w-10 ml-9" src="/assets/ig.svg" alt="instagram"></a>
              <a href=""><img class="w-10 ml-9" src="/assets/twitter.svg" alt="twitter"></a>
              <a href=""><img class="w-10 ml-9" src="/assets/youtube.svg" alt=""></a>
          </div>
      </footer>
  </div>
</template>