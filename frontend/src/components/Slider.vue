<template>
    <div class="slider">
      <div class="list">
        <!-- Dynamically create items based on the images array -->
        <div class="item" v-for="(image, index) in images" :key="index">
          <img :src="getImageUrl(image)" alt="" />
        </div>
        <!-- Duplicate items for smooth infinite scrolling -->
        <div class="item" v-for="(image, index) in images" :key="'duplicate-' + index">
          <img :src="getImageUrl(image)" alt="" />
        </div>
      </div>
    </div>
  </template>
  


  
  <script setup>
  // Define an array of image paths
  const images = [
    "Autonet.svg",
    "Autototal.webp",
    "logo-materom.webp",
    "ic_new_logo.webp",
    "LogoConex20Ani_Gri-1024x399.webp",

    "Autonet.svg",
    "Autototal.webp",
    "logo-materom.webp",
    "ic_new_logo.webp",
    "LogoConex20Ani_Gri-1024x399.webp"
  ];
  
  // Function to generate the full URL for images dynamically
  const getImageUrl = (imageName) => new URL(`./images/${imageName}`, import.meta.url).href;
  </script>
  
  <style scoped>
  body {
    margin: 0;
    background-color: white;
  }
  
  .slider {
    width: 100%;
    overflow: hidden; /* Hide overflow for smooth animation */
    display: flex;
    align-items: center;
    position: relative;
    mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent); /* Fade effect on edges */
  }
  
  .list {
    display: flex;
    gap: 50px; /* Constant distance between items */
    animation: scroll 20s linear infinite; /* Infinite scrolling animation */
  }
  
  .item {
    flex-shrink: 0; /* Prevent shrinking */
    width: 100px; /* Fixed width for each item */
    height: 50px; /* Fixed height for each item */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .item img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Ensure images fit properly */
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-1 * (100px + 50px) * 5)); /* Move left by the total width */
    }
  }
  
  .slider:hover .list {
    animation-play-state: paused; /* Pause animation on hover */
  }
  </style>