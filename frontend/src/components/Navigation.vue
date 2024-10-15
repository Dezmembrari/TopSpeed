<template>

  <div v-if="!mobileBanner" class="top-banner-0w3mEM" data-id="244:1198">
    <div class="contact-727KgL" data-id="244:1199">
      <div class="telefon-E0lKG6" data-id="244:1200">
        <img class="phone-0TmUck phone" data-id="244:1201" src="./images/phone-1@2x.webp" alt="Phone" />
        <div class="x0788-990-011-0TmUck x0788-990-011 inter-normal-white-14-5px" data-id="244:1202">
          <a href="tel:+40788990011" style="color: white;">0788 990 011</a>
        </div>
      </div>
      <div class="email-E0lKG6" data-id="244:1203">
        <img class="mail-HSA5eX mail" data-id="244:1204" src="./images/mail-2@2x.webp" alt="mail" />
        <div class="officetopspeedserviceeu-HSA5eX officetopspeedserviceeu inter-normal-white-14-5px"
          data-id="244:1205">
          <a href="mailto:contact@topspeedservice.ro" style="color: white;">contact@topspeedservice.ro</a>
        </div>
      </div>
    </div>
    <div class="program-727KgL" data-id="244:1206">
      <img class="clock-cmdIc7" data-id="244:1207" src="./images/clock-1@2x.webp" alt="Clock" />
      <div class="luni-vineri-0800-cmdIc7 inter-normal-white-14-5px" data-id="244:1208">
        Luni-Vineri: 08:00-17:30
      </div>
    </div>
  </div>

  <header :class="{ 'scrolled-nav': scrolledNav }">
    <!--Top banner-->
    <nav>
      <!-- Branding -->
      <transition name="branding">
        <div v-if="showBranding" class="branding">
          <router-link :to="{ name: 'home' }">
            <img src="../components/images/TSP_Logo.webp" alt="Top Speed Service">
          </router-link>
        </div>
      </transition>

      <!-- Navigation -->
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{ name: 'home' }">Acasa</router-link></li>
        <li><router-link class="link" :to="{ name: 'servicii' }">Servicii</router-link></li>
        <!-- <li><router-link class="link" :to="{name: 'flota'}">Flota</router-link></li> -->
        <li><router-link class="link" :to="{ name: 'about' }">Despre noi</router-link></li>
        <li><router-link class="link-t" :to="{ name: 'contact' }">
            <div class="contacteaza-ne"> <img class="icon" src="./images/icon-46@2x.webp" />
              <p>Contacteaza-ne</p>
            </div>
          </router-link></li>
      </ul>

      <!-- Mobile Icon -->
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active': mobileNav }"><font-awesome-icon
            icon="bars" /></i>
      </div>

      <!-- Mobile Dropdown Navigation -->
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link class="link" :to="{ name: 'home' }" @click="closeMobileNav">Acasa</router-link></li>
          <li><router-link class="link" :to="{ name: 'servicii' }" @click="closeMobileNav">Servicii</router-link></li>
          <!-- <li><router-link class="link" :to="{name: 'flota'}" @click="closeMobileNav">Flota</router-link></li> -->
          <li><router-link class="link" :to="{ name: 'about' }" @click="closeMobileNav">Despre noi</router-link></li>
          <li><router-link class="link" :to="{ name: 'contact' }" @click="closeMobileNav">Contact</router-link></li>
        </ul>
      </transition>
    </nav>
  </header>


</template>


<script>
export default {
  name: "navigation",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      showBranding: false,
      mobileBanner: false,
    };
  },

  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);

    // Trigger the branding animation on page load
    setTimeout(() => {
      this.showBranding = true;
    }, 100);  // Adjust the delay as needed
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    closeMobileNav() {
      this.mobileNav = false;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 765) {
        this.mobile = true;
        this.mobileBanner = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      this.mobileBanner = false;
      return;
    }

  }
};
</script>



<style lang="scss" scoped>
header {
  top: 0;
  left: 0;
  background-color: var(--receptie-theme-3syslightsurface-variant);
  z-index: 99;
  width: 100%;
  position: sticky;
  transition: 0.5s ease all;
  color: rgba(255, 255, 255, 1.0);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


  nav {
    display: flex; // Align branding, navigation, and icon in a single row
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0px 24px;
    padding-left: 0; // Adjust padding to align with branding

    @media (min-width: 1140px) {
      .navigation {
        margin-right: 5%;
      }
    }



    .branding {
      display: flex;
      align-items: center;
      position: relative; // Fix branding to the left edge
      left: 0; // Stick to the left of the screen
      top: 0; // Align with the top of the header
      padding: 0px 0px; // Maintain padding for the logo
      background-color: transparent; // Add background color to match header


      a {
        display: inline-block; // Ensures it doesn't affect layout
        margin: 0; // Reset margins
        padding: 0; // Reset padding
        border: none; // Remove any borders
        text-decoration: none; // Remove underline

        img {
          display: block; // Ensures the image does not have extra space around it
          height: 48px; // Maintain aspect ratio
          width: auto; // Maintain aspect ratio
          transition: 0.5s ease all;
        }

        // img {
        //   height: 48px;
        //   transition: 0.5s ease all;

      }
    }

    .navigation {
      display: none; // Hidden by default (for mobile)

      @media (min-width: 766px) {
        display: flex; // Show on larger screens
        align-items: center;
        justify-content: flex-end;
        list-style: none;
        padding: 5;
        margin: 10;
        flex: 1; // Allows it to take remaining space
      }

      li {
        margin-left: 12px;

        .link {
          font-size: 14px;
          color: #000000;
          text-decoration: none;
          font-weight: 500;
          transition: 0.5s ease all;
          padding-bottom: 4px;
          border-bottom: 1px solid transparent;

          &:hover {
            color: #000000;
            border-color: #1a5e25; //schimbat
            scale: 1.2;
          }
        }

        .link-t {
          font-size: 14px;
          color: #00000000;
          text-decoration: none;
          font-weight: 500;
          transition: 0.5s ease all;
          padding-bottom: 4px;
          border-bottom: transparent;

          &:hover {
            color: transparent;
            border-color: transparent; //schimbat
            background-color: transparent;
            scale: 1.2;
            box-shadow: 0 4px 6px -1px rgba($color: #000000, $alpha: 0.1), 0 2px 4px -1px rgba($color: #000000, $alpha: 0.06);
          }
        }

        .contacteaza-ne {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 5px 10px;
          margin: 5px 0px 5px 0px;
          position: relative;
          flex: 0 0 auto;
          background-color: var(--receptie-theme-3syslightprimary);
          border-radius: 25px;
          transition: all 0.2s ease;
          color: #fff
        }
      }
    }

    .icon {
      display: flex;
      align-items: center;
      cursor: pointer;
      color: var(--receptie-theme-3syslighton-secondary-container); // icon color
      font-size: 24px;
      margin-left: auto; // Push icon to the right side

      @media (min-width: 766px) {
        display: none; // Hide icon on larger screens
      }
    }

    .icon-active {
      transform: rotate(180deg);
      transition: 0.8s ease all;
    }

    .dropdown-nav {
      display: flex; // Default to flex (mobile)
      flex-direction: column; // Stack vertically
      align-items: flex-start; // Align to the left
      position: fixed; // Position relative to nav
      top: 0px; // Adjusted to below the header
      height: 100%;
      width: 70%;
      left: 0;
      background-color: rgba(255, 255, 255, 0.98);
      padding: 16px 24px;
      list-style: none;
      margin: 0;
      z-index: 98;

      li {
        margin-left: 0px;
        margin-top: 10px;
        margin-bottom: 10px;

        .link {
          font-size: 24px;
          color: #000000;
          text-decoration: none;
          font-weight: 500;
          padding-bottom: 4px;
          transition: 0.8s ease all;

          &:hover {
            color: #a2d48e;
          }
        }
      }

      @media (min-width: 766px) {
        display: none; // Hide on larger screens
      }
    }




    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 0.3s ease-in-out all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-550px); ///Animatie de intrare din stanga in dreapta pe X
    }

    .mobile-nav-enter-to {
      transform: translateX(0px);
    }


    .branding-enter-active,
    .branding-leave-active {
      transition: 1.2s ease-out all;
    }

    .branding-enter-from,
    .branding-leave-to {
      transform: translateX(-100%); ///Animatie de intrare din stanga in dreapta pe X
      opacity: 0;
    }

    .branding-enter-to {
      transform: translateX(0px);
      opacity: 1;
    }

  }
}

.scrolled-nav {
  min-width: 360px;
  background-color: var(--receptie-theme-3syslightsurface-variant);
  box-shadow: 0 4px 6px -1px rgba($color: #000000, $alpha: 0.5), 0 2px 4px -1px rgba($color: #000000, $alpha: 0.06);

  nav {
    min-width: 360px;
    padding: 0px 15px;
    padding-left: 0; // Align padding to match with branding

    .branding {
      padding: 0px 0px; // Maintain padding for the logo

      img {
        height: 42px;

      }
    }
  }
}


.top-banner-0w3mEM {
  align-items: center;
  background-color: var(--receptie-theme-3black);
  display: flex;
  justify-content: space-between;
  left: 0px;
  padding: 12px 100px;
  position: relative;
  top: 0px;
  width: 100%;
  z-index: 100; // Ensure it stays above other elements

  @media (max-width: 766px) {
    display: none; // Hide banner on screens smaller than 750px
  }

  .contact-727KgL {
    align-items: center;
    background-color: transparent;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 15.143617630004883px;
    position: relative;

    .telefon-E0lKG6 {
      align-items: center;
      background-color: transparent;
      display: inline-flex;
      flex: 0 0 auto;
      gap: 2.900930166244507px;
      height: 21.924304962158203px;
      position: relative;

      .phone-0TmUck {
        height: 21.756977081298828px;
        width: 22.482208251953125px;
      }

      .x0788-990-011-0TmUck {
        display: -webkit-box;
        height: 16.680349349975586px;
        line-height: 17.4px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 96.4559326171875px;
      }
    }

    .email-E0lKG6 {
      align-items: center;
      background-color: transparent;
      display: inline-flex;
      flex: 0 0 auto;
      gap: 4.3513946533203125px;
      position: relative;

      .mail-HSA5eX {
        height: 21.756977081298828px;
        width: 23.715702056884766px;
      }

      .officetopspeedserviceeu-HSA5eX {
        display: -webkit-box;
        height: 17px;
        line-height: 17.4px;
        overflow: hidden;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 200.72918701171875px;
      }
    }
  }

  .program-727KgL {
    align-items: center;
    background-color: transparent;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8.0765962600708px;
    position: relative;

    .clock-cmdIc7 {
      height: 21.756977081298828px;
      width: 21.756977081298828px;
    }

    .luni-vineri-0800-cmdIc7 {
      display: -webkit-box;
      height: 17;
      line-height: 17.4px;
      overflow: hidden;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 171.63058471679688px;
    }
  }
}
</style>
