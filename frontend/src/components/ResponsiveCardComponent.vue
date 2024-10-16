<template>
  <div class="x3-cards-container" :class="screenSizeClass">
    <div class="x3-card-system">
      <h2 class="description">
        Daca aduceți autoturismul la noi pentru reparații pe asigurare, vă oferim gratuit următoarele servicii:
      </h2>
      <div class="frame-12">
        <div v-for="(card, index) in cards" :key="index" :class="['card', screenSizeClass, `card-${index + 1}`]">
          <div class="content">
            <div class="picture"></div>
            <div class="frame">
              <h1 class="text-wrapper">{{ card.title }}</h1>
              <p class="div">{{ card.description }}</p>
            </div>
            <div class="tag-wrapper">
              <router-link class="link" :to="card.link">
                <div class="tag">
                  <div class="tag-or-button">Detalii</div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';

export default {
  name: 'ResponsiveCardComponent',
  setup() {
    const screenWidth = ref(window.innerWidth);

    const updateScreenWidth = () => {
      screenWidth.value = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener('resize', updateScreenWidth);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateScreenWidth);
    });

    const screenSizeClass = computed(() => {
      if (screenWidth.value <= 720) return 'mobile';
      if (screenWidth.value <= 1280) return 'tablet';
      return 'desktop';
    });

    const cards = [
      {
        title: 'Masina la schimb, oriunde!',
        description: 'Va punem la dispozitie mașină la schimb pe toată durata reparației, livrată gratuit la adresa dorită.',
        link: { name: 'servicii', hash: '#masina' }
      },
      {
        title: 'Transport gratuit, fara batai de cap!',
        description: 'Oferim transport cu platforma, fara costuri suplimentare, al masinii din locul indicat de dumneavoastra.',
        link: { name: 'servicii', hash: '#masina' }
      },
      {
        title: 'Intocmire dosar, fara efort!',
        description: 'Ne ocupam integral de intocmirea dosarului si depunerea acestuia scutindu-va de orice efort sau cost suplimentar.',
        link: { name: 'servicii', hash: '#dosar' }
      }
    ];

    return {
      screenSizeClass,
      cards
    };
  }
};
</script>

<style lang="scss" scoped>
// Variables
$mobile-breakpoint: 720px;
$tablet-breakpoint: 1280px;

// Mixins
@mixin card-base {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 24px;
  position: relative;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@mixin card-image($image-path) {
  background-image: url($image-path);
  background-size: cover;
  background-position: center;
}

/* Base styles */
.x3-cards-container {
  padding:25px 0 25px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  color: black;
  background-color: var(--receptie-theme-3syslightsurface-variant);
}

.x3-card-system {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  font-size: 32px;
  padding: 12px 0 12px 0;

  @media (max-width: 720px){
  font-size: 24px;
  }
  
}

.frame-12 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

/* Card styles */
.card {
  @include card-base;

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    gap: 24px;
  }

  .picture {
    position: relative;
    align-self: stretch;
    width: 100%;
    height: 215px;
    min-height: 45%;
    border-radius: 12px;
    overflow: hidden;
  }

  &.card-1 .picture {
    @include card-image('../assets/images/pexels.webp');
  }

  &.card-2 .picture {
    @include card-image('../assets/images/mercedes-platforma.webp');
  }

  &.card-3 .picture {
    @include card-image('../assets/images/hands.webp');
  }

  .frame {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1;
  }

  .text-wrapper {
    position: relative;
    width: 90%;
    margin-top: -1px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    color: #000000;
    font-size: 18px;
    letter-spacing: 0.15px;
    line-height: 24px;
    white-space: nowrap;
  }

  .div {
    position: relative;
    width: 90%;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: #3b3b3b;
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 20px;
  }

  .tag-wrapper {
    display: flex;
    flex-direction: column;
    width: 111.74px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .tag {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 14.89px;
    padding: 11.91px 17.87px;
    position: relative;
    align-self: stretch;
    width: 100%;
    background-color: var(--receptie-theme-3syslighttertiary-container);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 25px;
    // border-radius: 148.93px;
    // border: 1.49px solid #03dac6;
  }

  .tag-or-button {
    position: relative;
    width: fit-content;
    margin-top: -1.49px;
    margin-left: -6px;
    margin-right: -6px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: #ffffff;
    font-size: 20.8px;
    letter-spacing: 0;
    line-height: normal;
  }
}

/* Responsive styles */
.desktop {
  .card {
    width: calc(33.33% - 13.33px);
    max-width: 368px;
    height: fit-content;
  }

  .frame-12 {
    max-width: 1200px;
  }
}

.tablet {
  .card {
    width: calc(50% - 10px);
    max-width: 300px;
    height: 400px;

    .picture {
      height: 169px;
    }

    .text-wrapper {
      font-size: 16px;
    }

    .div {
      font-size: 14px;
    }

    .tag-or-button {
      font-size: 18px;
    }
  }

  .frame-12 {
    max-width: 100%;
  }
}

.mobile {
  min-width: 360px;

  .card {
    padding: 12px;
    min-width: 290px;
    width: 288.86px;
    height: fit-content;

    .picture {
      height: 168.76px;
    }

    .text-wrapper {
      font-size: 15.5px;
      line-height: 32px;
    }

    .div {
      font-size: 14px;
    }

    .tag-or-button {
      font-size: 16.4px;
    }
  }

  .frame-12 {
    flex-direction: column;
    align-items: center;
  }

}
</style>