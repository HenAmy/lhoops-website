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
        <!-- <a href="#" class="text-text rounded-full focus:outline-none text-sm"> Privacy Policy </a> -->
        <!-- <img src="./images/logo-primary.svg" alt="" id="logo" class="w-32 md:w-40"/> -->
      </div>
      <!-- Image -->
      <!-- <div class="z-30"></div> -->
      <router-link class="flex flex-1" to="/">
        <img
          src="../../public/assets/icons/logo-icon.svg"
          alt=""
          id="logo"
          class="w-32 md:w-32 z-10 mx-auto"
        />
      </router-link>
      <!-- Right Menu -->
      <div class="hidden lg:flex">
        <a href="#" class="px-10 py-2 text-white bg-white rounded-full focus:outline-none text-md">
          Log in
        </a>
        <!-- <a href="#" class="px-6 py-2 text-text bg-primary rounded-full focus:outline-none text-md">
          Join waitlist
        </a> -->
        <router-link
          class="px-6 py-2 text-text bg-primary rounded-full focus:outline-none text-md"
          to="/"
        >
          Join waitlist
        </router-link>
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
        <router-link
          class="px-6 py-2 text-white bg-secondary rounded-md focus:outline-none md:py-4 font-mainFont text-[18px]"
          to="/"
        >
          Join waitlist
        </router-link>
      </div>
    </div>
  </nav>

  <section class="py-3 top-0 z-10 lg:px-20 px-5 font-mainFont space-y-10 pt-20">
    <div>
      <h1 class="md:text-[56px] font-semibold leading-tight text-[40px]">Privacy Policy</h1>
      <h6 class="text-lg font-medium">
        This Privacy Policy explains what personal data is collected when you sign unto lhoops, use
        the services provided and how much data will be used or shared. By registering with lhoops,
        you expressly give your consent to process your personal data in accordance with this
        Privacy Policy. We advise that you read the Privacy Policy carefully and to keep a copy
        thereof for your own records. Process in respect of personal data means to collect, store
        and share with third parties.
      </h6>
    </div>

    <h3 class="text-2xl font-semibold">Categories Of Personal Data We Collect</h3>
    <p>
      We collect the data you give us voluntarily (for example, name, mobile number and an email
      address). We also collect data automatically (for example, your IP address).
    </p>

    <p>Data to be provided:</p>

    <p>
      You shall be asked to provide us information about yourself when you register and/or use the
      Service. This information includes name, phone number, email, photo, address.
    </p>

    <p>
      To use our Service and register an account, you need to provide required information. You will
      be able to use the Service even if you do not give this data to us, but some Service
      functionality may be limited to you (for example, if you do no register an account, you will
      not be able to chat with other users, post ads, see contact details of other users).
    </p>

    <p>
      Sometimes you may also need to provide us additional information in the communication with our
      Support Team in order to fulfil your request (for example, if your account was previously
      blocked, we may ask you to confirm your identity by providing an ID document).
    </p>

    <p>Data provided by third parties to us:</p>

    <p>
      When you decide to log in using Facebook or Google, we get personal data from your Facebook or
      Google account. This includes your profile image, name, and Facebook ID, Google ID, friends
      list.
    </p>

    <p>
      For more information, please refer to the Facebook Permissions References (describes the
      categories of information, which Facebook may share with third parties and set of
      requirements) and to the Facebook Data Policy. Facebook lets you control the choices you make
      when connecting your Facebook profile to the App on their Apps and Websites page.
    </p>

    <p>To know more about how Google processes your data, visit its Privacy Policy.</p>

    <p>Data automatically collected:</p>

    <p>
      We collect data about your referring URL (that is, the place on the Web where you were when
      you tapped on our ad).
    </p>

    <p>
      We collect data from your device. Examples of such data include: language settings, IP
      address, time zone, type and model of a device, device settings, operating system, Internet
      service provider, mobile carrier, hardware ID, and Facebook ID.
    </p>

    <p>Data Usage:</p>

    <p>
      We record how you interact with our Service. For example, we log the features, and content you
      interact with, how often you use the Service, how long you are on the Service, what sections
      you use, how many ads you watch.
    </p>

    <p>Advertising IDs:</p>

    <p>
      We collect your Apple Identifier for Advertising (“IDFA”) or Google Advertising ID (“AAID”)
      (depending on the operating system of your device). You can typically reset these numbers
      through the settings of your device’s operating system (but we do not control this).
    </p>

    <p>Transaction data:</p>

    <p>
      When you make payments through the Service, you need to provide financial account data, such
      as your credit card number, to our third-party service providers. We do not collect or store
      full credit card number data, though we may receive credit card-related data, data about the
      transaction, including date, time and amount of the transaction, the type of payment method
      used.
    </p>

    <p>Cookies:</p>

    <p>
      A cookie is a small text file that is stored on a user’s computer for record-keeping purposes.
      Cookies can be either session cookies or persistent cookies. A session cookie expires when you
      close your browser and is used to make it easier for you to navigate our Service. A persistent
      cookie remains on your hard drive for an extended period of time. We also use tracking pixels
      that set cookies to assist with delivering online advertising.
    </p>

    <p>
      Cookies are used, in particular, to automatically recognize you the next time you visit our
      Website. As a result, the information, which you have earlier entered in certain fields on the
      Website may automatically appear the next time when you use our Service. Cookie data will be
      stored on your device and most of the times only for a limited time period
    </p>

    <h3 class="text-2xl font-semibold">Purposes For Processing Your Personal Data</h3>
    <p>
      To provide our Service, this includes enabling you to use the Service in a seamless manner and
      preventing or addressing Service errors or technical issues.
    </p>

    <p>To customize your experience:</p>

    <p>
      We process your personal data to adjust the content of the Service and make offers tailored to
      your personal preferences and interests.
    </p>

    <p>To manage your account and provide you with customer support:</p>

    <p>
      We process your personal data to respond to your requests for technical support, Service
      information or to any other communication you initiate. This includes accessing your account
      to address technical support requests. For this purpose, we may send you, for example,
      notifications or emails about the performance of our Service, security, payment transactions,
      notices regarding our Terms and Conditions of User this Privacy Policy.
    </p>

    <p>To communicate with you regarding your use of our Service:</p>

    <p>
      We communicate with you, for example, by push notifications or in the chat. As a result, you
      may, for example, receive a notification whether on the Website or via email that you received
      a new message on lhoops. To opt-out of receiving push notifications, you need to change the
      settings on your browser or mobile device. To opt-out of a certain type of emails, you need to
      follow unsubscribe link located in the footer of the email by contacting our support team at
      support@localhost, or in your profile setting.
    </p>

    <p>
      The services that we use for these purposes shall collect data concerning the date and time
      when the message was viewed by our users, as well as when they interacted with it, such as by
      clicking on links included in the message.
    </p>

    <p>To research and analyze your use of the Service:</p>

    <p>
      This helps us to better understand our business, analyse our operations, maintain, improve,
      innovate, plan, design, and develop lhoops products. We also use such data for statistical
      analysis purposes, to test and improve our offers. This enables us to better understand what
      features and sections of lhoops our users like most, what categories of users use our Service.
      As a result, we often decide how to improve lhoops based on the results obtained from this
      processing.
    </p>

    <p>Sending marketing communications:</p>

    <p>
      We process your personal data for our marketing campaigns. We may add your email address to
      our marketing list. As a result, you will receive information about our products, such as,
      special offers, and products of our partners. If you do not want to receive marketing emails
      from us, you can unsubscribe following instructions in the footer of the marketing emails, by
      contacting our support team at support@localhost, or in your profile setting.
    </p>

    <p>
      We may also show you advertisements on the Website, and send you push notifications for
      marketing purposes. To opt-out of receiving push notifications, you need to change the
      settings on your device or/and browser.
    </p>

    <p>To personalize our ads:</p>

    <p>
      We and our partners use your personal data to tailor ads and possibly even show them to you at
      the relevant time. For example, if you have visited our Website, you might see ads of our
      products, for example, in your Facebook’s feed.
    </p>

    <p>
      We may target advertising to you through a variety of ad networks and exchanges, using data
      from advertising technologies on and off of our Services like unique cookie, or similar
      tracking technology, pixel, device identifiers, geolocation, operation system information,
      email.
    </p>

    <p>To enforce our Terms and Conditions of Use and to prevent and combat fraud:</p>

    <p>
      We use personal data to enforce our agreements and contractual commitments, to detect,
      prevent, and combat fraud. As a result of such processing, we may share your information with
      others, including law enforcement agencies (in particular, if a dispute arises in connection
      with our Terms and Conditions of Use).
    </p>

    <p>To comply with legal obligations:</p>

    <p>
      We may process, use, or share your data when the law requires it, in particular, if a law
      enforcement agency requests your data by available legal means.
    </p>

    <p>To process your payments:</p>

    <p>
      We provide paid products and/or services within the Service. For this purpose, we use
      third-party services for payment processing (for example, payment processors). As a result of
      this processing, you will be able to make a payment and use the paid features of the Service.
    </p>

    <h3 class="text-2xl font-semibold">Purposes For Processing Your Personal Data</h3>

    <p>
      We process your personal data, in particular, under the following authorized requirements:
    </p>

    <p>your consent;</p>

    <p>to perform our contract with you;</p>

    <p>for our (or others’) legitimate interests;</p>

    <p>to comply with legal obligations.</p>

    <h3 class="text-2xl font-semibold">With Whom We Share Your Personal Data</h3>

    <p>
      We share information with third parties that help us operate, provide, improve, integrate,
      customize, support, and market our Service. The types of third parties we share information
      with include, in particular:
    </p>

    <p>Service providers</p>

    <p>
      We share personal data with third parties that we hire to provide services or perform business
      functions on our behalf, based on our instructions. We may share your personal information
      with the following types of service providers
    </p>

    <p>Law enforcement agencies and other public authorities</p>

    <p>
      We may use and disclose personal data to enforce our Terms and Conditions of Use, to protect
      our rights, privacy, safety, or property, and/or that of our affiliates, you or others, and to
      respond to requests from courts, law enforcement agencies, regulatory agencies, and other
      public and government authorities, or in other cases provided for by law.
    </p>

    <p>Third parties as part of a merger or acquisition</p>

    <p>
      As we develop our business, we may buy or sell assets or business offerings. Customers’
      information is generally one of the transferred business assets in these types of
      transactions. We may also share such information with any affiliated entity (e.g. parent
      company or subsidiary) and may transfer such information in the course of a corporate
      transaction, such as the sale of our business, a divestiture, merger, consolidation, or asset
      sale, or in the unlikely event of bankruptcy.
    </p>

    <h3 class="text-2xl font-semibold">How You Can Exercise Your Rights</h3>

    <p>To be in control of your personal data, you have the following rights:</p>

    <p>
      Accessing/reviewing/updating/correcting your personal data. You may review, edit, or change
      the personal data that you had previously provided to lhoops in the settings section on the
      Website.
    </p>

    <p>
      You may also request a copy of your personal data collected during your use of the Service at
      support@localhost.
    </p>

    <p>
      Deleting your personal data. You can request the erasure of your personal data by sending us
      an email at support@localhost.
    </p>

    <p>
      When you request deletion of your personal data, we will use reasonable efforts to honor your
      request. In some cases we may be legally required to keep some of the data for a certain time;
      in such event, we will fulfil your request after we have complied with our obligations.
    </p>

    <p>
      Objecting to or restricting the use of your personal data (including for direct marketing
      purposes). You can ask us to stop using all or some of your personal data or limit our use
      thereof by sending a request at support@localhost.
    </p>

    <h3 class="text-2xl font-semibold">Age Limitations</h3>
    <p>
      We do not knowingly process personal data from persons under 18 years of age. If you learn
      that anyone younger than 18 has provided us with personal data, please contact us at s
      support@localhost.
    </p>

    <h3 class="text-2xl font-semibold">Changes To This Privacy Policy</h3>
    <p>
      We may modify this Privacy Policy from time to time. If we decide to make material changes to
      this Privacy Policy, you will be notified through our Service or by other available means and
      will have an opportunity to review the revised Privacy Policy. By continuing to access or use
      the Service after those changes become effective, you agree to be bound by the revised Privacy
      Policy.
    </p>

    <h3 class="text-2xl font-semibold">Data Retention</h3>
    <p>
      We will store your personal data for as long as it is reasonably necessary for achieving the
      purposes set forth in this Privacy Policy (including providing the Service to you), which
      includes (but is not limited to) the period during which you have a lhoops account. We will
      also retain and use your personal data as necessary to comply with our legal obligations,
      resolve disputes, and enforce our agreements.
    </p>
  </section>

  <AppFooter />
</template>

<script>
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'PrivacyPolicy',

  components: {
    AppFooter
  }
}
</script>
