<template>
  
    <a class="rating-badge" href="https://g.page/r/Ce9q2C3lRb61EBE/review">
      <!-- <a 
      class="div-button"
      href="https://g.page/r/Ce9q2C3lRb61EBE/review"
      target="_blank"
      > -->
      <div class="rating-text">
        <span class="average-rating">{{ averageRating }} Rating</span>
        <div class="stars">
          <span v-for="n in 5" :key="n" class="star" :style="getStarStyle(n)"></span>
        </div>
        <span class="review-count">({{ totalReviews }}+ reviews)</span>
      </div>
      <div class="google-badge">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" />
        <span>Google Reviews</span>
      </div>
    <!-- </a> -->
  </a>
</template>

<script>
import fullStar from '../components/images/star-1-1@2x.webp';

export default {
  name: "RatingBadge",
  props: {
    averageRating: {
      type: Number,
      required: true,
    },
    totalReviews: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getStarStyle(starIndex) {
      const wholeStars = Math.floor(this.averageRating);
      const fractionalPart = this.averageRating - wholeStars;

      let width = '0px'; // Default to 0 for empty stars
      let height = '24px'; // Fixed height for stars

      if (starIndex <= wholeStars) {
        // Full star
        width = '24px'; // Full star width
      } else if (starIndex === wholeStars + 1 && fractionalPart > 0) {
        // Half star
        width = `${fractionalPart * 24}px`; // Adjust width based on fractional rating
      }

      return {
        backgroundImage: `url(${fullStar})`,
        backgroundSize: 'cover', // Maintain aspect ratio
        width: width, // Set width based on rating
        height: height, // Fixed height
        overflow: 'hidden', // Hide overflow if necessary
        display: 'inline-block', // Ensure stars display inline
        backgroundPosition: '0 0', // Align background image properly
      };
    },
  },
};
</script>

<style lang="scss" scoped>

.rating-badge {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  padding: 10px;
  column-gap: 10px;
  border-radius: 25px;
  width: 100%;
  max-width: 360px; /* Full width on smaller screens */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  box-sizing: border-box; /* Ensures padding is included in the width */
  // scale: 0.8;
}

// .div-button{
//   background-color: red;
//   width: 100%;
//   height: 100%;
// }

.rating-text {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.average-rating {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: black;
}

.stars {
  position: static;
  display: flex;
  margin-bottom: 5px;
}

.star {
  margin-right: 3px;
}

.review-count {
  font-size: 0.9rem;
  color: #666;
}

.google-badge {
  display: flex;
  align-items: center;
}

.google-badge img {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}

.google-badge span {
  font-size: 0.9rem;
  font-weight: bold;
  color: #4285f4;
}

/* Responsive design for smaller screens */
@media (max-width: 600px) {
  .rating-badge {
    flex-direction: column;
    text-align: center;
  }
  .google-badge {
    margin-top: 10px;
  }
  .average-rating {
    font-size: 1.2rem;
  }
  .review-count {
    font-size: 0.8rem;
  }
}
</style>
