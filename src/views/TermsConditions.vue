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

  <section class="font-mainFont lg:px-20 px-5 space-y-20 pt-20">
    <div>
      <h1 class="md:text-[56px] font-semibold leading-tight text-[40px]">Terms & Conditions</h1>
      <h6 class="text-lg font-medium">
        By signing unto lhoops, you agree to be bound by the following terms and conditions as shall
        be updated from time to time.These terms and conditions apply to all visitors, users, and
        others who access this website.
      </h6>
    </div>

    <div>
      <h3 class="text-2xl font-semibold">General Terms</h3>
      <ul class="list-disc">
        <li>
          Users of lhoops shall provide the necessary true and current information to create a User
          account, which includes an email address, password, name mobile number, and image.
        </li>
        <li>
          The Administrator prevents infringement of copyright and intellectual property rights
          infringement in the course of using lhoops and shall delete any User material, which
          infringes intellectual property rights, at its discretion without prior notice. The
          Administrator may terminate Users’ access to lhoops if such Users repeatedly infringe
          rights or commit any actions in contrast to these Terms and Conditions.
        </li>
        <li>The fees charged for using our Services are listed on lhoops</li>
      </ul>
    </div>

    <div class="">
      <h3 class="text-2xl font-semibold">Usage of lhoops</h3>
      <h6 class="text-lg font-medium">All Users shall:</h6>
      <ul class="list-disc">
        <li>
          Provide true, complete, and current data during registration and keep such data updated.
        </li>
        <li>
          Immediately change data for accessing lhoops, when there is a suspicion that the email
          address and password used for logging into lhoops were disclosed or probably used by third
          parties.
        </li>
        <li>
          Notify the Administrator of unauthorized access to the personal account and/or of
          unauthorized access to and/or use of Users’ login and password;
        </li>
        <li>
          Prevent other Users from getting access to the personal account or any specific
          information contained on it if this can lead to a violation of the laws of Ghana and/or
          these Terms and Conditions;
        </li>
        <li>
          Avoid posting information and objects (including references hereto) to lhoops, which may
          infringe on other person’s rights and interests;
        </li>
        <li>
          Avoid posting information and objects (including references hereto) to lhoops prohibited
          by these Terms and Conditions and by applicable law.
        </li>
        <li>
          Not confuse other Users concerning his/her personality using the login and password of any
          other registered User.
        </li>
        <li>
          Not illegally download, store, post, distribute, or provide access to or in any other way
          use the intellectual property of other Users and third parties.
        </li>
        <li>
          Not perform bulk mailing to the addresses of other lhoops Users without their consent;
        </li>
        <li>
          Not use software and pursue any other actions aimed at interfering with the normal
          operation of lhoops or other Users.
        </li>
      </ul>

      <div>
        <h6 class="text-lg font-medium">Each user represents and warrants that:</h6>
        <ul class="list-disc">
          <li>
            He/she undertakes full responsibility for obtaining all necessary permits concerning any
            User Content, that he/she represents or displays.
          </li>
          <li>
            Any User content represented or displayed by him/her does not infringe any copyrights,
            patents, rights for trademarks, firm names, commercial secrets, or any other personal or
            proprietary rights of any third party (“Third party rights”).
          </li>
        </ul>
      </div>

      <div class="space-y-8">
        <h6 class="text-lg font-medium">Each user is not allowed to post or share:</h6>
        <ul class="list-disc">
          <li>False, misleading, or deceitful information;</li>
          <li>
            Disreputable, defamatory, threatening or harassing, improper, unacceptable information;
          </li>
          <li>
            Discriminative information, or information that facilitates discrimination based on
            race, Sex, religion, nationality, invalidity, sexual orientation, or age;
          </li>
          <li>Information that violates these Rules;</li>
          <li>
            Information that violates applicable laws and regulations (including, without
            limitation, those regulating export control, consumer protection, unfair competition or
            false advertising, and intellectual property rights);
          </li>
          <li>
            Direct or indirect references to any other websites, which comprise any content being
            able to violate these Rules;
          </li>
          <li>
            Data infringing personal (non-proprietary) rights and intellectual property rights of
            the third parties;
          </li>
          <li>Information that facilitates fraud, deception, or breach of faith;</li>
          <li>
            Information violating or encroaching on the third party’s property, commercial secret,
            or right to privacy;
          </li>
          <li>
            Personal or identifying information about other persons without their express consent;
          </li>
          <li>
            Information comprising data that may encroach on privacy rights, abuse anybody’s honor,
            merit, or business reputation;
          </li>
          <li>False or misleading information;</li>
          <li>
            Viruses or any other techniques being able to damage the Resource, Administrator, or
            other Users;
          </li>
        </ul>
        <h6>References or information about websites competing with lhoops.</h6>
      </div>
    </div>

    <div>
      <h3 class="text-2xl font-semibold">Intellectual Property Rights</h3>
      <ul class="list-disc">
        <li>
          The User grants to the Administrator and other users a non-exclusive right over posts for
          use solely in the scope of functionality provided by lhoops, except when such use damages
          or may damage legally protected right holder’s interests.
        </li>
        <li>
          The User also grants to the Administrator a non-exclusive right to use content, which is
          located on lhoops and legally owned by him/her, without compensation so that the
          Administrator would be able to ensure the operation of lhoops to the extent determined by
          its functionality. The abovementioned non-exclusive right is provided for the period of
          posting content to lhoops all over the world. The Administrator is entitled to assign
          rights described in this clause to the third parties.
        </li>
        <li>
          Any use of lhoops or any content therein, except that permitted by these Terms and
          Conditions or in the event of express right holder’s consent to such use, without the
          prior written consent of a right holder is strictly prohibited.
        </li>
        <li>Responsibility for violation of exclusive rights.</li>
        <li>
          The User shall be solely responsible for any content or other information, that he/she
          downloads or in any other way makes publicly available (posts) on lhoops. The User shall
          not download, distribute or post content on lhoops if he/she is not entitled to such
          activity. In case of infringement of rights, the rules of filing of notification on the
          infringement of rights stated herein shall be used.
        </li>
        <li>
          The Administrator may, review lhoops for the presence of any prohibited content and may
          delete or displace (without notice) any content at its discretion, for any reason or
          without it, including but not limited to deletion or displacement of content which
          violates these Terms and Conditions, laws and/or may infringe rights, cause damages or
          endanger the safety of other Users or third parties.
        </li>
        <li>
          Materials on lhoops, except those posted by the User, including but not limited to texts,
          software, scripts, graphics, photos, sounds, music, videos, interactive functions, etc.
          (“Materials”) and trademarks, service marks, and logos included in it (“Marks”) belong to
          the Administrator representing items of copyright and any other intellectual property
          rights. The unauthorized use of such Materials and Marks without prior notice of the
          Administrator is prohibited.
        </li>
      </ul>
    </div>

    <div>
      <h3 class="text-2xl font-semibold">
        Notice for claims of intellectual property violations and copyright infringement
      </h3>
      <ul class="list-disc">
        <li>
          If you are a holder of intellectual property rights or a person authorized to act in the
          name of a holder of intellectual property rights and you reasonably believe that
          information which is posted on lhoops infringes your intellectual property rights or the
          intellectual property rights of a person, in whose name you act, you may provide
          notification to the Administrator requiring for detection of such material. In this
          regard, you shall warrant that your appeal has a legal basis and that you act in good
          faith according to the law.
        </li>
        <li>
          If you are a holder of intellectual property rights or a person authorized to act in the
          name of a holder of intellectual property rights and you reasonably believe that
          information which is posted on lhoops infringes your intellectual property rights or the
          intellectual property rights of a person, in whose name you act, you may provide
          notification to the Administrator requiring for detection of such material. In this
          regard, you shall warrant that your appeal has a legal basis and that you act in good
          faith according to the law.
        </li>
        <li>
          To provide relevant notification concerning the infringement of rights, you shall ensure
          that your request corresponds to the form below and includes the following:
        </li>
        <li>
          An appeal should include the physical or electronic signature of a person empowered for
          acting in the name of a holder of an exclusive right, which is believed to be infringed.
        </li>
        <li>
          The items of intellectual property rights, rights which are allegedly infringed, shall be
          specified. If several items exist, the entire list of such items shall be provided;
        </li>
        <li>
          You shall specify materials (with an indication of specific URL pages), which are stated
          to infringe rights or themselves are the objects of infringement;
        </li>
        <li>
          You shall provide contact information for the Administrator to contact you, for example,
          address, phone number, and email address;
        </li>
        <li>
          Signed application reasonably believed to be objects of complaint concerning infringement
          of intellectual property rights used without a right holder’s or its representative’s
          consent, and also not allowed by law;
        </li>
        <li>
          Signed application concerning that a holder of intellectual property rights releases the
          Administrator from any third parties’ claims related to the deletion of relevant materials
          by the Administrator;
        </li>
        <li>
          Signed application concerning that information contained in a notification is accurate
          under penalty of perjury, and you are authorized to act in the name of a holder of
          exclusive right, which has been supposedly infringed;
        </li>
        <li>
          Statutory regulations indicated which you believe to be violated in connection to using
          disputable content;
        </li>
        <li>State jurisdiction in which you believe the rights to be infringed;</li>
        <li>
          Copies of documents establishing rights for an object of intellectual property right,
          which is subject to security, as well as a document that confirms powers for acting in the
          holder’s name, in attachments to your appeal.
        </li>
      </ul>
    </div>

    <div>
      <h3 class="text-2xl font-semibold">Enforcement</h3>
      <ul class="list-disc">
        <li>
          The Administrator reserves a right to delete or block access to the information posted by
          the User without notice in the event of:
        </li>
        <li>Receiving Judgments from competent public authorities</li>
        <li>
          The claim of a holder of intellectual property rights to terminate infringement of his/her
          rights by a user on lhoops, other infringements of rights or legal interests of other
          lhoops Users, of legal entities or individuals upon their reasonable appeal;
        </li>
        <li>Detecting information posted to lhoops is prohibited under these Rules.</li>
        <li>
          The Administrator shall be entitled to block access to the information posted by users to
          lhoops at its sole discretion having provided a user with relevant substantiation.
        </li>
      </ul>
    </div>

    <div>
      <h3 class="text-2xl font-semibold">User’s and organizations interactions</h3>
      <p>
        The Administrator disclaims any responsibility for the User’s interaction with any
        organizations and/or persons in the course of using lhoops. This includes but is not limited
        to, payments as well as any other interaction with other organizations and/or individuals.
        Transactions are concluded only between Users and such organizations and/or individuals. The
        Administrator disclaims responsibility for such interactions or other losses incurred
        following such relations or interactions. If any dispute arises between you and one or
        several other users, you shall indemnify the Administrator, its officials, employees,
        agents, and successors from all claims, requirements, and losses (whether direct or
        indirect) of whatsoever kind or nature, which arise or relate to such disputes and /or goods
        and services.
      </p>
    </div>

    <div>
      <h3 class="text-2xl font-semibold">Disclaimer of warranties and limitation of liability</h3>
      <ul class="list-disc">
        <li>
          lhoops and all information, content, materials, products (including software), and other
          services included on or otherwise made available to you through lhoops are provided by
          lhoops on an “as is” and “as available” basis unless otherwise specified in writing.
          lhoops makes no representations or warranties of any kind, express or implied, as to the
          operation of lhoops, or information, content, materials, products (including software), or
          other services included on or otherwise made available to you through lhoops unless
          otherwise specified in writing.
        </li>
        <li>You expressly agree that your use of lhoops is at your sole risk.</li>
        <li>
          To the full extent permissible by law, lhoops disclaims all warranties, express or
          implied, including, but not limited to, implied warranties of suitability and fitness for
          a particular purpose. lhoops does not warrant that services, information, content,
          materials, products (including software), or other services included on or otherwise made
          available to you through lhoops, servers, or electronic communications sent lhoops are
          free of viruses or other harmful components. To the full extent permissible by law, lhoops
          will not be liable for any damages of any kind arising from the use of any service, or any
          information, content, materials, products (including software), or other services included
          on or otherwise made available to you through lhoops, including, but not limited to
          direct, indirect, incidental, punitive, and consequential damages, unless otherwise
          specified in writing.
        </li>
      </ul>
    </div>

    <div>
      <h3 class="text-2xl font-semibold">Indemnification</h3>
      <p>
        Users agree to indemnify lhoops as well as its officers, directors, and employees, from and
        against all losses, expenses, damages, and costs, including attorney’s fees, resulting from
        any violation of these Terms and Conditions (including negligent or wrongful conduct).
      </p>
    </div>

    <div>
      <h3 class="text-2xl font-semibold">Modifications</h3>
      <p>
        lhoops reserves the right to modify these Terms and Conditions. Such modifications shall be
        effective immediately upon posting on lhoops. You are responsible for reviewing such
        modifications. Your continued access or use of lhoops shall be deemed your acceptance of the
        modified terms and conditions.
      </p>
    </div>
  </section>

  <AppFooter />
</template>

<script>
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'TermsConditions',

  components: {
    AppFooter
  }
}
</script>
