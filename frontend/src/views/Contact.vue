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
  padding-top: 90px;
  @media (max-width:765px) {
    padding-top: 45px;
  }
}

</style>
