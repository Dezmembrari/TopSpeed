<template>
  <div class="padding_contact">
     <Contact_form/>
  </div>

</template>

<script setup>
import Contact_form from '@/components/Contact_form.vue';


</script>

<style lang="scss" scoped>

.padding_contact{
  padding-top: 90px;
  @media (max-width:765px) {
    padding-top: 45px;
  }
}

</style>
