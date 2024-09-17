<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue';
import Footers from './components/Footer.vue';
</script>

<template>
  <Navigation/>
  <RouterView />
  <Footers />
</template>

<style scoped>

</style>
