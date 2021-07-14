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

    <div>
      <h1 class="mt-10 text-4xl font-bold text-gray-800">Frequently Asked Questions</h1>
    </div>

    <div class="container px-5 pt-12 mx-auto bg-white rounded-2xl">
        <!-- question 1 -->
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="flex justify-between w-full px-8 py-4 text-base font-medium text-left text-blue-800 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" >
          <span>Bagaimana cara mengetahui promo terbaru dari Study.io?</span>
          <ChevronUpIcon :class="open ? 'transform rotate-180' : ''" class="w-5 h-5 text-blue-500"/>
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-base text-gray-500 ">
          Kamu bisa mengunjungi media sosial Ruangguru (Instagram, Twitter,
          Facebook Official Study.io) atau membuka website kami di https://www.study.io
        </DisclosurePanel>
      </Disclosure>
      <!-- question 2 -->
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex justify-between w-full px-8 py-4 text-base font-medium text-left text-blue-800 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Do you offer technical support?</span>
          <ChevronUpIcon
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 text-blue-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-base text-gray-500">
          No.
        </DisclosurePanel>
      </Disclosure>
      <!-- question 2 -->
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex justify-between w-full px-8 py-4 text-base font-medium text-left text-blue-800 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Do you offer technical support?</span>
          <ChevronUpIcon
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 text-blue-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-base text-gray-500">
          No.
        </DisclosurePanel>
      </Disclosure>
    </div>

</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/solid'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
  },
}
</script>

