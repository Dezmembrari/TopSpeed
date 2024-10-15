<template>
    
  <input type="hidden" id="anPageName" name="page" value="desktop-u621280p" />


  <Hero/>

  <ResponsiveCardComponent/>

  <ResponsiveSteps/>
  
  <Contact_alt/>

</template>

  
<script setup>
import Contact_alt from '@/components/Contact_alt.vue';
import Hero from '@/components/Hero.vue';
import ResponsiveCardComponent from '@/components/ResponsiveCardComponent.vue';
import ResponsiveSteps from '@/components/ResponsiveSteps.vue';

</script>
  
<style lang="scss" scoped>
  
  html, body {
  overflow: hidden; /* Hide scrollbars */
  }

  :global(#app) {
  max-width: 100% !important; /* Ensure full width */
  margin: 0 !important; /* Remove margin if needed */
  padding: 0px !important; /* Adjust padding if needed */
  /* Add other styles you need to override */
  }

  .grecaptcha-badge { 
    visibility: hidden !important;
  }

</style>