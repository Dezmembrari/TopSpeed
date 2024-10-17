<template>
  <input type="hidden" id="anPageName" name="page" value="desktop-u621280p" />

  <!-- Static Hero component -->
   <div v-once><Hero /></div>
  

  <!-- Dynamically imported components wrapped in Suspense -->
  <Suspense>
    <template #default>
      <!-- Wrap lazy-loaded components in a single parent element -->
      <div>
        <ResponsiveCardComponent />
        <ResponsiveSteps />
        <Contact_alt />
      </div>
    </template>
    <template #fallback>
      <!-- Fallback content during loading -->
      <div>Loading components...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'; // <-- Import this!
import Hero from '@/components/Hero.vue';

// Lazy load the remaining components
const ResponsiveCardComponent = defineAsyncComponent(() => import('@/components/ResponsiveCardComponent.vue'));
const ResponsiveSteps = defineAsyncComponent(() => import('@/components/ResponsiveSteps.vue'));
const Contact_alt = defineAsyncComponent(() => import('@/components/Contact_alt.vue'));
</script>

<style scoped>
/* Optional styling */
</style>
