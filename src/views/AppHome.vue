<template>
  <!-- NAVIGATION -->
  <nav class="bg-white py-3 top-0 z-10 lg:px-20 px-5 font-mainFont">
    <!-- ALL MENU -->
    <div class="flex items-center">
      <!-- Left Menu -->
      <div class="hidden lg:flex space-x-6">
        <router-link to="/terms" class="text-text rounded-full hover:text-primary text-sm">
          Terms and Conditions
        </router-link>
        <!-- <a href="#" class="text-text rounded-full focus:outline-none text-sm">
          Terms and Conditions
        </a> -->
        <router-link to="/privacy" class="text-text rounded-full hover:text-primary text-sm">
          Privacy Policy
        </router-link>
        <!-- <img src="./images/logo-primary.svg" alt="" id="logo" class="w-32 md:w-40"/> -->
      </div>
      <!-- Image -->
      <!-- <div class="z-30"></div> -->
      <img
        src="../../public/assets/icons/logo-icon.svg"
        alt=""
        id="logo"
        class="flex w-32 md:w-32 z-10 mx-auto"
      />
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
      <!-- <PhList
        class="flex lg:hidden cursor-pointer"
        @click="toggleActive"
        color="black"
        weight="bold"
        :size="30"
      /> -->
    </div>

    <!-- Mobile Menu -->
    <div
      id="menu"
      v-show="isActive"
      class="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white bg-secondary"
    >
      <div class="w-full py-3 text-center font-mainFont text-[16px]">
        <a href="#" class="block hover:text-softRed">Terms and Conditions</a>
      </div>
      <div class="w-full py-4 text-center">
        <a href="#" class="block hover:text-softRed">Privacy Policy</a>
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

  <!-- HERO -->
  <section class="font-mainFont lg:px-20 px-5">
    <div class="relative bg-background h-screen my-6 pt-16 rounded-[20px]">
      <div class="lg:w-2/3 lg:px-0 px-4 space-y-6 mx-auto">
        <h1 class="md:text-[56px] font-semibold text-center leading-tight text-[40px]">
          Find and create <br />
          close-knit communities
        </h1>

        <p class="text-center text-lg font-regular">
          Be a part of close-knit communities of people rather than an audience. Join now and be
          among the first to experience close-knit communities you can belong.
        </p>

        <!-- <Button
          variant="outline"
          @click="
            () => {
              toast({
                title: 'Uh oh! Something went wrong.',
                description: 'There was a problem with your request.'
              })
            }
          "
        >
          Show Toast
        </Button> -->

        <div v-if="show_alert">
          <Alert class="border-0 text-white" :class="alert_variant">
            <!-- <PhMagnifyingGlass weight="regular" :size="24" color="black" class="my-auto" /> -->
            <AlertTitle>{{ alert_title }}</AlertTitle>
            <AlertDescription> {{ alert_msg }}</AlertDescription>
          </Alert>
        </div>

        <vee-form :validation-schema="schema" @submit="subscribeUser">
          <!-- Large screens -->
          <div class="hidden lg:flex space-y-2">
            <div class="flex w-full relative mx-auto items-center">
              <vee-field
                name="email"
                type="email"
                class="py-4 px-6 w-full text-sm rounded-full placeholder-placeholder bg-white focus:outline-none"
                placeholder="Enter your email address"
              />

              <!-- BUTTON -->
              <button
                :disabled="on_submission"
                class="flex pr-2 pl-4 py-1 space-x-4 items-center text-text absolute right-1 bg-primary rounded-full focus:outline-none"
              >
                <p>Join the waitlist</p>
                <div class="bg-black rounded-full p-2">
                  <img src="../../public/assets/icons/mdi-arrow-right.svg" alt="button-icon" />
                </div>
              </button>
            </div>

            <!-- <p class="text-red-600 text-center">Error Message</p> -->
          </div>

          <!-- Mobile screens -->
          <div class="lg:hidden space-y-2">
            <div class="w-full mx-auto items-center space-y-2">
              <vee-field
                name="email"
                type="email"
                class="py-4 px-6 w-full text-sm rounded-full placeholder-placeholder bg-white focus:outline-none"
                placeholder="Enter your email address"
              />

              <!-- BUTTON -->
              <button
                :disabled="on_submission"
                class="flex pr-2 pl-4 py-1 space-x-4 justify-between items-center w-full text-text bg-primary rounded-full focus:outline-none"
              >
                <p>Join the waitlist</p>
                <div class="bg-black rounded-full p-2">
                  <img src="../../public/assets/icons/mdi-arrow-right.svg" alt="button-icon" />
                </div>
              </button>
            </div>

            <!-- <p class="text-red-600 text-center">Error Message</p> -->
            <!-- <div class="flex justify-center">
              <ErrorMessage class="text-red-600" name="email" />
            </div> -->
          </div>
          <div class="flex justify-center">
            <ErrorMessage class="text-red-600" name="email" />
          </div>
        </vee-form>

        <!-- IMAGE -->
        <img
          class="mx-auto absolute left-0 right-0"
          src="../../public/assets/img/hero-image.svg"
          alt="hero-image"
        />
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="font-mainFont pt-40 lg:px-20 px-5">
    <div class="py-6 mt-72">
      <h3 class="text-4xl font-semibold text-left">
        Features to look <br />
        forward to
      </h3>
    </div>

    <!-- LARGE -->
    <div class="hidden lg:flex">
      <!-- Left Side -->
      <div class="w-1/2 space-y-6">
        <!-- Explore Feature -->
        <div
          @click.prevent="tab = 'explore'"
          class="flex gap-5 cursor-pointer p-4"
          :class="{ 'bg-text text-white font-semibold': tab === 'explore' }"
        >
          <PhMagnifyingGlass
            v-if="tab === 'explore'"
            weight="bold"
            :size="40"
            color="white"
            class="my-auto"
          />
          <PhMagnifyingGlass v-else weight="bold" :size="40" color="black" class="my-auto" />
          <div class="">
            <p class="text-2xl font-medium" :class="{ 'text-white': tab === 'explore' }">Explore</p>
            <p class="text-md font-normal" :class="{ 'text-white': tab === 'explore' }">
              Find communities that share your common interests
            </p>
          </div>
        </div>
        <!-- Set Preferences Feature -->
        <div
          @click.prevent="tab = 'preference'"
          class="flex gap-5 p-4 cursor-pointer"
          :class="{ 'bg-text text-white font-medium': tab === 'preference' }"
        >
          <PhFaders
            v-if="tab === 'preference'"
            weight="bold"
            :size="40"
            color="white"
            class="my-auto"
          />
          <PhFaders v-else weight="bold" :size="40" color="black" class="my-auto" />
          <div class="">
            <p class="text-2xl font-medium" :class="{ 'bg-text text-white': tab === 'preference' }">
              Set Preferences
            </p>
            <p class="text-md font-normal" :class="{ 'bg-text text-white': tab === 'preference' }">
              Toggle filters that help you find the right communities
            </p>
          </div>
        </div>
        <!-- New Feature -->
        <div
          @click.prevent="tab = 'new'"
          class="flex gap-5 cursor-pointer p-4"
          :class="{ 'bg-text text-white font-semibold': tab === 'new' }"
        >
          <PhPlusCircle
            v-if="tab === 'new'"
            weight="bold"
            :size="40"
            color="white"
            class="my-auto"
          />
          <PhPlusCircle v-else weight="bold" :size="40" color="black" class="my-auto" />
          <div class="">
            <p class="text-2xl font-medium" :class="{ 'text-white': tab === 'new' }">
              Create lhoops
            </p>
            <p class="text-md font-normal" :class="{ 'text-white': tab === 'new' }">
              Create your own community to share
            </p>
          </div>
        </div>

        <!-- Invites Feature -->
        <div
          @click.prevent="tab = 'invite'"
          class="flex gap-5 cursor-pointer p-4"
          :class="{ 'bg-text text-white font-semibold': tab === 'invite' }"
        >
          <PhPaperPlaneTilt
            v-if="tab === 'invite'"
            weight="bold"
            :size="40"
            color="white"
            class="my-auto"
          />
          <PhPaperPlaneTilt v-else weight="bold" :size="40" color="black" class="my-auto" />
          <div class="">
            <p class="text-2xl font-medium" :class="{ 'text-white': tab === 'invite' }">Invites</p>
            <p class="text-md font-normal" :class="{ 'text-white': tab === 'invite' }">
              Access your invitations to join communities
            </p>
          </div>
        </div>

        <!-- Chat Feature -->
        <div
          @click.prevent="tab = 'chat'"
          class="flex gap-5 cursor-pointer p-4"
          :class="{ 'bg-text text-white font-semibold': tab === 'chat' }"
        >
          <PhChatCenteredText
            v-if="tab === 'chat'"
            weight="bold"
            :size="40"
            color="white"
            class="my-auto"
          />
          <PhChatCenteredText v-else weight="bold" :size="40" color="black" class="my-auto" />
          <div class="">
            <p class="text-2xl font-medium" :class="{ 'text-white': tab === 'chat' }">Chat room</p>
            <p class="text-md font-normal" :class="{ 'text-white': tab === 'chat' }">
              Have conversations with members individually or in groups
            </p>
          </div>
        </div>
      </div>

      <!-- Right Side -->
      <div class="w-1/2 bg-text flex justify-center items-center p-12">
        <img
          v-show="tab === 'explore'"
          src="../../public/assets/img/iPhone-12-explore.svg"
          alt=""
          id="iPhone-explore"
          class=""
        />
        <img
          v-show="tab === 'preference'"
          src="../../public/assets/img/iPhone-12-preference.svg"
          alt=""
          id="iPhone-explore"
          class=""
        />
        <img
          v-show="tab === 'new'"
          src="../../public/assets/img/iPhone-12-new.svg"
          alt=""
          id="iPhone-explore"
          class=""
        />
        <img
          v-show="tab === 'invite'"
          src="../../public/assets/img/iPhone-12-invites.svg"
          alt=""
          id="iPhone-explore"
          class=""
        />
        <img
          v-show="tab === 'chat'"
          src="../../public/assets/img/iPhone-12-chats.svg"
          alt=""
          id="iPhone-explore"
          class=""
        />
      </div>
    </div>

    <!-- MOBILE -->
    <div class="lg:hidden space-y-8">
      <!-- Features Icons -->
      <div class="flex justify-between">
        <!-- First feature -->
        <div class="bg-black p-4" v-if="tab === 'explore'">
          <PhMagnifyingGlass weight="bold" :size="32" color="white" />
        </div>
        <div class="bg-white p-4" @click.prevent="tab = 'explore'" v-else>
          <PhMagnifyingGlass weight="bold" :size="32" color="black" />
        </div>

        <!-- Second feature -->
        <div class="bg-black p-4" v-if="tab === 'preference'">
          <PhFaders weight="bold" :size="32" color="white" />
        </div>
        <div class="bg-white p-4" @click.prevent="tab = 'preference'" v-else>
          <PhFaders weight="bold" :size="32" color="black" />
        </div>

        <!-- Third feature -->
        <div class="bg-black p-4" v-if="tab === 'new'">
          <PhPlusCircle weight="bold" :size="32" color="white" />
        </div>
        <div class="bg-white p-4" @click.prevent="tab = 'new'" v-else>
          <PhPlusCircle weight="bold" :size="32" color="black" />
        </div>

        <!-- Fourth feature -->
        <div class="bg-black p-4" v-if="tab === 'invite'">
          <PhPaperPlaneTilt weight="bold" :size="32" color="white" />
        </div>
        <div class="bg-white p-4" @click.prevent="tab = 'invite'" v-else>
          <PhPaperPlaneTilt weight="bold" :size="32" color="black" />
        </div>

        <!-- Fifth feature -->
        <div class="bg-black p-4" v-if="tab === 'chat'">
          <PhChatCenteredText weight="bold" :size="32" color="white" />
        </div>
        <div class="bg-white p-4" @click.prevent="tab = 'chat'" v-else>
          <PhChatCenteredText weight="bold" :size="32" color="black" />
        </div>
      </div>

      <div class="space-y-4">
        <!-- Explore description -->
        <div class="" v-if="tab === 'explore'">
          <p class="text-2xl font-medium text-center" :class="{ 'text-text': tab === 'explore' }">
            Explore
          </p>
          <p class="text-md font-normal text-center" :class="{ 'text-text': tab === 'explore' }">
            Find communities that share your common interests
          </p>
        </div>
        <!-- Preference description -->
        <div class="" v-if="tab === 'preference'">
          <p class="text-2xl font-medium text-center" :class="{ 'text-text': tab === 'explore' }">
            Set Preferences
          </p>
          <p class="text-md font-normal text-center" :class="{ 'text-text': tab === 'explore' }">
            Toggle filters that help you find the right communities
          </p>
        </div>
        <!-- New description -->
        <div class="" v-if="tab === 'new'">
          <p class="text-2xl font-medium text-center" :class="{ 'text-text': tab === 'explore' }">
            Create lhoops
          </p>
          <p class="text-md font-normal text-center" :class="{ 'text-text': tab === 'explore' }">
            Create your own community to share
          </p>
        </div>
        <!-- Invite description -->
        <div class="" v-if="tab === 'invite'">
          <p class="text-2xl font-medium text-center" :class="{ 'text-text': tab === 'explore' }">
            Invites
          </p>
          <p class="text-md font-normal text-center" :class="{ 'text-text': tab === 'explore' }">
            Access your invitations to join communities
          </p>
        </div>
        <!-- Chat description -->
        <div class="" v-if="tab === 'chat'">
          <p class="text-2xl font-medium text-center" :class="{ 'text-text': tab === 'explore' }">
            Chat room
          </p>
          <p class="text-md font-normal text-center" :class="{ 'text-text': tab === 'explore' }">
            Have conversations with members individually or in groups
          </p>
        </div>

        <!-- Right Side -->
        <div class="bg-text flex justify-center items-center p-12">
          <img
            v-show="tab === 'explore'"
            src="../../public/assets/img/iPhone-12-explore.svg"
            alt=""
            id="iPhone-explore"
            class=""
          />
          <img
            v-show="tab === 'preference'"
            src="../../public/assets/img/iPhone-12-preference.svg"
            alt=""
            id="iPhone-preference"
            class=""
          />
          <img
            v-show="tab === 'new'"
            src="../../public/assets/img/iPhone-12-new.svg"
            alt=""
            id="iPhone-new"
            class=""
          />
          <img
            v-show="tab === 'invite'"
            src="../../public/assets/img/iPhone-12-invites.svg"
            alt=""
            id="iPhone-invite"
            class=""
          />
          <img
            v-show="tab === 'chat'"
            src="../../public/assets/img/iPhone-12-chats.svg"
            alt=""
            id="iPhone-chat"
            class=""
          />
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="font-mainFont pt-60">
    <div
      class="bg-cover bg-no-repeat h-screen hidden lg:flex items-end"
      style="background-image: url('/assets/img/background-image.svg')"
    >
      <!-- Your content here -->
      <div class="space-y-6 pb-10">
        <h3 class="lg:text-4xl text-2xl font-semibold text-center">About the project</h3>
        <p class="font-normal text-center lg:w-1/2 px-5 mx-auto">
          Lhoops is a platform for creating and finding close-knit communities where you are a
          member and not part of an audience. Communities where you can be yourself and share what
          you want all anonymously. Lhoops in the beta phase, subscribe now and join the waitlist of
          eager members who want to experience how they can create and explore close-knit
          communities.
        </p>
      </div>
    </div>

    <!-- Your content here -->
    <div class="lg:hidden space-y-4">
      <h3 class="lg:text-4xl text-2xl font-semibold text-center">About the project</h3>
      <p class="font-normal text-center lg:w-1/2 px-5 mx-auto">
        member and not an audience. A Communities where you can be yourself and share what you want
        all anonymously. Lhoops in a beta phase, subscribe now and join the waitlist of eager
        members who want to experience how they can create and explore close-knit communities.
      </p>
    </div>
  </section>

  <!-- FAQs -->
  <section class="font-mainFont pt-64 lg:px-20 px-5">
    <div class="lg:flex lg:space-y-0 space-y-8">
      <div class="lg:w-1/3 space-y-4">
        <h3 class="text-4xl font-semibold text-left">
          Check out the <br />
          most frequently <br />
          questions
        </h3>
      </div>
      <div class="lg:w-2/3 flex justify-center items-center">
        <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
          <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
            <AccordionTrigger>{{ item.title }}</AccordionTrigger>
            <AccordionContent>
              {{ item.content }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>

  <!-- SOCIALS IMAGE -->
  <!-- <section class="pt-72 px-20">
    <div class="flex justify-center">
      <img src="../public/assets/img/social-media.png" alt="" id="explore-display" class="" />
    </div>
  </section> -->

  <!-- SOCIALS -->
  <section class="font-mainFont pt-72 lg:px-20 px-5">
    <div
      class="lg:flex bg-background rounded-[20px] lg:space-x-10 lg:space-y-0 space-y-10 px-10 lg:py-0 pt-10"
    >
      <div class="space-y-3 my-auto">
        <h3 class="lg:text-4xl text-2xl font-semibold text-left">
          Follow us on <br />
          social media
        </h3>
        <p class="font-regular text-sm">
          Stay updated on the latest news, events, and promotions. Join us and be part of the
          conversation by liking, sharing, and commenting on our posts. Let's connect and engage
          together to create meaningful communities.
        </p>
        <button
          class="px-6 py-2 md:py-2 text-white bg-secondary rounded-full focus:outline-none font-mainFont text-sm"
        >
          <a href="https://www.instagram.com/lhoops_app/" target="_blank"> Follow Us </a>
        </button>
      </div>
      <img src="../../public/assets/img/sm-image.svg" alt="" id="social-media-display" class="" />
      <!-- <div class="">
      </div> -->
    </div>
  </section>

  <!-- CALL TO ACTION -->
  <section class="font-mainFont pt-40 lg:px-20 px-5">
    <div class="lg:w-2/3 space-y-4 mx-auto">
      <h3 class="lg:text-4xl text-2xl font-semibold text-center">Join the waitlist</h3>
      <!-- <p class="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br> nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p> -->

      <vee-form :validation-schema="schema" @submit="subscribeUser" class="space-y-2">
        <!-- Large screens -->
        <div class="hidden lg:flex space-y-2">
          <div class="flex w-full relative mx-auto items-center">
            <vee-field
              name="email"
              type="email"
              class="py-4 px-6 w-full text-sm rounded-full placeholder-placeholder border-2 bg-white focus:outline-none"
              placeholder="Enter your email address"
            />

            <!-- BUTTON -->
            <button
              :disabled="on_submission"
              class="flex pr-2 pl-4 py-1 space-x-4 items-center text-text absolute right-1 bg-primary rounded-full focus:outline-none"
            >
              <p>Join the waitlist</p>
              <div class="bg-black rounded-full p-2">
                <img src="../../public/assets/icons/mdi-arrow-right.svg" alt="button-icon" />
              </div>
            </button>
          </div>
        </div>

        <!-- MOBILE screens -->
        <div class="lg:hidden space-y-2">
          <div class="w-full mx-auto items-center space-y-2">
            <vee-field
              name="email"
              type="email"
              class="py-4 px-6 w-full text-sm rounded-full placeholder-placeholder border-2 bg-white focus:outline-none"
              placeholder="Enter your email address"
            />

            <!-- BUTTON -->
            <button
              :disabled="on_submission"
              class="flex pr-2 pl-4 py-1 space-x-4 justify-between items-center w-full text-text bg-primary rounded-full focus:outline-none"
            >
              <p>Join the waitlist</p>
              <div class="bg-black rounded-full p-2">
                <img src="../../public/assets/icons/mdi-arrow-right.svg" alt="button-icon" />
              </div>
            </button>
          </div>
        </div>
        <div class="flex justify-center">
          <ErrorMessage class="text-red-600" name="email" />
        </div>
      </vee-form>

      <p class="text-center text-sm">
        Your data is in safe hands. Check out our
        <a href="#" class="font-medium text-primary">Privacy Policy</a> for more information
      </p>
    </div>
  </section>

  <AppFooter />
</template>

<script setup>
// import { Button } from '@/components/ui/button'
import {
  PhMagnifyingGlass,
  PhFaders,
  PhPaperPlaneTilt,
  PhChatCenteredText,
  PhPlusCircle
  // PhX,
  // PhList
} from '@phosphor-icons/vue'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
// import { Button } from '@/components/ui/button'
// import { useToast } from '@/components/ui/toast/use-toast'
// const { toast } = useToast()

const defaultValue = 'item-1'

const accordionItems = [
  {
    value: 'item-1',
    title: 'How this works?',
    content:
      'Sign up to the waitlist and recieve a link to download the beta version of the lhoops app. Send any feedback or concerns to the lhoops team via the lhoops mobile app and the team would get back to you.'
  },
  {
    value: 'item-2',
    title: 'How many communities can I create?',
    content:
      'Lhoops is in beta and all early access members can create as many communites(lhoops) they want. There are no restriction to creating any type of community, public communities; that are open to all to join, private communities; that require a request to join or exclusive communities; that are strictly by invitation'
  },
  {
    value: 'item-3',
    title: 'Is lhoops free?',
    content:
      'Lhoops is completely free. For the foresable future, there are no ads, no premium features or unlockable information'
  },
  {
    value: 'item-4',
    title: 'Will my beta account be usable after the beta phase?',
    content:
      'All accounts and the data associated with those accounts created and managed by early access members will be transferable when lhoops eventually leaves the Beta phase.'
  }
  // {
  //   value: 'item-5',
  //   title: 'Any limitations on beta version?',
  //   content: 'Yes! You can use the transition prop to configure the animation.'
  // }
]
</script>

<script>
// import AppMenu from './components/AppMenu.vue'
import AppFooter from '../components/AppFooter.vue'

import axios from 'axios'

export default {
  name: 'AppHome',

  data() {
    return {
      tab: 'explore',
      isActive: false,
      schema: {
        email: 'required|min:3|max:100|email'
      },
      on_submission: false,
      show_alert: false,
      alert_variant: 'bg-blue-500',
      alert_title: 'Please wait!',
      alert_msg: 'We are processing your email'
    }
  },

  components: {
    // AppMenu,
    // AppFooter
  },

  methods: {
    async subscribeUser(values) {
      this.show_alert = true
      this.on_submission = true

      // console.log(values)

      setTimeout(() => {
        this.show_alert = false
        this.on_submission = false
      }, 4000)

      try {
        const response = await axios.request({
          url: `https://us21.api.mailchimp.com/3.0/lists/de35dad8ae`,
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + '6c65a2b2dc18ccf5c76ad43d312441a9-us21'
          },
          data: {
            members: [
              {
                email_address: values.email,
                status: 'subscribed'
              }
            ]
          }
        })

        console.log(`RESPONSE: ${response}`)
        //   this.alert_variant = 'bg-green-500'
        // this.alert_title = 'Success!'
        // this.alert_msg = 'You have joined the lhoops waitlist, we cant wait to show you what we have'
        // this.on_submission = false
      } catch (error) {
        console.log('Error: ', error)
        // this.alert_variant = 'bg-green-500'
        // this.alert_title = 'Error!'
        // this.alert_msg = 'You have joined the lhoops waitlist, we cant wait to show you what we have'
        // this.on_submission = false
        return
      }
    },

    toggleActive() {
      this.isActive = !this.isActive
    }
  }
}
</script>
