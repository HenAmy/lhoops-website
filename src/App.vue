<template>
  <router-view></router-view>

  <!-- FOOTER -->
</template>

<!-- <script setup>
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
    title: 'Question 1',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.'
  },
  {
    value: 'item-2',
    title: 'Question 2',
    content: "Yes. It's unstyled by default, giving you freedom over the look and feel."
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.'
  },
  {
    value: 'item-4',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.'
  },
  {
    value: 'item-5',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.'
  }
]
</script>

<script>
// import AppMenu from './components/AppMenu.vue'
import AppFooter from './components/AppFooter.vue'

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
    AppFooter
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
</script> -->
