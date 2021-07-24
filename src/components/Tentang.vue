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

    <div class="container grid grid-cols-2 gap-3 py-8 mx-auto mt-12 bg-gray-100 rounded-3xl">
            <div>
                <div class="container py-12 mx-auto my-auto">
                    <img src="../assets/study.png" class="mx-auto" alt="">
                </div>
           </div>
           <div class="container px-8 mx-auto my-auto text-left">
                <div>
                    <h1 class="text-4xl font-bold leading-loose text-gray-800 rounded">Apa sih study.io itu?</h1>
                </div>
                  <div class="pr-32 mt-2 text-base leading-relaxed">
                    Study.io merupakan sebuah Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed saepe repellendus dolor delectus possimus quis quisquam accusamus omnis dolorum perferendis adipisci, excepturi quaerat doloribus? Harum voluptates obcaecati id recusandae perspiciatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quae ad hic quis explicabo id qui facere aliquam assumenda accusantium, voluptatum sequi magni debitis consequatur quos velit modi non laboriosam?            
                  </div>
                
           </div>
        
    </div>
</template>