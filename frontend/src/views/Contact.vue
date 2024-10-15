<template>
  <div class="padding_contact">
     <Contact_alt/>
  </div>

</template>

<script setup>
import Contact_alt from '@/components/Contact_alt.vue';


</script>

<style lang="scss" scoped>

.padding_contact{
  background-color: var(--receptie-theme-3syslightsurface-container-lowest);
  @media (min-width:1280px) {
    padding-top:20vh;
    padding-bottom:20vh;
  }
}

</style>
