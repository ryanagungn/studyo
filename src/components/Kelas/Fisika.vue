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
                    <iframe class="mx-auto rounded-3xl" width="560" height="315" src="https://www.youtube.com/embed/4HrweW4IqJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                </div> 
           </div>
           <div class="container px-8 mx-auto my-auto text-left">
                <div>
                    <h1 class="text-4xl font-bold leading-loose text-gray-800">Kelas Fisika</h1>
                </div>
                  <div class="pr-32 mt-2 text-base leading-relaxed">
                    Fisika (dari bahasa Belanda: fysica, dari bahasa Yunani: φυσικός translit. fysikós arti "alamiah" atau bahasa Yunani: φύσις translit. fýsis arti "alam"; bahasa Inggris: physics; bahasa Arab: فيزياء, translit. fīziyāʾ‎) adalah sains atau ilmu alam yang mempelajari materi beserta gerak dan perilakunya dalam lingkup ruang dan waktu, bersamaan dengan konsep yang berkaitan seperti energi dan gaya. Sebagai salah satu ilmu sains paling dasar, tujuan utama fisika adalah memahami bagaimana alam semesta berkerja. Orang atau ilmuwan yang ahli dalam bidang fisika disebut sebagai ahli fisika atau fisikawan.             
                  </div>
                <div class="mt-12">
                    <a href="./materi-fisika" class="px-8 py-4 mt-8 text-lg text-white bg-blue-800 shadow-lg rounded-2xl hover:bg-blue-900">Tonton Materi</a>
                    <a href="./kuis-fisika" class="px-8 py-4 mt-8 ml-4 text-lg text-white bg-yellow-300 shadow-lg rounded-2xl hover:bg-yellow-400">Kuis</a>

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
              <a href=""><img class="w-10 ml-9" src="/src/assets/ig.svg" alt="instagram"></a>
              <a href=""><img class="w-10 ml-9" src="/assets/twitter.svg" alt="twitter"></a>
              <a href=""><img class="w-10 ml-9" src="/assets/youtube.svg" alt=""></a>
          </div>
      </footer>
  </div>
</template>