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
                    <iframe class="mx-auto rounded-3xl" width="560" height="315" src="https://www.youtube.com/embed/CrlVgxuaTWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> 
           </div>
           <div class="container px-8 mx-auto my-auto text-left">
                <div>
                    <h1 class="text-4xl font-bold leading-loose text-gray-800">Kelas Biologi</h1>
                </div>
                <div class="pr-32 mt-2 text-base leading-relaxed">
                    Biologi atau ilmu hayat adalah kajian tentang kehidupan, dan organisme hidup, termasuk struktur, fungsi, pertumbuhan, evolusi, persebaran, dan taksonominya. Ilmu biologi modern membahas pengetahuan yang sangat luas, eklektik, serta terdiri dari berbagai macam cabang dan subdisiplin. Secara umum, seluruh cabang keilmuan biologi disatukan oleh konsep dasar yang mengatur semua penelitian biologi, yaitu konsep tentang sel, gen, dan evolusi. Sel diakui sebagai satuan dasar kehidupan, gen diakui sebagai satuan dasar pewarisan, dan evolusi diasumsikan sebagai mekanisme yang mendorong terciptanya spesies baru. Selain itu, kelangsungan hidup dari makhluk hidup diyakini terjadi karena adanya perilaku konsumsi, perubahan energi serta dengan regulasi yang menjaga kestabiilan dan vitaltas keadaan dalam tubuh.         
               </div>
                <div class="mt-12">
                    <a href="./materi-biologi" class="px-8 py-4 mt-8 text-lg text-white bg-blue-800 shadow-lg rounded-2xl hover:bg-blue-900">Tonton Materi</a>
                    <a href="./kuis" class="px-8 py-4 mt-8 ml-4 text-lg text-white bg-yellow-300 shadow-lg rounded-2xl hover:bg-yellow-400">Kuis</a>

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