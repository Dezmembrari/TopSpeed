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

<style lang="scss" scoped>
  .hero-area {
    position: relative;
    width: 100%;
    height: 80vh;
    max-height: 670px;
    min-height: 620px;

    .overlap {
      position: absolute;
      width: 100%;
      height: 80vh;
      max-height: 680px;
      min-height: 620px;
      top: 0;
      left: 0;
      overflow: hidden;

      .imagine {
        position: absolute;
        height: 718px;
        top: -10px;
        left: 440px;

        .whatsapp-image {
          position: absolute;
          width: 100%;
          height: 711px;
          top: 1px;
          left: 0;
        }
      }

      .rectangle {
        position: absolute;
        width: 1280px;
        top: 0;
        left: 0;
        backdrop-filter: blur(1px) brightness(100%);
        background: linear-gradient(90deg, rgb(255, 255, 255) 40%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0) 80%);
      }

      .text {
        display: flex;
        flex-direction: column;
        width: 1000px;
        align-items: center;
        justify-content: center;
        gap: 18px;
        position: absolute;
        top: 133px;
        left: -107px;

        .titlu {
          width: 100%;
          height: 189px;
          background-size: 100% 100%;
          background-image: url('./src/assets/images/polygon-1-1.webp');

          .CENTRU-CONSTATARE {
            position: absolute;
            left: 210px;
            top: 26px;
            width: 689px;
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            color: white;
            font-size: 40px;
            line-height: 40px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            -webkit-box-orient: vertical;

            .span {
              font-size: 81px;
              line-height: 81px;
            }
          }
        }

        .paragraph {
          width: 577px;
          background: linear-gradient(180deg, rgb(7, 110, 9) 0%, rgb(5.49, 86.31, 7.06) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-family: 'Roboto', sans-serif;
          font-size: 36px;
          text-align: justify;
          line-height: 44px;
        }

        .extended-FAB {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 166px;
          height: 60px;
          background-color: transparent;
          border-radius: 25px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          transition: all 0.2s ease;

          &:hover {
            scale: 1.2;
          }

          .img {
            width: 24px;
            height: 24px;
          }

          .label-text {
            font-family: 'Roboto', sans-serif;
            color: var(--receptie-theme-3syslightprimary);
            font-size: var(--material-theme-green-label-large-font-size);
          }
        }
      }
    }
  }

  .reviews {
    position: sticky;
    top: 10vh;
    right: 10px;
    scale: 0.8;
    z-index: 10;
    float: right;
    margin-top: 20px;

    @media (max-width: 1280px) {
      scale: 0.6;
      right: -20px;
    }
  }

  @media (max-width: 1280px) {
    .hero-area {
      height: 60vw;
      min-height: 540px;
      max-height: 690px;

      .overlap {
        height: 60vw;
      }

      .imagine {
        top: -2px;
        left: 0;
      }

      .text {
        width: 80%;
        padding-left: 12px;

        .titlu {
          height: 15vw;

          .CENTRU-CONSTATARE {
            left: 16vw;
            font-size: 3vw;
            line-height: 3vw;

            .span {
              font-size: 6.3vw;
            }
          }
        }

        .paragraph {
          width: 50%;
          font-size: 2.5vw;
          line-height: calc(2.5vw + 2px);
        }

        .extended-FAB {
          padding: 12px 25px;
        }
      }
    }
  }

  @media (max-width: 720px) {
    .hero-section {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 17px;
      min-width: 360px;
    //   background-color: whitesmoke;
    }

    .hero-content {
      align-items: center;
      gap: 15px;
      padding: 24px;
    }

    .hero-title {
      gap: 4.5px;
    }

    .hero-description {
      padding: 15px 20px;
    }

    .contact-button {
      display: inline-flex;
      align-items: center;
      background-color: var(--receptie-theme-3syslightsecondary);
      border-radius: 118.08px;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        transform: scale(1.1);
      }

      .button-content {
        gap: 14px;
        padding: 19px;
      }

      .button-icon {
        height: 28.3px;
        width: 28.3px;
      }
    }

    .hero-image {
      padding: 0 20px 25px 25px;

      img {
        border-radius: 4em;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    }
  }
</style>