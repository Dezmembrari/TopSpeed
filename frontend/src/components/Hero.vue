<template>
    <div v-if="!isSmallScreen">
        <div class="hero-area">
            <div class="reviews">
                <RatingBadge :averageRating="4.5" :totalReviews="70" />
            </div>

            <div class="overlap">
                <div class="imagine">
                    <img alt="Poza receptie" class="whatsapp-image"
                        src="../assets/images/whatsapp-image-2024-08-04-at-15-45-14-e5fa0d06-1-1.webp" 
                        fetchpriority="high"
                        />
                </div>
                <div class="rectangle"></div>
                <div class="text">
                    <div class="titlu">
                        <h1 class="CENTRU-CONSTATARE">
                            <span class="text-wrapper">CENTRU CONSTATARE DAUNE </span>
                            <span class="span">SERVICE AUTO</span>
                        </h1>
                    </div>
                    <p class="paragraph">
                        Servicii complete de constatare și reparații daune auto pe asigurare, cu mașină la schimb și
                        transport cu
                        platformă fără cost suplimentar.
                    </p>
                    <router-link class="link" :to="{ name: 'contact' }">
                        <div class="extended-FAB">
                            <img alt="" class="img" src="../assets/images/icon-46@21x.webp" />
                            <div class="label-text">Contact</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="hero-section">
            <div class="hero-content">
                <div class="hero-title">
                    <div class="title-line">
                        <span class="title-text">CENTRU CONSTATARE DAUNE<br /></span>
                    </div>
                    <div class="title-line">
                        <span class="title-text-bold">SERVICE AUTO</span>
                    </div>
                </div>
                <div class="hero-description">
                    <p class="description-text">
                        Servicii complete de constatare și reparații daune auto pe asigurare, cu mașină la schimb și
                        transport cu
                        platformă fara cost suplimentar.
                    </p>
                </div>
                <a href="tel:+40788990011" class="contact-button">
                    <div class="button-content">
                        <img class="button-icon" src="../assets/images/icon-49@2x.webp" alt="Icon" />
                        <div class="button-text">
                            CONTACTEAZA-NE
                        </div>
                    </div>
                </a>
            </div>
            <div class="hero-image">
                <img alt="Receptie Top Speed Service" fetchpriority="high" src="../assets/images/receptie.webp" />
            </div>
        </div>
    </div>

</template>

<script>
import RatingBadge from './RatingBadge.vue';

export default {
    name: 'HeroArea',
    components: {
        RatingBadge,
    },
    data() {
        return {
            isSmallScreen: window.innerWidth <= 720,
        };
    },
    mounted() {
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
        checkScreenSize() {
            this.isSmallScreen = window.innerWidth <= 720;
        },
    },
};




</script>

