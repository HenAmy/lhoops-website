<template>
  <!-- NAVIGATION -->
  <nav class="bg-white py-3 top-0 z-10 px-20 font-mainFont">
    <!-- ALL MENU -->
    <div class="flex items-center justify-between container space-x-20">
      <!-- Left Menu -->
      <div class="space-x-6">
        <a href="#" class="text-text rounded-full focus:outline-none text-md">
          Terms and Conditions
        </a>
        <a href="#" class="text-text rounded-full focus:outline-none text-md"> Privacy Policy </a>
        <!-- <img src="./images/logo-primary.svg" alt="" id="logo" class="w-32 md:w-40"/> -->
      </div>
      <!-- Image -->
      <div class="z-30">
        <img src="../../public/assets/icons/logo-icon.svg" alt="" id="logo" class="w-24 md:w-32" />
      </div>
      <!-- Right Menu -->
      <div class="hidden lg:flex">
        <a href="#" class="px-10 py-2 text-white bg-white rounded-full focus:outline-none text-md">
          Log in
        </a>
        <a href="#" class="px-6 py-2 text-text bg-primary rounded-full focus:outline-none text-md">
          Join waitlist
        </a>
      </div>
      <!-- Hamburger -->
      <button id="menu-btn" class="z-30 block lg:hidden focus:outline-none hamburger">
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>
    </div>
    <!-- Mobile Menu -->
    <div
      id="menu"
      class="fixed inset-0 z-10 hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white bg-secondary"
    >
      <div class="w-full py-3 text-center font-mainFont text-[16px]">
        <a href="#features" class="block hover:text-softRed">Home</a>
      </div>
      <div class="w-full py-4 text-center">
        <a href="#download" class="block hover:text-softRed">Features</a>
      </div>
      <div class="w-full py-4 text-center">
        <a href="#faq" class="block hover:text-softRed">Testimonials</a>
      </div>
      <div class="w-full py-4 text-center">
        <a href="#" class="block hover:text-softRed">Contact</a>
      </div>
      <div class="flex flex-col mt-4 space-y-3 justify-center p-1 w-full">
        <!-- <button
          class="px-6 py-2 text-text bg-white rounded-md focus:outline-none md:py-2 font-mainFont text-[18px]"
        >
          Sign In
        </button> -->
        <button
          class="px-6 py-2 text-white bg-secondary rounded-md focus:outline-none md:py-4 font-mainFont text-[18px]"
        >
          Join waitlist
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppMenu'
}
</script>
