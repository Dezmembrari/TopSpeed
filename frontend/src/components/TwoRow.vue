<template>
  <div class="two-row-component">
    <!-- First Row -->
    <div class="row" v-if="showFirstRow">
      <div class="column text-column">
        <h1>{{ title1 }}</h1>
        <p>{{ text1 }}</p>
      </div>
      <div class="column image-column">
        <img :src="image1" :alt="title1" />
      </div>
    </div>

    <!-- Second Row (reversed layout) -->
    <div class="row reversed" v-if="showSecondRow">
      <div class="column image-column">
        <img :src="image2" :alt="title2" />
      </div>
      <div class="column text-column">
        <h1>{{ title2 }}</h1>
        <p>{{ text2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title1: {
      type: String,
      required: false,
      default: ''
    },
    text1: {
      type: String,
      required: false,
      default: ''
    },
    image1: {
      type: String,
      required: false,
      default: ''
    },
    title2: {
      type: String,
      required: false,
      default: ''
    },
    text2: {
      type: String,
      required: false,
      default: ''
    },
    image2: {
      type: String,
      required: false,
      default: ''
    },
    showFirstRow: {
      type: Boolean,
      default: true
    },
    showSecondRow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.two-row-component {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 30px;
  padding: 12px;
  
  @media (min-width: 1280px) {
    max-width: 1280px;
    margin: auto;
    align-content: center;
    justify-content: center;
  }

}

.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  background: white;
  border-radius: 25px;
  padding: 24px;
}

.column {
  flex: 1;
}

.text-column h1 {
  align-content: center;
  justify-content: center;
}

.text-column p {
  font-size: 1.2rem;
}

.image-column img {
  margin: auto;
  display: flex;
  border-radius: 25px;
  width: 350px;
  height: 237.92px;
  border: 2px solid #ffffff; /* Add border */
  box-shadow: 0 4px 8px rgb(0, 0, 0,0.3), 0 6px 20px rgb(0, 0, 0,0.4); /* Add drop shadow */
            

  @media (max-width:768px) {
    width: 70%;
    height: auto;
  }

}

/* Responsive styles */
@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
}

/* Reversed row for the second row */
.reversed {
  flex-direction: row;
}

@media (max-width: 768px) {
  .reversed {
    flex-direction: column-reverse;
  }
}
</style>